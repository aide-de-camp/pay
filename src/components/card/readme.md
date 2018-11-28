# adc-pay-card

This component shows a button that implements the `basic-card` payment method. The component accepts an amount to be charged and a currency for that amount. Upon user click, a browser-native payment dialog will be shown, and the result of the user's interaction with it will be emitted as an event.

## Security concerns

The `basic-card` payment method implemented by this component **does not tokenize nor encrypt** users' credit card details (number, etc) in any way. Please, use this component **ONLY within PCI-compliant** systems. Also, make sure you **understand the risks** before using this component in production environments.

There's the chance this `basic-card` method gets deprecated in future browser versions.

## Usage

### Plain HTML / vanilla JS

```html
<adc-pay-card
  button-text="Pay now!"
  button-color="teal"
  amount="10"
  currency="eur"
>
</adc-pay-card>

<script>
  const cardEl = document.querySelector('adc-pay-card');
  // Arrays cannot be passed as HTML attributes, so
  // we need to use JS for setting the accepted cards.
  cardEl.acceptedCards = ['mastercard', 'visa'];
  cardEl.addEventListener('paymentSuccess', ev => {
    console.log('payment success!');
    console.log(ev);
  });
  cardEl.addEventListener('paymentError', ev => {
    console.error('payment error!');
    console.error(ev);
  });
</script>
```

### JSX

TBA.

<!-- Auto Generated Below -->

## Properties

| Property        | Attribute      | Description                                                                                                                                                                                                              | Type       |
| --------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| `acceptedCards` | --             | An array of accepted card types. If omitted, all possible card types will be accepted. Possible values depend on the browser; Chrome currently accepts: amex, diners, discover, jcb, mastercard, unionpay, mir, and visa | `string[]` |
| `amount`        | `amount`       | Total amount to pay. Defaults to 0.                                                                                                                                                                                      | `number`   |
| `buttonColor`   | `button-color` | The background color of the button. The foreground will always be white. This value can be any valid CSS color, passed as a string. Defaults to "#999999".                                                               | `string`   |
| `buttonLabel`   | `button-label` | What the button will show as text inside it. Defaults to "Pay with card".                                                                                                                                                | `string`   |
| `currency`      | `currency`     | Currency for the total amount. Defaults to "USD".                                                                                                                                                                        | `string`   |
| `isDisabled`    | `is-disabled`  | Whether the button should be disabled or not. Defaults to false.                                                                                                                                                         | `boolean`  |
| `totalLabel`    | `total-label`  | Label to show as description next to the amount to pay. Defaults to "Total to pay"                                                                                                                                       | `string`   |

## Events

| Event            | Detail | Description                                                                             |
| ---------------- | ------ | --------------------------------------------------------------------------------------- |
| `paymentError`   |        | Emmited when the process is not completed, typically because of the user cancelling it. |
| `paymentSuccess` |        | Emmited when the user correctly enters their payment details in the browser form.       |

---

_Built with [StencilJS](https://stenciljs.com/)_
