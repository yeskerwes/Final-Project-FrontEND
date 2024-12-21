import React, { useState } from "react";
import "./faqSection.css";

const FAQSection = () => {
    const faqData = [
        { 
          question: "What is the delivery time?", 
          answer: "Delivery usually takes 3-5 business days, depending on your location and the availability of the products. In some cases, delivery might take longer due to holidays or unforeseen circumstances. We always aim to keep you updated with the latest tracking information." 
        },
        { 
          question: "What payment methods are accepted?", 
          answer: "We accept a variety of payment methods to ensure a convenient shopping experience. These include major credit cards (Visa, MasterCard, American Express), PayPal for secure online transactions, and bank transfers. For specific regions, additional payment options might also be available." 
        },
        { 
          question: "How can I return a product?", 
          answer: "Returning a product is simple. You can initiate a return within 30 days of delivery through our website or by contacting our support team. Ensure that the product is in its original condition, with all tags and packaging intact. Once we receive and inspect the item, we will process your refund or exchange within 5-7 business days." 
        },
        { 
          question: "Do you offer international shipping?", 
          answer: "Yes, we are pleased to offer international shipping to most countries. Shipping times and rates may vary depending on your location. Please check our shipping policies for detailed information about countries we ship to, customs duties, and estimated delivery times." 
        },
        { 
          question: "How can I track my order?", 
          answer: "Tracking your order is easy. Once your order is shipped, you will receive an email containing a tracking link. This link allows you to monitor the status of your package in real time. If you experience any issues with tracking, feel free to contact our customer support team for assistance." 
        },
        { 
          question: "What is your return policy?", 
          answer: "Our return policy allows you to return items within 30 days of purchase. The item should be in its original condition, with all packaging and accessories included. If the product is defective or damaged, we will cover the return shipping cost. Please refer to our return policy page for detailed instructions." 
        },
        { 
          question: "How long does shipping take?", 
          answer: "Shipping times depend on your location and chosen shipping method. Standard shipping typically takes 5-7 business days, while expedited options may take 2-3 business days. You can check the estimated delivery time at checkout for more accurate details." 
        },
        { 
          question: "Do you ship internationally?", 
          answer: "Absolutely! We provide international shipping to a wide range of countries. Shipping times vary based on the destination, but we strive to deliver your order as quickly as possible. Additional customs duties or taxes may apply, which are the responsibility of the customer." 
        }
      ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>This section provides answers to frequently asked questions from site visitors.</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-toggle">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
