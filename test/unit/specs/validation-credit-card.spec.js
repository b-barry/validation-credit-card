import { validate } from '../../../src/components/validation-credit-card';

describe(' validate', () => {
  it('should return empty string when creditCardNumber param is empty', () => {
    expect(validate()).to.equal('');
  });
})
