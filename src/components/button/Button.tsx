import React from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const variantClass =
    variant === "outline" ? styles.btnOutline : styles.btnPrimary;

  return (
    <button className={clsx(styles.btn, variantClass, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;


