import { useState } from "react";
import Heading from "../Heading/Heading";
import { heroes } from "./data";
import HeroCard from "./HeroCard";
import styles from "./Hero.module.css"

const HeroList = () => {
    const [selectHero, setSelectHero] = useState(null);
    const showHero = (hero)=><HeroCard key={hero.id} hero={hero} setSelectHero={setSelectHero} />
    return (
        <div>
           <Heading text='pick favourite hero'/> 
           <section className={styles.heroes}>
            {heroes.map(showHero)}
           </section>
           <Heading text='you picked' />
           <section>
           { selectHero && <HeroCard hero={selectHero} />} 
           </section>
        </div>
    );
}

export default HeroList;
