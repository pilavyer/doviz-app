import { useState } from "react";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa"; // 💵 Amount ikonu
import "./App.css"; // Tailwind CSS still needs to be imported


const currencies = ["USD", "EUR", "GBP", "TRY", "JPY", "AUD"];

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("Select From");
  const [toCurrency, setToCurrency] = useState("Select To");
  const [showFromOptions, setShowFromOptions] = useState(false);
  const [showToOptions, setShowToOptions] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-start justify-center pt-16 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center gap-3">
          <BsCurrencyExchange />Döviz Çevirici 
        </h1>


{/* Amount Input with Icon */}
<div className="mb-6">
  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
    Amount
  </label>
  <div className="relative">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      <FaMoneyBillAlt />
    </span>
    <input
      type="text"
      inputMode="decimal"
      pattern="[0-9]*"
      id="amount"
      placeholder="Enter amount"
      value={amount}
      onChange={(e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) setAmount(value);
      }}
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>

        {/* From Currency Dropdown */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From Currency
          </label>
          <div
            onClick={() => {
              setShowFromOptions(!showFromOptions);
              setShowToOptions(false); // diğeri açıksa kapat
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-white"
          >
            {fromCurrency}
          </div>
          {showFromOptions && (
            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
              {currencies.map((cur) => (
                <li
                  key={cur}
                  onClick={() => {
                    setFromCurrency(cur);
                    setShowFromOptions(false);
                  }}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {cur}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* To Currency Dropdown */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To Currency
          </label>
          <div
            onClick={() => {
              setShowToOptions(!showToOptions);
              setShowFromOptions(false); // diğeri açıksa kapat
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-white"
          >
            {toCurrency}
          </div>
          {showToOptions && (
            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
              {currencies.map((cur) => (
                <li
                  key={cur}
                  onClick={() => {
                    setToCurrency(cur);
                    setShowToOptions(false);
                  }}
                  className="px-4 py-2 hover:bg-purple-100 cursor-pointer"
                >
                  {cur}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
