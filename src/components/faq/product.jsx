import React, { useState } from "react";
import "./faqSection.css";

const Product = () => {
    const ProductCareData = [
        { 
            question: "Can I reserve or delay a product?", 
            answer: "Currently, we do not offer a reservation or delay option for products. However, you can sign up for a notification when the product becomes available again. Simply click on the 'Notify me' button on the product page."
        },
        { 
            question: "How should I care for the product?", 
            answer: "Each product comes with specific care instructions, which can be found on the product page. In general, we recommend following the care instructions for washing, storage, and handling to ensure the longevity of your item. If you have any questions, feel free to contact us for more detailed guidance."
        },
        { 
            question: "Will the product or size that is currently out of stock become available again?", 
            answer: "If a product or size is out of stock, we are constantly restocking items. You can sign up to receive a notification when the product or size becomes available again. Additionally, we often restock popular items, so it may return to the store soon."
        },
        { 
            question: "What sizes are available on your website?", 
            answer: "The sizes available for each product are listed on the product page. We offer a variety of sizes depending on the item, and you can select your preferred size from the dropdown menu. If you are unsure about sizing, we also provide a sizing guide on the website."
        },
        { 
            question: "Can I buy products in bulk?", 
            answer: "Yes, we offer bulk purchasing for most of our products. For bulk orders, please contact our customer service team to discuss pricing and availability. We will assist you in placing a custom order based on your needs."
        },
        { 
            question: "Are all the products on the website available in-store?", 
            answer: "Not all products available on our website may be in stock at our physical stores. Availability can vary, so we recommend checking the stock at your nearest location or ordering online for home delivery. You can also contact our customer service team for availability details."
        },
        { 
            question: "Can I place a custom order for a product that is not available in your store?", 
            answer: "Yes, we do offer custom orders for certain products that may not be available in-store. Please contact our customer service to discuss your requirements, and we will check if we can fulfill your custom order."
        },
        { 
            question: "Do the prices on the website differ from those in the store?", 
            answer: "Generally, the prices on our website and in our stores are the same. However, there may be occasional promotions or discounts that are exclusive to either the online store or the physical store. We recommend checking for any ongoing promotions or sales before making a purchase."
        }
    ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>This section provides answers to frequently asked questions regarding the purchase of goods.</h2>
      <div className="faq-list">
        {ProductCareData.map((item, index) => (
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

export default Product;
