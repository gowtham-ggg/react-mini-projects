import React from 'react'
import DisplayArea from './DisplayArea';

const QuestionData = () => {
    const data = [
        {
          "question": "What is React?",
          "answer": "React is a JavaScript library for building user interfaces. It allows developers to create reusable components to build dynamic and interactive web applications."
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX is a syntax extension for JavaScript that looks similar to HTML. It is used with React to describe what the UI should look like."
        },
        {
          "question": "What are components in React?",
          "answer": "Components are reusable pieces of code that define the structure, behavior, and style of part of a user interface in a React application."
        },
        {
          "question": "What is the virtual DOM in React?",
          "answer": "The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering by only updating the parts of the DOM that have changed."
        },
        {
          "question": "What are state and props in React?",
          "answer": "State is a built-in object that stores dynamic data about a component. Props are inputs passed to components to make them configurable and reusable."
        },
        {
          "question": "What is the difference between functional and class components?",
          "answer": "Functional components are simpler and written as functions, while class components are ES6 classes that include additional features like lifecycle methods."
        },
        {
          "question": "What are React hooks?",
          "answer": "React hooks are special functions like useState and useEffect that let developers use state and other React features in functional components."
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library for managing navigation and routing in React applications. It allows developers to handle different URLs and render appropriate components."
        },
        {
          "question": "What is Redux?",
          "answer": "Redux is a state management library often used with React. It provides a central store for managing application state and makes state changes predictable."
        },
        {
          "question": "What is the useEffect hook in React?",
          "answer": "The useEffect hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM."
        }
      ];
      
  return (
   <>
   {data.map((item , index)=>(
    <DisplayArea key={index} question = {item.question} answer ={item.answer}/>
   ))}
   </>
  )
}

export default QuestionData
