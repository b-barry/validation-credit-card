import { validate } from '../../../src/components/validation-credit-card';

/**
 * Visa cards start with 4.  Visa cards are valid if they have 13 to 16 digits.
 * Mastercard cards start with 5. Mastercard cards are valid if it has 16 digits.
 * American Express cards start with 3. The 2nd digit is either 4 or 7.
 *  American Express cards are valid if it has 15 digits.
 */
describe(' validate', () => {
  it('should return empty string when creditCardNumber param is empty or undefined or null', () => {
    expect(validate()).to.equal('');
    expect(validate(undefined)).to.equal('');
    expect(validate(null)).to.equal('');
  });
   it('should return "Visa" string when creditCardNumber param start with 4', () => {
    expect(validate('40')).to.equal('Visa');  
  });
});
