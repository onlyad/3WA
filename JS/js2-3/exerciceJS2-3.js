const TPS = 5.0; // pour la TPS
const TVQ = 9.975; // pour la TVQ

const TAX = TPS + TVQ;

var fNoTaxPrice, fVoucher, fFinalNoTaxPrice, fFinalPrice;

// default : no voucher.
fVoucher = 0;
// ask start price
fNoTaxPrice = parseFloat(prompt('Start price ?'));

// 1. on demande si le client dispose d'une réduction
if (confirm('Do you have a voucher ?')) {
    // 2. si oui, on lui demande le taux (%age) de réduction à appliquer
    fVoucher = parseFloat(prompt('Voucher (%) ?'));
}

fFinalNoTaxPrice = fNoTaxPrice * (100 - fVoucher) / 100;
fFinalPrice = fFinalNoTaxPrice * (100 + TAX) / 100;


document.write('<dl><dt>Start Price</dt><dd>' + fNoTaxPrice + '</dd></dl>');
document.write('<dl><dt>Voucher</dt><dd>' + fVoucher + '%</dd></dl>');
document.write('<dl><dt>Total (without taxes)</dt><dd>' + fFinalNoTaxPrice + '</dd></dl>');
document.write('<dl><dt>Total (with taxes)</dt><dd>' + fFinalPrice + '</dd></dl>');
