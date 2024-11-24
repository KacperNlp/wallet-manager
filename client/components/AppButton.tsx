import type { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  buttonType?: "primary" | "secondary";
  isLink?: boolean;
  buttonUrl?: string;
  clickBtn?: () => void;
};

export default function AppButton({
  children,
  buttonType = "primary",
  isLink = false,
  buttonUrl,
  clickBtn,
}: Props) {
  let btnStyles = "px-4 py-2 text-sm rounded-md duration-150 cursor-pointer";

  btnStyles +=
    buttonType === "primary"
      ? " bg-indigo-600 hover:bg-indigo-800 text-zinc-50"
      : " bg-transparent border border-indigo-600 hover:border-indigo-800 text-indigo-600 hover:text-indigo-800";

  if (isLink)
    return (
      <a href={buttonUrl} className={btnStyles}>
        {children}
      </a>
    );

  return (
    <button onClick={clickBtn} className={btnStyles}>
      {children}
    </button>
  );
}
