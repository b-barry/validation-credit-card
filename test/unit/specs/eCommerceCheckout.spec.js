import Vue from 'vue';
const eCommerceCheckoutInjector = require('!!vue?inject!../../../src/components/eCommerceCheckout');

describe('eCommerceCheckout.vue', () => {
  const eCommerceCheckoutMock = eCommerceCheckoutInjector({
    // mock it
    './validation-credit-card': {
      validate: () => 'Visa',
    },
  });
  const getComponent = ({ creditCardNumber }) => {
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: { test: eCommerceCheckoutMock },
      data: {
        creditCardNumber,
      },
    });
    return vm;
  };
  it('should render correct contents', () => {
    const data = {
      creditCardNumber: '',
    };
    const vm = getComponent(data).$mount();
    expect(vm.$el).to.be.ok;
    expect(vm.$el.querySelector('.page-header h1').textContent).to.contain('Order now');
  });
});
