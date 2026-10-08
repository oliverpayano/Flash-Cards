import './App.css';
import { useState } from 'react'; 
const flashcards = [
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used to make web pages interactive."
  },
  {
    question: "What is the difference between let and const?",
    answer: "let can be reassigned, while const cannot be reassigned."
  },
  {
    question: "What is an array in JavaScript?",
    answer: "An array stores multiple values in a single variable."
  },
  {
    question: "What index does a JavaScript array start at?",
    answer: "JavaScript arrays start at index 0."
  },
  {
    question: "What is an object in JavaScript?",
    answer: "An object stores related data using properties and values."
  },
  {
    question: "What does an if statement do?",
    answer: "It runs code when a specified condition is true."
  },
  {
    question: "What does the else statement do?",
    answer: "It runs code when the if condition is false."
  },
  {
    question: "What does === mean in JavaScript?",
    answer: "It checks whether two values are equal in both value and type."
  },
  {
    question: "What is a Boolean?",
    answer: "A Boolean is a value that can be either true or false."
  },
  {
    question: "What does the ! operator do?",
    answer: "It reverses a Boolean value. true becomes false and false becomes true."
  },
  {
    question: "What is a function?",
    answer: "A function is a reusable block of code designed to perform a task."
  },
  {
    question: "What is a parameter?",
    answer: "A parameter is a variable listed in a function definition that receives a value."
  },
  {
    question: "What is an argument?",
    answer: "An argument is the actual value passed to a function when the function is called."
  },
  {
    question: "What does a for loop do?",
    answer: "A for loop repeats a block of code a specified number of times."
  },
  {
    question: "What does .length return?",
    answer: "It returns the number of items in an array or the number of characters in a string."
  },
  {
    question: "What does document.getElementById() do?",
    answer: "It finds an HTML element using its id."
  },
  {
    question: "What does addEventListener() do?",
    answer: "It listens for an event, such as a click or input, and runs code when that event occurs."
  },
  {
    question: "What does .value give us?",
    answer: "It gives us the current value entered into an input element."
  },
  {
    question: "What is a template literal?",
    answer: "A template literal is a string written with backticks that can include variables using ${}."
  },
  {
    question: "What does the return keyword do in a function?",
    answer: "It sends a value back from a function and ends the function's execution."
  }
];
function App() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswer(false);
  };
  const handlePrevious = () => {
    setCurrentIndex(currentIndex -1);
    setShowAnswer(false);
  };

  return (
    <div className= "app-container">
      <h1>Flash Cards</h1>
      <p>Test your JavaScript knowledge!</p>

      <div className="progress-info">
        <span>{Math.round(progress)}%</span>
        <span>
          {currentIndex + 1} of {flashcards.length}
        </span>
      </div>

      <div className= "progress-bar">
        <div 
        className= "progress-fill"
        style={{width: `${progress}%`}}
        ></div>
      </div>

      <div className="flashcard">
        <h2>{flashcards[currentIndex].question}</h2>
        {showAnswer && (
          <p>{flashcards[currentIndex].answer}</p>)}
      
      <div className="card-controls">

        <button className="nav-button" 
          onClick={handlePrevious}
          disabled={currentIndex === 0}>
          &lsaquo; Previous
        </button>
        
        <button className="answer-button"
        onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        
        <button className="nav-button"
         onClick={handleNext}
         disabled={currentIndex === flashcards.length -1}>
          Next &rsaquo;
        </button>
      </div>  

      </div>
    </div>  
  );
}

export default App;