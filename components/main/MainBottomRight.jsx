import styles from "./MainBottomRight.module.css";
import Image from "next/image";
import trainPicture from "../../public/images/train.png"

const MainBottomRight = () => {
  return (
    <div className={styles.container}>
      <Image
        src={trainPicture}
        width={100}
        height={100}
        alt="Picture of the train"
      />
      <div className={styles.separator}></div>
      <p>It's time to book your future trip</p>
    </div>
  );
};

export default MainBottomRight;
