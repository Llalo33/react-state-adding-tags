import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [savedValues, setSavedValues] = useState([]);
  const [falseArt, setFalseArt] = useState(false);

  const handleInputChange = (event) => {
    setFalseArt(false);
    setInputValue(event.target.value);
  };

  const handleSave = () => {
    if (inputValue.length == 0) {
      setFalseArt(true);
    } else if (inputValue.trim() !== "") {
      setSavedValues([...savedValues, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    const updatedValues = savedValues.filter((item, index) => index !== index);
    setSavedValues(updatedValues);
  }

  return (
    <div className={styles.tegs}>
      <input
        placeholder="Введите текст"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleSave}>Отправить</button>
      <div className={styles.text}>
          <div>{falseArt ? <p className={styles.pole}>Поле не должно быть пустым</p> : null}</div>
      </div>
      <div>
        {savedValues.map((item, index) => (
          <div key={index} className={styles.item}>{item} <button className={styles.button} onClick={() => handleDelete(index)}>X</button></div>       
        ))}
      </div>
    </div>
  );
};

export default App;
