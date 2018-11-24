import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'adc-pay-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class PayWithCard {
  /**
   * What the button will show as text inside it.
   */
  @Prop() buttonLabel: string = 'Pay with card';

  /**
   * The background color of the button. The foreground will always be white. This value can be any valid CSS color, passed as a string.
   */
  @Prop() buttonColor: string = '#999999';

  /**
   * Whether the button should be disabled or not.
   */
  @Prop({ mutable: true }) isDisabled: boolean = false;

  @Prop() acceptedCards;

  @Prop() totalLabel: string = 'Total to pay';

  @Prop() amount: number;

  @Prop() currency: string = 'USD';

  buttonEl!: HTMLButtonElement;

  private async clickHandler(ev: MouseEvent) {
    ev.preventDefault();
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
      await paymentRequest.show();
    } catch (e) {
      throw e;
    }
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
