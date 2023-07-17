import styles from "../main/MainBottom.module.css"
import MainBottomLeft from "./MainBottomLeft";
import MainBottomRight from "./MainBottomRight";

const MainBottom = () => {
    return (
        <div className={styles.container}>
            <MainBottomLeft/>
            <MainBottomRight/>
        </div>
    )
    }
    
    export default MainBottom;