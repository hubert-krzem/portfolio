import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonOptions {
  label?: string;
  link?: string;
}

type ButtonProps = ButtonOptions & ButtonHTMLAttributes<HTMLButtonElement>;

const className = `py-4 bg-white text-black rounded-full border
                   hover:bg-gray-100 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
                   font-bold text-2xl text-center`;

export default function Button({ label, link, ...props }: ButtonProps) {
  if (link) {
    return (
      <Link href={link} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button {...props} className={className}>
      {label}
    </button>
  );
}
