// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'basic credit card validation e2e tests': function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.logo')
      .assert.containsText('.page-header h1', 'Order now')
      .clearValue('#card')
      .setValue('#card', '7')
      .assert.containsText('#type', '?')
      .clearValue('#card')
      .setValue('#card', '')
      .assert.containsText('#type', '')

  },
  'Visa credit card validation e2e tests': function (browser) {
    browser
      .clearValue('#card')
      .setValue('#card', '4')
      .assert.containsText('#type', 'Visa')
      .clearValue('#card')
      .setValue('#card', '41234567891230')
      .assert.containsText('#type', 'Visa ✓')
      .clearValue('#card')
      .setValue('#card', '41234567891230')
      .assert.containsText('#type', 'Visa ✓')
      .clearValue('#card')
      .setValue('#card', '412345678912300')
      .assert.containsText('#type', 'Visa ✓')
      .clearValue('#card')
      .setValue('#card', '4123456789123000')
      .assert.containsText('#type', 'Visa ✓')
      .clearValue('#card')
  },
  'Mastercard credit card validation e2e tests': function (browser) {
    browser
      .clearValue('#card')
      .setValue('#card', '5')
      .assert.containsText('#type', 'Mastercard')
      .clearValue('#card')
      .setValue('#card', '5123456789123000')
      .assert.containsText('#type', 'Mastercard ✓')
  },
  'Amex credit card validation e2e tests': function (browser) {
    browser
      .clearValue('#card')
      .clearValue('#card')
      .setValue('#card', '34')
      .assert.containsText('#type', 'American Express')
      .clearValue('#card')
      .setValue('#card', '37')
      .assert.containsText('#type', 'American Express')
      .clearValue('#card')
      .setValue('#card', '371234567891230')
      .assert.containsText('#type', 'American Express ✓')
      .clearValue('#card')
      .setValue('#card', '341234567891230')
      .assert.containsText('#type', 'American Express ✓')
      .end()
  }
}
