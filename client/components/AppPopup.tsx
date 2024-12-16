import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons'
import AppCard from "./AppCard";

export type Props = {
  children: ReactNode;
  onClickCloseBtn: () => void;
};

export default function AppPopup({
  children,
  onClickCloseBtn
}: Props) {

  return (
    <div className="fixed w-dvw h-dvh bg-stone-900/50 flex justify-center items-center z-50 inset-0">
        <AppCard>
            <button onClick={onClickCloseBtn} className="absolute top-[-5px] right-[-5px] px-3 py-2 bg-rose-700 hover:bg-rose-600 rounded-2xl text-xs duration-200">
              <FontAwesomeIcon icon={faX} />
            </button>
            {children}
        </AppCard>
    </div>
  );
}
