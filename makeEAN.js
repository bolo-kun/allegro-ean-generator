function makeEAN() {
  var prefx = "474"; //country prefix to pass the validation, Estonia used as example; doesn't really matter
  var random = Math.floor(Math.random() * 99999999) + 100000000;
  var ean = prefx + String(random);

  var paddedValue = ean.padStart(13, '0');
  var result = 0;
  for (let i = 0; i < paddedValue.length; i += 1) {
    result += parseInt(paddedValue.charAt(i), 10) * ((i % 2 === 0) ? 3 : 1);
  }
  ean = String(ean) + String((10 - (result % 10)) % 10);

  
  if(document.querySelector('input[placeholder="EAN (GTIN) (opcjonalnie)"]')){
	document.querySelector('input[placeholder="EAN (GTIN) (opcjonalnie)"]').setAttribute('value', ean);
  }
  else if(document.querySelector('input[placeholder="EAN (GTIN)"]')){
	document.querySelector('input[placeholder="EAN (GTIN)"]').setAttribute('value', ean);
  }
  // triggering change does not seem to work on their listing form so you still need to trigger by hand, any solution?
  
  return ean;
}

setTimeout(function(){ makeEAN(); }, 5000);
