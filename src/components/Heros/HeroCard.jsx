import styles from "./Hero.module.css";

const HeroCard = (props) => {
  const { hero, setSelectHero, updateRating } = props;
  const { id, name, power, rating } = hero;
  const handleClick = () => {
    setSelectHero(hero);
  };
  const incRating = (event) => {
    event.stopPropagation();
    updateRating(id, rating + 1 > 5 ? 5 : rating + 1);
  };
  const decRating = (event) => {
    event.stopPropagation();
    updateRating(id, rating - 1 < 1 ? 1 : rating - 1);
  };
  return (
    <article onClick={handleClick} className={styles.hero}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.raw}>
        <p>power:{power}</p>
        <p>
          {rating} <button onClick={incRating}>👍</button>{" "}
          <button onClick={decRating}>👎</button>{" "}
        </p>
      </div>
    </article>
  );
};

export default HeroCard;
