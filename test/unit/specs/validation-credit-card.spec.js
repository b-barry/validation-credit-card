import { validate } from '../../../src/components/validation-credit-card';

/**
 * Visa cards start with 4.  Visa cards are valid if they have 13 to 16 digits.
 * Mastercard cards start with 5. Mastercard cards are valid if it has 16 digits.
 * American Express cards start with 3. The 2nd digit is either 4 or 7.
 *  American Express cards are valid if it has 15 digits.
 */
const checkMarkHTMLEntityDecimal = '&#10003;';
describe(' validate', () => {
  it('should return ? string when creditCardNumber param the card type is not known', () => {
    expect(validate('20')).to.equal('?');
    expect(validate('70')).to.equal('?');
    expect(validate('80')).to.equal('?');
    expect(validate('90')).to.equal('?');
  });
  it('should return empty string when creditCardNumber param is empty or undefined or null', () => {
    expect(validate()).to.equal('');
    expect(validate(undefined)).to.equal('');
    expect(validate(null)).to.equal('');
  });
  it('should return "Visa" string when creditCardNumber param start with 4', () => {
    expect(validate('40')).to.equal('Visa');
  });
  it('should return "Mastercard" string when creditCardNumber param start with 5', () => {
    expect(validate('50')).to.equal('Mastercard');
  });
  it(`should return "American Express" string when creditCardNumber param
   start with 3 and 2nd digit is either 4 or 7 `, () => {
      expect(validate('34')).to.equal('American Express');
      expect(validate('37')).to.equal('American Express');
    });
  it(`should return "Visa ${checkMarkHTMLEntityDecimal}" string when creditCardNumber param 
   start with 4 and 13 to 16 digits`, () => {
      const thirteenDigit = '4123456789123';
      expect(validate(thirteenDigit)).to
        .equal(`Visa ${checkMarkHTMLEntityDecimal}`);
      expect(validate(`${thirteenDigit}0`)).to
        .equal(`Visa ${checkMarkHTMLEntityDecimal}`);
      expect(validate(`${thirteenDigit}00`)).to
        .equal(`Visa ${checkMarkHTMLEntityDecimal}`);
      expect(validate(`${thirteenDigit}000`)).to
        .equal(`Visa ${checkMarkHTMLEntityDecimal}`);
    });
  it(`should return "Mastercard ${checkMarkHTMLEntityDecimal}" string when creditCardNumber param 
   start with 5 and hast 16 digits`, () => {
      const thirteenDigit = '5123456789123';
      expect(validate(`${thirteenDigit}000`)).to.equal(`Mastercard ${checkMarkHTMLEntityDecimal}`);
    });
  it(`should return "American Express ${checkMarkHTMLEntityDecimal}" string when creditCardNumber 
  param  start with 3, 2nd digit is either 4 or 7 and has 15 digits`, () => {
      expect(validate('371234567891230')).to
        .equal(`American Express ${checkMarkHTMLEntityDecimal}`);
      expect(validate('341234567891230')).to
        .equal(`American Express ${checkMarkHTMLEntityDecimal}`);
    });
});
