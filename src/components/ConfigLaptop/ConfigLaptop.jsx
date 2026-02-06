import laptopData from "./data";
import Heading from "../Heading/Heading";
import styles from "./ConfigLaptop.module.css";

import PropTypes from "prop-types";
import { useState } from "react";

const ConfigLaptop = () => {
  const [processor, setProcessor] = useState("");
  const [ramSelect, setRamSelect] = useState("");
  const [optionsSelect, setOptionsSelect] = useState([]);
  const [amountSelect, setAmountSelect] = useState(1);
  const [result, setResult] = useState(null);
  const showOption = (processor) => (
    <option value={processor.name} key={processor.name}>
      {processor.name} (${processor.price})
    </option>
  );
  const showRam = (ram) => (
    <label key={ram.name}>
      {" "}
      <input
        name="ram"
        value={ram.name}
        onChange={changeRam}
        type="radio"
        checked={ram.name === ramSelect}
      />{" "}
      <span>
        {ram.name}(${ram.price})
      </span>
    </label>
  );
  const showExtraOption = (option) => (
    <label key={option.name}>
      <input
        name="extraOption"
        value={option.name}
        onChange={changeOptions}
        checked={optionsSelect.includes(option.name)}
        type="checkbox"
      />
      <span>
        {option.name}(${option.price})
      </span>
    </label>
  );
  const changeProcessor = (event) => {
    setProcessor(event.target.value);
  };
  const changeRam = (event) => {
    setRamSelect(event.target.value);
  };
  const changeOptions = (event) => {
    const value = event.target.value;
    const newOptions = optionsSelect.includes(value)
      ? optionsSelect.filter((opt) => opt !== value)
      : [...optionsSelect, value];
    setOptionsSelect(newOptions);
  };
  const changeAmount = (event) => {
    setAmountSelect(Number(event.target.value));
  };
  const calculate = () => {
    const processorPrice =
      laptopData.processors.find((pr) => pr.name === processor)?.price || 0;
    const ramPrice =
      laptopData.ramVariants.find((rm) => rm.name === ramSelect)?.price || 0;
    const optionsPrice = optionsSelect.reduce((summa, opt) => {
      const optPrice =
        laptopData.extraOptions.find((o) => o.name === opt)?.price || 0;
      return summa + optPrice;
    }, 0);

    const total = (processorPrice + ramPrice + optionsPrice) * amountSelect;
    setResult({ processor, ramSelect, optionsSelect, amountSelect, total });
  };
  return (
    <section className={styles.config}>
      <Heading text="Config laptop" />
      <fieldset>
        <legend>1. Choose processor</legend>
        <select name="processor" value={processor} onChange={changeProcessor}>
          <option value="">Choose processor</option>
          {laptopData.processors.map(showOption)}
        </select>
      </fieldset>
      <fieldset>
        <legend>2. Сhoose the amount of RAM</legend>
        <div>{laptopData.ramVariants.map(showRam)}</div>
      </fieldset>
      <fieldset>
        <legend>3. Extra options</legend>
        <div className={styles.column}>
          {laptopData.extraOptions.map(showExtraOption)}
        </div>
      </fieldset>
      <fieldset>
        <legend>4. Amount of devices</legend>
        <input
          min={1}
          className={styles.full}
          value={amountSelect}
          onChange={changeAmount}
          type="number"
        />
      </fieldset>
      <button onClick={calculate}>Make basket</button>

      {result && (
        <article>
          <h2>Your order</h2>
          <p>
            <em>processor: </em>
            {result.processor}
          </p>
          <p>
            <em>RAM: </em>
            {result.ramSelect}
          </p>
          <p>
            <em>options: </em>
            {result.optionsSelect.length > 0
              ? result.optionsSelect.join(", ")
              : "empty"}
          </p>
          <p>
            <em>amount: </em>
            {result.amountSelect}
          </p>
          <p>
            <em>total amount: </em>
            {result.total}
          </p>
        </article>
      )}
    </section>
  );
};

ConfigLaptop.propTypes = {};

export default ConfigLaptop;
