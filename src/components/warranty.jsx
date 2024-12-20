import React, { useState } from "react";
import "../styles/faqSection.css";

const Warranty = () => {
    const WarrantyData = [
        { 
            question: "What is your return policy?", 
            answer: "We offer returns within 30 days of receiving the item. The item must be unused and in its original packaging. Certain items, such as personalized or perishable goods, may not be eligible for return. To initiate a return, please contact our customer service, and we will provide you with instructions for the return process."
        },
        { 
            question: "How can I exchange an item?", 
            answer: "If you wish to exchange an item, please contact our customer service within 30 days of receiving it. We will offer alternative options for the exchange, depending on product availability. The exchange is possible only if the item has not been used and is in its original condition. We will assist in arranging the return and delivery of the new item."
        },
        { 
            question: "What is the warranty on your products?", 
            answer: "Our products come with a warranty for a specified period, depending on the type of product. The warranty covers manufacturing defects or malfunctions during normal use. In the event of a defect, we offer repair, replacement, or a refund, depending on the situation. For more details on the warranty, please refer to the product page."
        },
        { 
            question: "How can I return an item if it doesn't fit?", 
            answer: "If the item doesn't fit, you can return it within 30 days of receiving it. The item must be in its original packaging and unused. Please contact our customer service to receive detailed instructions on how to return the item and possibly get a refund."
        },
        { 
            question: "What should I do if I received a defective item?", 
            answer: "If you receive a defective item, please contact our customer service immediately. We may ask for photos or videos of the defect to confirm the issue. If the defect is confirmed, we will offer a replacement, repair, or refund, depending on the situation."
        },
        { 
            question: "Can I exchange an item for a different size or color?", 
            answer: "Yes, you can exchange the item for a different size or color, provided that it is available in stock. Exchanges are possible within 30 days of receiving the item. Please contact our customer service for instructions on how to proceed with the exchange."
        }
    ];
    
      

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>This section provides answers to frequently asked questions about the exchange, return and warranty of goods.</h2>
      <div className="faq-list">
        {WarrantyData.map((item, index) => (
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

export default Warranty;
