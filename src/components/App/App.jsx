import React, { useState } from "react";

import "./App.css";
import Buttons from "../Buttons/Buttons";
import commafy from "../utils/commafy";

export default function App() {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handlerButtonPress = (content) => () => {
    const num = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + num);
        } else if (operator === "−") {
          setMemory(memory - num);
        } else if (operator === "×") {
          setMemory(memory * num);
        } else if (operator === "÷") {
          setMemory(memory / num);
        }
      } else {
        setMemory(num);
      }

      setValue("0");
      setOperator("+");
      return;
    }

    if (content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + num);
        } else if (operator === "−") {
          setMemory(memory - num);
        } else if (operator === "×") {
          setMemory(memory * num);
        } else if (operator === "÷") {
          setMemory(memory / num);
        }
      } else {
        setMemory(num);
      }

      setValue("0");
      setOperator("−");
      return;
    }

    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + num);
        } else if (operator === "−") {
          setMemory(memory - num);
        } else if (operator === "×") {
          setMemory(memory * num);
        } else if (operator === "÷") {
          setMemory(memory / num);
        }
      } else {
        setMemory(num);
      }

      setValue("0");
      setOperator("×");
      return;
    }

    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + num);
        } else if (operator === "−") {
          setMemory(memory - num);
        } else if (operator === "×") {
          setMemory(memory * num);
        } else if (operator === "÷") {
          setMemory(memory / num);
        }
      } else {
        setMemory(num);
      }

      setValue("0");
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + num).toString());
      } else if (operator === "−") {
        setValue((memory - num).toString());
      } else if (operator === "×") {
        setValue((memory * num).toString());
      } else if (operator === "÷") {
        setValue((memory / num).toString());
      }

      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };

  return (
    <>
    <h1>CALCULATOR</h1>
      <div className="container">
        <div className="App">
          <div className="screen">{commafy(value)}</div>
          <div className="buttons">
            <Buttons
              onButtonClick={handlerButtonPress}
              content="AC"
              type="function"
            />
            <Buttons
              onButtonClick={handlerButtonPress}
              content="±"
              type="function"
            />
            <Buttons
              onButtonClick={handlerButtonPress}
              content="%"
              type="function"
            />
            <Buttons
              onButtonClick={handlerButtonPress}
              content="÷"
              type="operator"
            />
            <Buttons onButtonClick={handlerButtonPress} content="7" />
            <Buttons onButtonClick={handlerButtonPress} content="8" />
            <Buttons onButtonClick={handlerButtonPress} content="9" />
            <Buttons
              onButtonClick={handlerButtonPress}
              content="×"
              type="operator"
            />
            <Buttons onButtonClick={handlerButtonPress} content="4" />
            <Buttons onButtonClick={handlerButtonPress} content="5" />
            <Buttons onButtonClick={handlerButtonPress} content="6" />
            <Buttons
              onButtonClick={handlerButtonPress}
              content="−"
              type="operator"
            />
            <Buttons onButtonClick={handlerButtonPress} content="1" />
            <Buttons onButtonClick={handlerButtonPress} content="2" />
            <Buttons onButtonClick={handlerButtonPress} content="3" />
            <Buttons
              onButtonClick={handlerButtonPress}
              content="+"
              type="operator"
            />
            <Buttons onButtonClick={handlerButtonPress} content="0" />
            <Buttons onButtonClick={handlerButtonPress} content="." />
            <Buttons
              onButtonClick={handlerButtonPress}
              content="="
              type="operator"
            />
          </div>
        </div>
      </div>
    </>
  );
}
