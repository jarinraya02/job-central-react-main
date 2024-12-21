import React from "react";

const Blog = () => {
  return (
    <div className="my-container">
      <div className="bg-gray-100 p-6 rounded shadow-md mb-4">
        <h1 className="font-extrabold text-gray-950 text-lg mb-2">
          Q.1 When should we use context API?
        </h1>
        <p className="text-base font-medium text-gray-700">
          The Context API in React is a useful tool for managing state and
          sharing data across components. It&apos;s beneficial in scenarios
          where we need to share global data, avoid prop drilling, implement
          themes or styles, handle state management in small to medium-sized
          applications, and simplify testing.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded shadow-md mb-4">
        <h1 className="font-extrabold text-gray-950 text-lg mb-2">
          Q.2 What is React custom hook?
        </h1>
        <p className="text-base font-medium text-gray-700">
          A React custom hook is a function in JavaScript that follows the
          naming convention `useSomething`. It allows developers to reuse
          stateful logic across multiple components in a React
          application.Custom hooks follow the rules of React hooks and can use
          built-in hooks like `useState` and `useEffect`. Custom hooks improve
          code modularity, reusability, and maintainability.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded shadow-md mb-4">
        <h1 className="font-extrabold text-gray-950 text-lg mb-2">
          Q.3 What is useRef?
        </h1>
        <p className="text-base font-medium text-gray-700">
          useRef is a built-in hook in React that returns a mutable ref object.
          The useRef hook is primarily used to access and manipulate the DOM
          (Document Object Model) nodes or to persist a value across renders
          without triggering a re-render.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded shadow-md mb-4">
        <h1 className="font-extrabold text-gray-950 text-lg mb-2">
          Q.4 What is useMemo?
        </h1>
        <p className="text-base font-medium text-gray-700">
          useMemo allows us to memoize the result of a computation and cache it.
          It is used to optimize performance by avoiding unnecessary
          calculations or expensive operations within functional components.
        </p>
      </div>
    </div>
  );
};

export default Blog;
