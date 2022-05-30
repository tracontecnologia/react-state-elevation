import { useState } from 'react';

import { CurrencyConversor } from './components';

function valueToCurrency(currency, value) {
  switch (currency) {
    case 'BRL':
      return {
        BRL: value,
        USD: value / 5,
        EUR: value / 6,
      };
    case 'USD':
      return {
        BRL: value * 5,
        USD: value,
        EUR: value / 1.07,
      };
    case 'EUR':
      return {
        BRL: value * 6,
        USD: value * 1.07,
        EUR: value,
      };
    default:
      return {
        BRL: 0,
        USD: 0,
        EUR: 0,
      };
  }
}

export default function App() {
  const [currency, setCurrency] = useState('BRL');
  const [value, setValue] = useState(0);

  function handleCurrencyChange(newCurrency, newValue) {
    setCurrency(newCurrency);
    setValue(newValue);
  }

  const { BRL, USD, EUR } = valueToCurrency(currency, value);

  return (
    <div>
      <CurrencyConversor
        currency="BRL"
        value={BRL}
        onChange={handleCurrencyChange}
      />
      <CurrencyConversor
        currency="USD"
        value={USD}
        onChange={handleCurrencyChange}
      />
      <CurrencyConversor
        currency="EUR"
        value={EUR}
        onChange={handleCurrencyChange}
      />
    </div>
  );
}
