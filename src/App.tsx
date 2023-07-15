import { useState } from "react";
import quotes from "./assets/quotes.json";
import "./App.css";
import { FaTwitter, FaQuoteLeft, FaQuoteRight, FaTumblr } from "react-icons/fa";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const r = Math.floor(Math.random() * 230);
  const g = Math.floor(Math.random() * 230);
  const b = Math.floor(Math.random() * 230);
  return `rgb(${r}, ${g}, ${b})`;
};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div className="background" style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box">
        <div className="quote">
          <h2 id="text" style={{ color: randomColor, transition  }}>
            <FaQuoteLeft
              size="30"
              style={{ color: randomColor, transition , marginRight: "10px" }}
            />

            {quote.quote}

            <FaQuoteRight
              size="30"
              style={{ color: randomColor, transition , marginLeft: "10px" }}
            />
          </h2>
          <h4 id="author" style={{ color: randomColor , transition }}>
            - {quote.author}
          </h4>
        </div>
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            title="Post this quote on twitter!"
            target="_blank"
            style={{
              background: randomColor,
              transition ,
              marginRight: "10px",
            }}
          >
            <FaTwitter color="white" />
          </a>
          <a
            href=""
            className="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
            style={{
              background: randomColor, 
              transition, 
              marginRight: "10px",
            }}
          >
            <FaTumblr color="white" />
          </a>
          <button
            className="button"
            id="new-quote"
            onClick={changeQuote}
            style={{
              background: randomColor,
              transition,
              marginRight: "10px",
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
