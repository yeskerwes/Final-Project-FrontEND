import React, { useState } from "react";
import "./faqSection.css";

const Delivery = () => {
    const deliveryData = [
        { question: "What is the shipping cost?", answer: "Shipping costs depend on various factors, including the destination, the weight, and the dimensions of the package. During checkout, the shipping cost will be calculated based on your address and the shipping method you select." },
        { question: "Do you provide same-day delivery?", answer: "Yes, same-day delivery is available in select cities. To qualify, your order must be placed before the cutoff time, and the items must be in stock. You will be notified during checkout if same-day delivery is an option for your location." },
        { question: "Can I change my delivery address?", answer: "Yes, you can update your delivery address, but only before the order has been shipped. Once the package is dispatched, it may not be possible to change the address. If you need to make a change, please contact customer service as soon as possible." },
        { question: "What happens if I miss my delivery?", answer: "If you miss your scheduled delivery, the courier will typically make one or more additional delivery attempts. If the package cannot be delivered, the courier will contact you to arrange a new delivery time or give further instructions." },
        { question: "How do I schedule a delivery time?", answer: "During the checkout process, you will be given the option to select a preferred delivery time based on available slots. Delivery times are subject to availability, and some areas may have limited options." },
        { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to many countries. The shipping costs for international orders depend on the destination country and the size of the package. Customs fees and import taxes may also apply, which are the responsibility of the recipient." },
        { question: "How can I track my delivery?", answer: "Once your order has shipped, you will receive a tracking number via email or SMS. You can use this number on the courier's website to monitor the progress of your delivery in real time. If you have any issues with tracking, feel free to contact customer support." },
        { question: "What are your delivery hours?", answer: "Our standard delivery hours are from 9 AM to 6 PM, Monday through Friday. However, some areas may offer extended hours or weekend delivery options. You will be able to select a time slot during checkout if available." },
        { question: "Can I choose a specific delivery date?", answer: "Yes, we allow you to select a specific delivery date during checkout. However, this option depends on the delivery method and the availability of time slots in your area. If the desired date is unavailable, you will be offered alternative delivery options." },
      ];
      

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>This section provides answers to frequently asked questions about Delivery and Payment.</h2>
      <div className="faq-list">
        {deliveryData.map((item, index) => (
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

export default Delivery;
