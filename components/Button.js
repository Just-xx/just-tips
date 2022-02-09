import Link from "next/link";
import styles from "../styles/Button.module.scss";

const Button = ({ href, text }) => {
  return (
    <Link href={href || ""}>
      <a>
        <span className={styles.button}>{text}</span>
      </a>
    </Link>
  );
};

export default Button;
