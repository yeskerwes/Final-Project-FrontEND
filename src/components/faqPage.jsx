import React, { useState } from "react";
import "../styles/faqPage.css";

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How to place an order?",
      answer: `1. Select the products and add them to the cart. 
      2. Go to the "Cart" section and click "Proceed to checkout."
      3. Enter your personal details. 
      4. Choose a delivery method and provide the address. 
      5. Select a payment method and click "Pay online." 
      6. Complete the payment, and your order will be processed. 
      7. If you have any questions about placing an order, contact our support team in the online chat.`,
    },
    {
      question: "What is the delivery time within Kazakhstan?",
      answer: "Delivery takes from 3 to 7 days.",
    },
    {
      question: "When will my order be assembled and shipped?",
      answer: "Your order will be assembled within 24 hours.",
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order through your personal account.",
    },
    {
      question: "What should I do if the product is defective or damaged?",
      answer: "Contact our support team for a replacement.",
    },
    {
      question: "What payment methods are available?",
      answer: "We accept online payments, credit cards, and bank transfers.",
    },
    {
      question: "Can I change or cancel my order?",
      answer: "You can change or cancel your order before it is shipped.",
    },
    {
      question: "What is your exchange/return/warranty policy?",
      answer: `1. Products can be exchanged or returned within 14 days of receipt. 
      2. Items must be in original packaging and unused condition. 
      3. Warranty claims require proof of purchase.`,
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within Kazakhstan.",
    },
    {
      question: "How do I contact customer support?",
      answer: `You can contact our support team via: 
      1. Open your eyes. 
      2. Email us at 230107029@sdu.edu.kz. 
      3. Call our hotline at +7 (778) 774-3471.`,
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1>This section provides answers to frequently asked questions from site visitors.</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span className="faq-toggle">{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && (
              <div
                className="faq-answer"
                dangerouslySetInnerHTML={{
                  __html: faq.answer.replace(/\n/g, "<br />"),
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
