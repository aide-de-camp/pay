import { Component } from '@stencil/core';

@Component({
  tag: 'adc-pay',
  shadow: true,
})
export class Pay {
  paymentButton: HTMLButtonElement;

  private async handleClick(ev) {
    ev.preventDefault();
    if ((window as any).PaymentRequest) {
      const googlePayPaymentMethod: PaymentMethodData = {
        supportedMethods: 'https://google.com/pay',
        data: {
          environment: 'TEST',
          apiVersion: 1,
          allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
          paymentMethodTokenizationParameters: {
            tokenizationType: 'PAYMENT_GATEWAY',
            // Check with your payment gateway on the parameters to pass.
            parameters: {},
          },
          cardRequirements: {
            allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA'],
            billingAddressRequired: true,
            billingAddressFormat: 'MIN',
          },
          phoneNumberRequired: true,
          emailRequired: true,
          shippingAddressRequired: true,
        },
      };

      const paymentMethods: PaymentMethodData[] = [
        {
          supportedMethods: ['basic-card'],
          data: {
            supportedNetworks: ['visa', 'mastercard'],
          },
        },
      ];

      const paymentDetails: PaymentDetailsInit = {
        total: {
          label: 'What you pay',
          amount: {
            currency: 'USD',
            value: '0',
          },
        },
      };

      const paymentOptions: PaymentOptions = {
        requestPayerName: true,
        requestPayerEmail: true,
      };

      const paymentRequest = new PaymentRequest(
        [...paymentMethods, googlePayPaymentMethod],
        paymentDetails,
        paymentOptions
      );
      try {
        await paymentRequest.show();
      } catch (e) {
        throw new Error(e);
      }
    }
  }
  componentDidLoad() {
    this.paymentButton.addEventListener('click', this.handleClick);
  }
  componentDidUnload() {
    this.paymentButton.removeEventListener('click', this.handleClick);
  }
  render() {
    return (
      <button ref={el => (this.paymentButton = el as HTMLButtonElement)}>
        the wrapper maybe?
      </button>
    );
  }
}
