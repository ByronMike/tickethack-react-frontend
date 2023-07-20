import styles from "../footer/Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <p>Created with <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />  by Michaël Auger</p>
        </div>
    )
}

export default Footer;