import styles from "../styles/game.module.css"
import { useEffect, useState } from "react"

const Game = () => {
    let [enemyFire, setEnemyFire] = useState([1]);
    let [playerInfo, setPlayerInfo] = useState([]);
    
useEffect(() => {    
        document.addEventListener('mousemove', (event) => {
            console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
        }); 
}, [])
     

    return (
        <div className={styles.gameWrapper}>
            <div className={styles.gameBoard}>
                <div className={styles.playerUnit}></div>
                <div className={styles.footer}></div>
            </div>
            
        </div>
    )
}

export default Game;