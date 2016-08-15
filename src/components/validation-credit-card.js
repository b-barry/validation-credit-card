/* eslint-disable no-use-before-define */
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
    return handleVerificationAndValidationCreditCardNumber(creditCardNumber);
}

function handleVerificationAndValidationCreditCardNumber(creditCardNumber = '') {
    const checkMarkHTMLEntityDecimal = '&#10003;';
    const firstDigit = creditCardNumber[0];
    const secondDigit = creditCardNumber[1];
    let labelCreditCardType = '';
    const creditCardNumberLength = creditCardNumber.length;
    switch (firstDigit) {
        case '4':
            labelCreditCardType =
                handleVerificationAndValidationVisaCard(creditCardNumberLength,
                    checkMarkHTMLEntityDecimal);
            break;
        case '5':
            labelCreditCardType =
                handleVerificationAndValidationMastercardCard(creditCardNumberLength,
                    checkMarkHTMLEntityDecimal);
            break;
        case '3':
            if (secondDigit === '4' || secondDigit === '7') {
                labelCreditCardType =
                    handleVerificationAndValidationAmericanExpressCard(creditCardNumberLength,
                        checkMarkHTMLEntityDecimal);
            }
            break;
        default:
            labelCreditCardType = '?';
            break;
    }
    return labelCreditCardType;
}

function handleVerificationAndValidationVisaCard(creditCardNumberLength = 0,
    checkMarkHTMLEntityDecimal) {
    let labelCreditCardType = 'Visa';
    if (creditCardNumberLength >= 13 && creditCardNumberLength <= 16) {
        labelCreditCardType = `Visa ${checkMarkHTMLEntityDecimal}`;
    }
    return labelCreditCardType;
}

function handleVerificationAndValidationMastercardCard(creditCardNumberLength = 0,
    checkMarkHTMLEntityDecimal) {
    let labelCreditCardType = 'Mastercard';
    if (creditCardNumberLength === 16) {
        labelCreditCardType = `Mastercard ${checkMarkHTMLEntityDecimal}`;
    }
    return labelCreditCardType;
}

function handleVerificationAndValidationAmericanExpressCard(creditCardNumberLength = 0,
    checkMarkHTMLEntityDecimal) {
    let labelCreditCardType = 'American Express';
    if (creditCardNumberLength === 15) {
        labelCreditCardType = `American Express ${checkMarkHTMLEntityDecimal}`;
    }
    return labelCreditCardType;
}
