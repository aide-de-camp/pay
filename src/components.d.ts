/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AdcPayCard {
    'acceptedCards': any;
    'amount': number;
    /**
    * The background color of the button. The foreground will always be white. This value can be any valid CSS color, passed as a string.
    */
    'buttonColor': string;
    /**
    * What the button will show as text inside it.
    */
    'buttonLabel': string;
    'currency': string;
    /**
    * Whether the button should be disabled or not.
    */
    'isDisabled': boolean;
    'totalLabel': string;
  }
  interface AdcPayCardAttributes extends StencilHTMLAttributes {
    'acceptedCards'?: any;
    'amount'?: number;
    /**
    * The background color of the button. The foreground will always be white. This value can be any valid CSS color, passed as a string.
    */
    'buttonColor'?: string;
    /**
    * What the button will show as text inside it.
    */
    'buttonLabel'?: string;
    'currency'?: string;
    /**
    * Whether the button should be disabled or not.
    */
    'isDisabled'?: boolean;
    'totalLabel'?: string;
  }

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface AdcPay {}
  interface AdcPayAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AdcPayCard': Components.AdcPayCard;
    'MyComponent': Components.MyComponent;
    'AdcPay': Components.AdcPay;
  }

  interface StencilIntrinsicElements {
    'adc-pay-card': Components.AdcPayCardAttributes;
    'my-component': Components.MyComponentAttributes;
    'adc-pay': Components.AdcPayAttributes;
  }


  interface HTMLAdcPayCardElement extends Components.AdcPayCard, HTMLStencilElement {}
  var HTMLAdcPayCardElement: {
    prototype: HTMLAdcPayCardElement;
    new (): HTMLAdcPayCardElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLAdcPayElement extends Components.AdcPay, HTMLStencilElement {}
  var HTMLAdcPayElement: {
    prototype: HTMLAdcPayElement;
    new (): HTMLAdcPayElement;
  };

  interface HTMLElementTagNameMap {
    'adc-pay-card': HTMLAdcPayCardElement
    'my-component': HTMLMyComponentElement
    'adc-pay': HTMLAdcPayElement
  }

  interface ElementTagNameMap {
    'adc-pay-card': HTMLAdcPayCardElement;
    'my-component': HTMLMyComponentElement;
    'adc-pay': HTMLAdcPayElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
