import styles from "./MainBottomLeft.module.css"

const MainBottomLeft = () => {
return (
    <div className={styles.container}>
        <input placeholder="Departure" className={styles.input}></input>
        <input placeholder="Arrival" className={styles.input}></input>
        <input type="date" className={styles.input} style={{marginTop: "50px"}}></input>
        <button cursor="pointer" className={styles.button}>Search</button>
    </div>
)
}

export default MainBottomLeft;