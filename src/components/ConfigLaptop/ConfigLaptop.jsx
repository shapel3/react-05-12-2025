import laptopData from "./data";
import Heading from "../Heading/Heading";
import styles from "./ConfigLaptop.module.css"

import PropTypes from "prop-types";

const ConfigLaptop = () => {
  const showOption = (processor) => (
    <option value={processor.name} key={processor.name}>
      {processor.name} (${processor.price})
    </option>
  );
  const showRam = (ram) => (
    <label key={ram.name}>
      {" "}
      <input name="ram" value={ram.name} type="radio" />{" "}
      <span>
        {ram.name}(${ram.price})
      </span>
    </label>
  );
  const showExtraOption = (option) => (
    <label key={option.name}>
      <input name="extraOption" value={option.name} type="checkbox" />
      <span>
        {option.name}(${option.price})
      </span>
    </label>
  );
  return (
    <section className={styles.config}>
      <Heading text="Config laptop" />
      <fieldset>
        <legend>1. Choose processor</legend>
        <select name="" id="">
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
        <div className={styles.column}>{laptopData.extraOptions.map(showExtraOption)}</div>
      </fieldset>
      <fieldset>
        <legend>4. Amount of devices</legend>
        <input className={styles.full} value={1} type="number" />
      </fieldset>
      <button>Make basket</button>
    </section>
  );
};

ConfigLaptop.propTypes = {};

export default ConfigLaptop;
