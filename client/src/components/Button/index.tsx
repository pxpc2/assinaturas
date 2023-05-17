import styles from "./Button.module.scss";

interface buttonProps {
  type: string;
  msg: string;
  width?: number;
  height?: number;
}

export default function Button({ type, msg, width, height }: buttonProps) {
  const getType = () => {
    if (type === "primary") return styles.primary;
    else if (type === "secondary") return styles.secondary;
  };
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${getType()}`}
        style={{ height: height, width: width }}
      >
        {msg}
      </button>
    </div>
  );
}
