import type { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  buttonType: "button" | "link";
  buttonUrl?: string;
  clickBtn: () => void;
};

export default function AppButton({
  children,
  buttonType = "button",
  buttonUrl,
  clickBtn,
}: Props) {
  if (buttonType == "link")
    return (
      <a
        href={buttonUrl}
        className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-800 rounded-md duration-150 text-zinc-50"
      >
        {children}
      </a>
    );

  return (
    <button
      onClick={clickBtn}
      className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-800 rounded-md duration-150"
    >
      {children}
    </button>
  );
}
