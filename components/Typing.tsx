// import { useState, useEffect } from "react";

// const TypingTest = () => {
//   const textToType = "Television hasn't been with us all that long, but we are already beginning to forget what the world was like without it.";
//   const [userInput, setUserInput] = useState("");
//   const [isTypingStarted, setIsTypingStarted] = useState(false);
//   const [timeRemaining, setTimeRemaining] = useState(30); // 30 seconds countdown
//   const [isTestOver, setIsTestOver] = useState(false);
//   const [wpm, setWpm] = useState(0);
//   const [startTime, setStartTime] = useState<number | null>(null);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUserInput(event.target.value);
//   };

//   useEffect(() => {
//     let timer: NodeJS.Timeout;

//     if (isTypingStarted && timeRemaining > 0) {
//       timer = setInterval(() => {
//         setTimeRemaining((prevTime) => prevTime - 1);
//       }, 1000);
//     }

//     if (timeRemaining === 0) {
//       setIsTestOver(true);
//       clearInterval(timer);
//     }

//     return () => clearInterval(timer);
//   }, [isTypingStarted, timeRemaining]);

//   const handleStart = () => {
//     setIsTypingStarted(true);
//     setStartTime(Date.now());
//   };

//   const calculateWpm = () => {
//     const timeInMinutes = (30 - timeRemaining) / 60;
//     const typedWords = userInput.split(" ").length;
//     return Math.floor(typedWords / timeInMinutes);
//   };

//   useEffect(() => {
//     if (isTestOver && startTime) {
//       setWpm(calculateWpm());
//     }
//   }, [isTestOver, userInput]);

//   return (
//     <div className="flex flex-col items-center justify-center p-4">
//       <h1 className="text-2xl font-bold mb-4">Typing Test</h1>

//       {!isTypingStarted ? (
//         <button
//           onClick={handleStart}
//           className="px-4 py-2 bg-blue-500 text-black rounded"
//         >
//           Start Test
//         </button>
//       ) : (
//         <>
//           <p className="text-xl mb-4 text-black">Time Left: {timeRemaining}s</p>
//           <p className="text-lg mb-4 text-black">{textToType}</p>

//           <input
//             type="text"
//             value={userInput}
//             onChange={handleChange}
//             className="border p-2 w-full max-w-md text-black"
//             autoFocus
//           />

//           {isTestOver && (
//             <div className="mt-4 text-black">
//               <p className="text-xl text-black">
//                 Test Over! You typed {wpm} words per minute.
//               </p>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default TypingTest;
