import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'adc-pay-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class PayWithCard {
  /**
   * What the button will show as text inside it.
   * Defaults to "Pay with card".
   */
  @Prop() buttonLabel: string = 'Pay with card';

  /**
   * The background color of the button. The foreground will always be white. This value can be any valid CSS color, passed as a string.
   * Defaults to "#999999".
   */
  @Prop() buttonColor: string = '#999999';

  /**
   * Whether the button should be disabled or not.
   * Defaults to false.
   */
  @Prop({ mutable: true }) isDisabled: boolean = false;

  /**
   * An array of accepted card types. If omitted, all possible card types will be accepted.
   * Possible values depend on the browser; Chrome currently accepts:
   * amex, diners, discover, jcb, mastercard, unionpay, mir, and visa
   */
  @Prop() acceptedCards: string[];

  /**
   * Label to show as description next to the amount to pay.
   * Defaults to "Total to pay"
   */
  @Prop() totalLabel: string = 'Total to pay';

  /**
   * Total amount to pay.
   * Defaults to 0.
   */
  @Prop() amount: number = 0;

  /**
   * Currency for the total amount.
   * Defaults to "USD".
   */
  @Prop() currency: string = 'USD';

  /**
   * Emmited when the user correctly enters their payment details in the browser form.
   */
  @Event() paymentSuccess: EventEmitter;

  /**
   * Emmited when the process is not completed, typically because of the user cancelling it.
   */
  @Event() paymentError: EventEmitter;

  buttonEl!: HTMLButtonElement;

  private async paymentHandler() {
    const paymentRequest = new PaymentRequest(
      [
        {
          supportedMethods: 'basic-card',
          data: {
            supportedNetworks: this.acceptedCards,
          },
        },
      ],
      {
        total: {
          label: this.totalLabel,
          amount: {
            currency: this.currency.toUpperCase(),
            value: this.amount.toString(),
          },
        },
      }
    );
    try {
      const paymentDetails = await paymentRequest.show();
      this.paymentSuccess.emit(paymentDetails);
      paymentDetails.complete('success');
    } catch (e) {
      this.paymentError.emit(e);
    }
  }

  private async clickHandler(ev: MouseEvent) {
    ev.preventDefault();
    this.paymentHandler();
  }

  componentWillLoad() {
    if (!!(window as any).PaymentRequest === false) {
      console.warn(
        'This browser does not support the Web Payments API. The @adc/pay web components will stay disabled.'
      );
      this.isDisabled = true;
    }
  }

  componentDidLoad() {
    this.buttonEl.addEventListener('click', this.clickHandler.bind(this));
  }

  render() {
    return (
      <button
        disabled={this.isDisabled}
        style={{ backgroundColor: this.buttonColor }}
        ref={element => (this.buttonEl = element as HTMLButtonElement)}
      >
        {this.buttonLabel}
      </button>
    );
  }
}
