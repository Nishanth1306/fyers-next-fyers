export const faqs = [
    {
        id: "faq1",
        question: "How to calculate MTF charges?",
        answer:
            "To calculate Margin Trading Facility (MTF) charges, use the formula below:\nMTF Charge = (Borrowed Amount × Annual Interest Rate × Number of Days) ÷ 365\nThis formula gives the interest you will pay on the borrowed amount, based on your holding period and applicable slab rate.\nExample: If you borrow ₹3,00,000 for 30 days, the interest rate as per FYERS’ slab structure is 15.49% per annum.\nCalculation: ₹3,00,000 × 15.49% × 30 ÷ 365 = ₹3,804.93\nNote: FYERS charges MTF interest based on the slab your daily borrowed amount falls under. The interest is calculated daily and updated weekly in your MTF ledger.",
    },
    {
        id: "faq2",
        question: "How much interest is charged on MTF per day?",
        answer:
            "The daily interest charged on Margin Trading Facility (MTF) depends on your borrowed amount for that day. FYERS uses a slab-wise interest structure.\nDaily Interest = (Borrowed Amount × Annual Interest Rate) ÷ 365\nBorrowed Amount (₹) - Annual Interest Rate\nUp to 1,000 - 0%\n1,000.01 – 1,00,000 - 16.49%\n1,00,000.01 – 10,00,000 - 15.49%\n10,00,000.01 – 25,00,000 - 14.49%\n25,00,000.01 – 50,00,000 - 12.49%\nExample: If you borrow ₹2,00,000 in a day, the applicable rate is 15.49% per year.\nDaily Interest = ₹2,00,000 × 15.49% ÷ 365 = ₹84.84 (approx.)\nNote: Only one interest rate applies each day, based on your total borrowed amount. Interest is calculated daily and settled weekly in your MTF ledger.",
    },
    {
        id: "faq3",
        question: "Is MTF trading profitable?",
        answer:
            "MTF trading can be profitable, as it allows you to amplify your returns by using borrowed funds. However, it carries risks like any investment.",
    },
    {
        id: "faq4",
        question: "Can I convert MTF to delivery?",
        answer:
            "Please contact the FYERS support team, if you're looking to convert your MTF position to delivery. But an MTF position cannot be converted into an intraday position.",
    },
    {
        id: "faq5",
        question: "What is the maximum MTF limit?",
        answer:
            "At FYERS, traders using MTF can access up to ₹50 lakh in exposure.",
    },
    {
        id: "faq6",
        question: "Can I use MTF for intraday?",
        answer:
            "MTF cannot be used for intraday trading; it is designed for equity delivery and longer-term investments.",
    },
    {
        id: "faq7",
        question: "Which stocks are eligible for MTF trading?",
        answer:
            "You can now use MTF trading for 1600+ stocks of NSE available through FYERS.",
    },
];