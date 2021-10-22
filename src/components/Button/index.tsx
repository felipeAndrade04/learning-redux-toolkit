import { ButtonHTMLAttributes } from "react";

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({ title, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="button"
    >
      {title}
    </button>
  )
}

export default Button;