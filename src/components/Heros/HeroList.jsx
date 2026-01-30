import { useState } from "react";
import Heading from "../Heading/Heading";
import { heroes } from "./data";
import HeroCard from "./HeroCard";
import styles from "./Hero.module.css";

const HeroList = () => {
  const [heroesAr, setHeroesAr] = useState(heroes);
  const [selectHero, setSelectHero] = useState(null);
  const updateRating = (id, rating) => {
    setHeroesAr((prevHeroes) =>
      prevHeroes.map((hero) => (hero.id === id ? { ...hero, rating } : hero)),
    );
    if (selectHero && selectHero.id === id) {
      setSelectHero((prevHero) => ({ ...prevHero, rating }));
    }
  };
  const showHero = (hero) => (
    <HeroCard
      key={hero.id}
      updateRating={updateRating}
      hero={hero}
      setSelectHero={setSelectHero}
    />
  );
  return (
    <div>
      <Heading text="pick favourite hero" />
      <section className={styles.heroes}>{heroesAr.map(showHero)}</section>
      <Heading text="you picked" />
      <section>
        {selectHero && (
          <HeroCard hero={selectHero} updateRating={updateRating} />
        )}
      </section>
    </div>
  );
};

export default HeroList;

