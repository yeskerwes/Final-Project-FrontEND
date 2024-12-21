// import React, { useState } from 'react';
// import '../styles/personalAccount.css';  // Добавьте свой CSS файл для стилизации

// function PersonalAccountPage() {
//   // Состояние для счета
//   const [balance, setBalance] = useState(0);
//   const [amountToAdd, setAmountToAdd] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');

//   // Функция для добавления суммы на счет
//   const handleAddAmount = () => {
//     if (amountToAdd > 0) {
//       setBalance(balance + Number(amountToAdd));
//       setAmountToAdd('');
//     }
//   };

//   // Функция для выбора предложенной суммы
//   const handlePresetAmount = (amount) => {
//     setAmountToAdd(amount);
//     setBalance(balance + amount);
//   };

//   return (
//     <div className="personal-account">
//       <h2>Личный Кабинет</h2>
      
//       <div className="account-summary">
//         <h3>Текущий баланс</h3>
//         <p className="balance">{balance} KZT</p>
//       </div>

//       <div className="top-up-section">
//         <h4>Пополнить счет</h4>
//         <div className="preset-amounts">
//           <button onClick={() => handlePresetAmount(100)} className="amount-btn">100 KZT</button>
//           <button onClick={() => handlePresetAmount(200)} className="amount-btn">200 KZT</button>
//           <button onClick={() => handlePresetAmount(500)} className="amount-btn">500 KZT</button>
//           <button onClick={() => handlePresetAmount(1000)} className="amount-btn">1000 KZT</button>
//           <button onClick={() => handlePresetAmount(5000)} className="amount-btn">5000 KZT</button>
//         </div>
        
//         <div className="custom-amount">
//           <input
//             type="number"
//             placeholder="Введите сумму"
//             value={amountToAdd}
//             onChange={(e) => setAmountToAdd(e.target.value)}
//           />
//           <button onClick={handleAddAmount}>Пополнить</button>
//         </div>
//       </div>

//       <div className="payment-method">
//         <h4>Выберите способ оплаты</h4>
//         <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
//           <option value="">Выберите способ оплаты</option>
//           <option value="credit-card">Кредитная карта</option>
//           <option value="cash">Наличными</option>
//           <option value="bank-transfer">Банковский перевод</option>
//         </select>
//       </div>

//       <div className="confirmation">
//         <button onClick={handleAddAmount}>Подтвердить</button>
//       </div>
//     </div>
//   );
// }

// export default PersonalAccountPage;
