import styles from "./container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  fluid?: boolean;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
