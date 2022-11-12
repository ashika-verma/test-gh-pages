import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Card } from "flowbite-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="max-w-sm">
        <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Here I am testing the simplicity of Tailwind and Vite. Get wrecked
            losers.
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Enjoy this lamp that I have so tastefully stolen from the internet.
            Thank you github copilot for the words.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default App;
