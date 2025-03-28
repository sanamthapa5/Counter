// export default App;
// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   const decreaseCount = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">Click Counter</h1>
//         <p className="text-2xl font-semibold text-blue-600">{count}</p>
//         <div className="mt-4 space-x-4">
//           <button
//             className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
//             onClick={increaseCount}
//           >
//             Increment
//           </button>
//           <button
//             className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
//             onClick={decreaseCount}
//           >
//             Decrement
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="counter-box">
        <h1 className="title">Click Counter</h1>
        <p className="count">{count}</p>
        <div className="buttons">
          <button className="increment" onClick={increaseCount}>
            Increment
          </button>
          <button className="decrement" onClick={decreaseCount}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

