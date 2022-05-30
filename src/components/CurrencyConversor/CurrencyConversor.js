export function CurrencyConversor({ currency, value, onChange }) {
  return (
    <div>
      <label>{currency}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(currency, e.target.value)}
      />
    </div>
  );
}
