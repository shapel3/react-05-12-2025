import styles from "./Hero.module.css"

const HeroCard = (props) => {
  const { hero , setSelectHero } = props;
  const { id, name, power } = hero;
  const handleClick = ()=>{
    setSelectHero(hero)
  }
  return (
    <article onClick={handleClick} className={styles.hero}>
      <h3>{name}</h3>
      <p>power:{power}</p>
    </article> 
  );
};

export default HeroCard;
