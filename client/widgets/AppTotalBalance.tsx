import { useState } from "react";
import AppActionForm from "./AppActionForm";
import AppButton from "@/components/AppButton";

export type Props = {
  purpos: number;
  currentWalletValue: number;
};

export default function AppTotalBalance({ purpos, currentWalletValue }: Props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("pl-PL", {
      style: "currency",
      currency: "PLN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const onClickDeposite = () => {
    console.log("Deposite!");
    setIsPopupVisible(true);
  };

  const onClickWithdraw = () => {
    console.log("Withdraw!");
    setIsPopupVisible(true);
  };

  const onClickClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <section>
      <span className="block text-xs text-gray-500 text-center my-2">
        Całkowita wartość portfela
      </span>
      <div className="text-3xl lg:text-4xl text-center mb-4">
        <strong className="font-semibold">
          {formatNumber(currentWalletValue)}
        </strong>
      </div>
      <div className="text-xs lg:text-sm text-center flex flex-col gap-2 text-gray-300">
        <div>
          Wpłaty netto: <strong>{formatNumber(55000)}</strong>
        </div>
        <div>
          Gotówka: <strong>{formatNumber(550)}</strong>
        </div>
        <div>
          Zysk: <strong className="text-green-500">{formatNumber(3250)}</strong>
        </div>
        <div>
          Otrzymana dywidenda: <strong>{formatNumber(250)}</strong>
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-center mt-4">
        <AppButton clickBtn={onClickDeposite}>Wpłać</AppButton>
        <AppButton buttonType="secondary" clickBtn={onClickWithdraw}>
          Wypłać
        </AppButton>
      </div>
      {!isPopupVisible || (
        <AppActionForm onClickClosePopup={onClickClosePopup} />
      )}
    </section>
  );
}
