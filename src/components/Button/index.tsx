import styles from "./button.module.css";

interface ButtonProps {
  url: string;
  children: string;
  type?: "no-fill";
  small?: true;
}

export function Button({ url, children, type, small }: ButtonProps) {
  return (
    <a
      href={`#${url}`}
      type={type}
      className={`${styles.button} ${type === "no-fill" ? styles["button-secondary"] : ""} ${small ? styles.small : ""}`}
    >
      {children}
    </a>
  );
}
