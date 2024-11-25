"use client";
import AppTotalBalance from "@/widgets/AppTotalBalance";
import AppCard from "@/components/AppCard";
import AppBar from "@/components/AppBar";
import AppPie from "@/components/AppPie";

const DashboardStyles = {
  gridTemplateCols: "repeat(2, 1fr)",
};

export default function Dashboard() {
  const examplePieData = [
    {
      x: "Akcję",
      y: 7000,
    },
    {
      x: "ETF",
      y: 25000,
    },
    {
      x: "Obligacje",
      y: 24500,
    },
  ];

  return (
    <div className="flex flex-col gap-16 p-4 lg:p-8 max-w-[1440px] mx-auto">
      <div className="mt-16">
        <AppCard>
          <AppTotalBalance purpos={100000} currentWalletValue={59000} />
        </AppCard>
      </div>
      {/* <div className="grid-in-wallet">
        <AppPie pieData={examplePieData} />
      </div>
      <div className="grid-in-bars">
        <AppBar pieData={examplePieData} />
      </div>
      <div>
        <h1>Historia</h1>
      </div> */}
    </div>
  );
}
