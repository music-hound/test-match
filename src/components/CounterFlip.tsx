import { useState } from "react";
import "./CounterFlip.scss";

interface CounterProps {
  children: number;
}

const CounterFlip: React.FC<CounterProps> = ({ children }) => {
  const [oldValue, setOldValue] = useState(children);
  const [isFlipping, setIsFlipping] = useState(false);

  if (children !== oldValue) {
    setOldValue(children);
    setIsFlipping(true);

    setTimeout(() => {
      setIsFlipping(false);
    }, 300);
  }

  return (
    <div className="counter-container">
      <span className={`counter-container ${isFlipping ? "flip-in" : ""}`}>
        {children}
      </span>
      <span className={`counter-container ${isFlipping ? "flip-out" : ""}`}>
        {oldValue}
      </span>
    </div>
  );
};

export default CounterFlip;
