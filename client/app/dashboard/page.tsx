'use client';
import {
  VictoryPie,
  VictoryTheme,
} from "victory";
import AppTotalBalance from '@/widgets/AppTotalBalance';
import AppCard from "@/components/AppCard";

export default function Dashboard() {
  return (
    <>
    <AppCard>
      <AppTotalBalance
          purpos={100000}
          currentWalletValue={59000}
        />
    </AppCard>
      <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 },
          ]}
          theme={VictoryTheme.clean}
        />
    </>
  );
}
