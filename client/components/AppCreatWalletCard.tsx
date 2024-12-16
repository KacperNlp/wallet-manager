import { useState } from "react";
import AppPopup from "./AppPopup";

export default function AppCreateWalletCard() {
    const [isFormActive, setIsFormActive] = useState(false);
    const [newWalletForm, setNewWalletForm] = useState({
      walletName: '',
      cash: 0
    })


    const toggleVisiblilityOfForm = () => {
      setIsFormActive(!isFormActive)
    }

  return (
    <>
      <section onClick={toggleVisiblilityOfForm} className="flex flex-col items-center justify-center gap-2 rounded-xl aspect-video px-6 py-8 border border-gray-500 hover:border-gray-300 text-gray-500 hover:text-gray-300 duration-200 cursor-pointer">
          <span className="text-4xl">+</span>
      </section>
      {
        isFormActive && 
        <AppPopup onClickCloseBtn={toggleVisiblilityOfForm}>
          <form action="POST">
            
          </form>
        </AppPopup>
      }
    </>
  );
}
