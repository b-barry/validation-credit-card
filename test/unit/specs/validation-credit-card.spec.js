import { validate } from '../../../src/components/validation-credit-card';

describe(' validate', () => {
  it('should return empty string when creditCardNumber param is empty or undefined or null', () => {
    expect(validate()).to.equal('');
    expect(validate(undefined)).to.equal('');
    expect(validate(null)).to.equal('');
  });
});
