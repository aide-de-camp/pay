import { newE2EPage } from '@stencil/core/testing';

describe('pay-card component', () => {
  it('should properly render', async () => {
    const page = await newE2EPage();
    await page.setContent(`<adc-pay-card></adc-pay-card>`);
    const el = await page.find('adc-pay-card');
    expect(el).toBeDefined();
  });
});
