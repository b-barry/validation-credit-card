/**
 * Validate the credit card number based on the following validation rules
 * Visa cards start with 4.  Visa cards are valid if they have 13 to 16 digits.
 * Mastercard cards start with 5. Mastercard cards are valid if it has 16 digits.
 * American Express cards start with 3. The 2nd digit is either 4 or 7.
 *  American Express cards are valid if it has 15 digits.
 * @param {string} creditCardNumber
 * @returns {string}
 */
export function validate(creditCardNumber = '') {
    if (creditCardNumber === '' ||
        creditCardNumber === undefined ||
        creditCardNumber === null) {
        return '';
    }
    const checkMarkHTMLEntityDecimal = '&#10003;';
    const firstDigit = creditCardNumber[0];
    const secondDigit = creditCardNumber[1];
    let labelCreditCardType = '';
    switch (firstDigit) {
        case '4':
            labelCreditCardType += 'Visa';
            if (creditCardNumber.length >= 13 && creditCardNumber.length <= 16) {
                labelCreditCardType = `Visa ${checkMarkHTMLEntityDecimal}`;
            }
            break;
        case '5':
            labelCreditCardType += 'Mastercard';
            if (creditCardNumber.length === 16) {
                labelCreditCardType = `Mastercard ${checkMarkHTMLEntityDecimal}`;
            }
            break;
        case '3':
            if (secondDigit === '4' || secondDigit === '7') {
                labelCreditCardType += 'American Express';
                if (creditCardNumber.length === 15) {
                    labelCreditCardType = `American Express ${checkMarkHTMLEntityDecimal}`;
                }
            }
            break;
        default:
            break;
    }
    return labelCreditCardType;
}
