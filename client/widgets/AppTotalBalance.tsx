import { useState } from "react";
import { VictoryPie, VictoryTheme } from 'victory';
import AppActionForm from "./AppActionForm";
import AppButton from "@/components/AppButton";
import AppDataWithLabel from "@/components/AppDataWithLabel";

export type Props = {
  purpos: number;
  currentWalletValue: number;
};

export default function AppTotalBalance({ purpos, currentWalletValue }: Props) {
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("pl-PL", {
      style: "currency",
      currency: "PLN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const walletCurrencies = [
    { x: "PLN", y: 33311 },
    { x: "EUR", y: 27614 },
    { x: "USD", y: 1250 },
  ]

  const currenciesList = walletCurrencies.map(({x, y}) => (
    <div key={x} className="text-sm text-zinc-400">
      <span>{x}: {formatNumber(y)}</span>
    </div>
  ))

  return (
    <section>
      <h3 className="text-2xl mb-8">Portfel</h3>
      <div className="grid grid-cols-1 md:gird-cols-2 xl:grid-cols-3 gap-12">
        <div className="grid grid-cols-2 gap-8">
          <AppDataWithLabel label="Wpłaty netto" value={formatNumber(59500)} />
          <AppDataWithLabel label="Wartość portfela" value={formatNumber(63788)} />
          <AppDataWithLabel label="Zysk/Strata" value={formatNumber(3422)} />
          <AppDataWithLabel label="Otrzymane dywidendy" value={formatNumber(25.99)} />
          <AppDataWithLabel label="Gotówka" value={formatNumber(202)} />
          <AppDataWithLabel label="XIRR" value='117.15%' />
        </div>
        <div>
          <h4 className="mb-2 font-light text-zinc-400">Waluty w portfelu</h4>
          <div>
            <VictoryPie
              innerRadius={70}
              data={walletCurrencies}
              theme={VictoryTheme.clean}
            />
          </div>
          <div className="flex gap-2">{currenciesList}</div>
        </div>
      </div>
    </section>
  );
}
