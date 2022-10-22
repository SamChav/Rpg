import { useEffect, useState } from "react";
import styles from "../styles/CreateCharacter.module.css";

//file is small enough to not break into components, single page character creation
const CreateCharacter = () => {
  const [playerCharacter, setPlayerCharacter] = useState({
    playerName: null,
    playerClass: null,
    hitPoints: null,
    weapon: null,
    attack: 0,
    spell: null,
    strength: 2,
    dexterity: 2,
    agility: 2,
    vitality: 2,
    intellect: 2,
  });
  const [statPoints, setStatPoints] = useState();

  useEffect(() => {
    //this is simply to instantiate the 10 stat points at render, otherwise "10" will get counted twice, effectively setting 11 stat points
    setStatPoints(() => 10);
  }, []);

  useEffect(() => { //this can be deleted after prod push
    console.log(playerCharacter, "use effect log for development");
  }, [playerCharacter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      statPoints != 0 ||
      playerCharacter.playerClass === null ||
      e.target.elements[19].value.length <= 0
    ) {
      return alert(
        "you must pick a class, you must allocate your stat points, and you must enter a name"
      );
    } else {
      setPlayerCharacter((prev) => {
        let updaterObj = Object.assign({}, prev);
        updaterObj.playerName = e.target.elements[19].value; //playerName --- Is this ugly?
        return updaterObj;
      });
    }
  };

  const selectClass = (e) => { //class selection sets predefined stats and will update on given stats after this page
    setPlayerCharacter((prev) => {
      let updaterObj = Object.assign({}, prev);
      updaterObj.playerClass = e.target.textContent; //selected class target
      if (updaterObj.playerClass.toLowerCase() === "necromancer") {
        updaterObj.spell = "Summon Dead";
        updaterObj.weapon = "Cursed Wand";
        updaterObj.hitPoints = 10;
        updaterObj.attack = 5;
      } else if (updaterObj.playerClass.toLowerCase() === "paladin") {
        updaterObj.spell = "Righteous";
        updaterObj.weapon = "Light Blade";
        updaterObj.hitPoints = 15;
        updaterObj.attack = 8;
      } else if (updaterObj.playerClass.toLowerCase() === "warrior") {
        updaterObj.spell = null;
        updaterObj.weapon = "Brutal Axe";
        updaterObj.hitPoints = 30;
        updaterObj.attack = 15;
      } else if (updaterObj.playerClass.toLowerCase() === "ranger") {
        updaterObj.spell = null;
        updaterObj.weapon = "Grove Blessed Bow";
        updaterObj.hitPoints = 15;
        updaterObj.attack = 10;
      } else {
        updaterObj.spell = null;
      }
      return updaterObj;
    });
  };

  const addStat = (e) => { //add stat using DRY method
    let currentStat = e.target.parentElement.lastChild.innerText.toLowerCase();
    if (statPoints <= 0) {
      return;
    } else {
      setPlayerCharacter((prev) => {
        let updaterObj = Object.assign({}, prev);
        updaterObj[currentStat]++;
        setStatPoints(statPoints--);
        return updaterObj;
      });
    }
  };
  const subtractStat = (e) => { //subtract stat using DRY method
    let currentStat = e.target.parentElement.lastChild.innerText.toLowerCase();
    if (statPoints === 10 || statPoints < 0) {
      return;
    } else {
      setPlayerCharacter((prev) => {
        let updaterObj = Object.assign({}, prev);
        if (updaterObj[currentStat] >= 3) {
          updaterObj[currentStat]--;
          setStatPoints(statPoints++);
          return updaterObj;
        } else {
          return updaterObj;
        }
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.classDiv}>
          <form className={styles.classForm} onSubmit={handleSubmit}>
            <ul className={styles.ul}>
              <p>Class: {playerCharacter.playerClass}</p>
              <li className={styles.li}>
                <label className={styles.li}>
                  <button
                    onClick={selectClass}
                    type="button"
                    className={styles.classButton}
                  >
                    Warrior
                  </button>
                </label>
              </li>
              <li className={styles.li}>
                <label className={styles.li}>
                  <button
                    onClick={selectClass}
                    type="button"
                    className={styles.classButton}
                  >
                    Paladin
                  </button>
                </label>
              </li>
              <li className={styles.li}>
                <label className={styles.li}>
                  <button
                    onClick={selectClass}
                    type="button"
                    className={styles.classButton}
                  >
                    Necromancer
                  </button>
                </label>
              </li>
              <li className={styles.li}>
                <label className={styles.li}>
                  <button
                    onClick={selectClass}
                    type="button"
                    className={styles.classButton}
                  >
                    Ranger
                  </button>
                </label>
              </li>
            </ul>

            <div className={styles.statsForm}>
              Stats Points: {statPoints}
              <li className={styles.li}>
                <label className={styles.li}>
                  <button
                    className={styles.decrementStat}
                    type="button"
                    onClick={subtractStat}
                  >
                    -
                  </button>
                  <button
                    className={styles.incrementStat}
                    type="button"
                    onClick={addStat}
                  >
                    +
                  </button>
                  <input
                    readOnly
                    value={playerCharacter.strength}
                    className={styles.statsInput}
                  />
                  <p className={styles.formText}>Strength</p>
                </label>
              </li>
              <li className={styles.li}>
                <label className={styles.li}>
                  <button
                    className={styles.decrementStat}
                    type="button"
                    onClick={subtractStat}
                  >
                    -
                  </button>
                  <button
                    className={styles.incrementStat}
                    type="button"
                    onClick={addStat}
                  >
                    +
                  </button>
                  <input
                    readOnly
                    value={playerCharacter.dexterity}
                    className={styles.statsInput}
                  />
                  <p className={styles.formText}>Dexterity</p>
                </label>
              </li>
              <li className={styles.li}>
                <label className={styles.li}>
                  <button
                    className={styles.decrementStat}
                    type="button"
                    onClick={subtractStat}
                  >
                    -
                  </button>
                  <button
                    className={styles.incrementStat}
                    type="button"
                    onClick={addStat}
                  >
                    +
                  </button>
                  <input
                    readOnly
                    value={playerCharacter.agility}
                    className={styles.statsInput}
                  />
                  <p className={styles.formText}>Agility</p>
                </label>
              </li>
              <li className={styles.li}>
                <label className={styles.li}>
                  <button
                    className={styles.decrementStat}
                    type="button"
                    onClick={subtractStat}
                  >
                    -
                  </button>
                  <button
                    className={styles.incrementStat}
                    type="button"
                    onClick={addStat}
                  >
                    +
                  </button>
                  <input
                    readOnly
                    value={playerCharacter.vitality}
                    className={styles.statsInput}
                  />
                  <p className={styles.formText}>Vitality</p>
                </label>
              </li>
              <li className={styles.li}>
                <label className={styles.li}>
                  <button
                    className={styles.decrementStat}
                    type="button"
                    onClick={subtractStat}
                  >
                    -
                  </button>
                  <button
                    className={styles.incrementStat}
                    type="button"
                    onClick={addStat}
                  >
                    +
                  </button>
                  <input
                    readOnly
                    value={playerCharacter.intellect}
                    className={styles.statsInput}
                  />
                  <p className={styles.formText}>Intellect</p>
                </label>
              </li>
            </div>
            <input
              className={styles.nameInput}
              placeholder="Enter Character Name"
            ></input>
            <button type="submit" id="submitButton" className={styles.button}>
              Create Character
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCharacter;
