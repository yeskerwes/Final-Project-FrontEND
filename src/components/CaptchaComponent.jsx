// import React, { useState, useEffect } from 'react';
// import '../styles/captchaComponent.css';

// function CaptchaComponent() {
//   const [captcha, setCaptcha] = useState({ data: '', text: '' });

//   const fetchCaptcha = async () => {
//     try {
//       const response = await fetch('/api/captcha');
//       const captchaData = await response.json();
//       setCaptcha(captchaData);
//     } catch (error) {
//       console.error('Error fetching CAPTCHA:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCaptcha(); // Load CAPTCHA on component mount
//   }, []);

//   const handleRefresh = () => {
//     fetchCaptcha(); // Fetch a new CAPTCHA
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const inputCode = event.target.elements.captchaInput.value;
//     if (inputCode === captcha.text) {
//       alert('CAPTCHA верна!');
//     } else {
//       alert('Неправильный код CAPTCHA.');
//     }
//     fetchCaptcha(); // Refresh CAPTCHA after submission
//   };

//   return (
//     <div>
//       <h3>Введите код CAPTCHA</h3>
//       <div dangerouslySetInnerHTML={{ __html: captcha.data }} />
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="captchaInput"
//           placeholder="Введите код"
//           required
//         />
//         <button type="submit">Проверить</button>
//       </form>
//       <button onClick={handleRefresh}>Обновить CAPTCHA</button>
//     </div>
//   );
// }

// export default CaptchaComponent;

// SERVER

// const express = require('express');
// const svgCaptcha = require('svg-captcha');

// const app = express();
// app.use(express.json());

// app.get('/api/captcha', (req, res) => {
//   const captcha = svgCaptcha.create();
//   res.json({
//     data: captcha.data,
//     text: captcha.text, // Keep this in memory for validation
//   });
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// "proxy": "http://localhost:5000"
