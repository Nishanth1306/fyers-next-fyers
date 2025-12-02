const MTFCalcContent = () => {
  return (
    <div className="text-[#747e8b] w-[92%] md:w-[85%] mx-auto my-0 text-base font-normal leading-[27px] mt-5 md:mt-12 max-[680px]:p-0">
      <h2 className="text-[#2a394e] mb-2 text-xl font-semibold">
        MTF Calculator
      </h2>
      <p>
        Margin Trading Facility (MTF) lets you buy more stocks than your own
        funds would allow by borrowing from FYERS. You can use this facility on
        more than 1600+ stocks. The MTF Calculator helps you check how much
        margin you can get, interest charges, and your possible returns before
        taking a trade.
      </p>

      <h2 className="text-[#2a394e] mt-3 mb-2 text-xl font-semibold">
        What is an MTF Calculator?
      </h2>
      <p>
        The MTF Calculator shows how much you can borrow, the total investment
        amount, interest payable, and the returns you can expect. It helps you
        decide if using margin for a trade makes sense based on your expected
        profit and holding period.
      </p>

      <h2 className="text-[#2a394e] mt-3 mb-2 text-xl font-semibold">
        How to Use FYERS MTF Calculator
      </h2>
      <ol className="m-2 list-decimal list-inside">
        <li>Select the stock. The price will auto-fill.</li>
        <li>
          Enter your own capital under{" "}
          <strong className="font-semibold text-[#2a394e]">Your Fund</strong>.
        </li>
        <li>
          Enter how many days you plan to hold the stock (
          <strong className="font-semibold text-[#2a394e]">Tenure</strong>).
        </li>
        <li>Add your expected return percentage.</li>
      </ol>

      <p>The calculator will show:</p>
      <ul className="m-2 list-disc list-inside">
        <li>How much margin FYERS can give</li>
        <li>Applicable interest rate and total interest</li>
        <li>Total funds used and expected profit after interest</li>
      </ul>

      <h2 className="text-[#2a394e] mt-3 mb-2 text-xl font-semibold">
        Example
      </h2>
      <p>
        Rahul has ₹1,00,000 and wants to invest in NIFTYBEES using MTF. With 4x
        leverage, he gets ₹3,00,000 extra from FYERS. His total investment
        becomes ₹4,00,000.
      </p>
      <p>
        If NIFTYBEES goes up 10% in 30 days, Rahul’s profit is ₹40,000. Since he
        borrowed ₹3,00,000, and it falls under the ₹1,00,000.01 to ₹10,00,000
        slab, interest is charged at 15.49% per year.
      </p>
      <p>
        For 30 days, interest comes to ₹3,804.93. So, Rahul’s net return is
        ₹36,195.07. If he had used only his own ₹1,00,000, his profit would have
        been ₹10,000. The calculator helps you check if this extra return is
        worth the interest.
      </p>

      <h2 className="text-[#2a394e] mt-3 mb-2 text-xl font-semibold">
        Interest Rates – Slab Structure
      </h2>
      <p>
        Interest is charged based on how much you borrow in a day. One slab rate
        applies to your full borrowed amount for that day. Interest is
        calculated daily and updated weekly in your MTF ledger.
      </p>

      <table className="my-4">
        <thead className="text-left">
          <tr>
            <th className="px-1 pr-4">Borrowed Amount</th>
            <th className="px-1 pr-4">Interest Rate (per year)</th>
          </tr>
        </thead>
        <tbody className="text-left">
          <tr>
            <td className="px-1 pr-4">Up to ₹1,000</td>
            <td className="px-1 pr-4">0%</td>
          </tr>
          <tr>
            <td className="px-1 pr-4">₹1,000.01 – ₹1,00,000</td>
            <td className="px-1 pr-4">16.49%</td>
          </tr>
          <tr>
            <td className="px-1 pr-4">₹1,00,000.01 – ₹10,00,000</td>
            <td className="px-1 pr-4">15.49%</td>
          </tr>
          <tr>
            <td className="px-1 pr-4">₹10,00,000.01 – ₹25,00,000</td>
            <td className="px-1 pr-4">14.49%</td>
          </tr>
          <tr>
            <td className="px-1 pr-4">₹25,00,000.01 – ₹50,00,000</td>
            <td className="px-1 pr-4">12.49%</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2a394e] mt-3 mb-2 text-xl font-semibold">
        Why Use MTF?
      </h2>
      <ul className="m-2 list-disc list-inside">
        <li>
          <strong className="font-semibold text-[#2a394e]">
            Buy more with less:
          </strong>{" "}
          Increase your stock buying power
        </li>
        <li>
          <strong className="font-semibold text-[#2a394e]">
            Chance for higher returns:
          </strong>{" "}
          More exposure means more profit if the stock moves in your favour
        </li>
        <li>
          <strong className="font-semibold text-[#2a394e]">
            Hold your capital:
          </strong>{" "}
          Use margin instead of blocking your full funds
        </li>
        <li>
          <strong className="font-semibold text-[#2a394e]">Act quickly:</strong>{" "}
          Don’t miss out on opportunities due to cash limits
        </li>
      </ul>

      <p>
        <strong className="font-semibold text-[#2a394e]">Note:</strong> MTF
        increases both profit and risk. If the stock falls, your loss will also
        be higher. Always check the interest and margin requirements before
        using MTF.
      </p>

      <h2 className="text-[#2a394e] mt-3 mb-2 text-xl font-semibold">
        Conclusion
      </h2>
      <p>
        The FYERS MTF Calculator helps you check your cost, margin, and expected
        returns before you place a trade using borrowed funds. With transparent
        slab-based interest rates, you get full clarity on charges. Use the
        calculator to decide if using margin works for your trade.
      </p>
    </div>
  );
};

export default MTFCalcContent;
