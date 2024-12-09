"use client";
import AppTotalBalance from "@/widgets/AppTotalBalance";
import AppCard from "@/components/AppCard";
import AppBar from "@/components/AppBar";
import AppPie from "@/components/AppPie";
import AppWalleCard from "@/components/AppWalletCard";

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

  const wallets = [
    {
      name: 'XYV',
      value: 15000,
      firstBgColor: '#B469FF',
      secondBgColor: '#8555C1',
      currency: 'EUR'
    },
    {
      name: 'ABC',
      value: 6500,
      firstBgColor: '#8DD234',
      secondBgColor: '#2EAF4A',
      currency: 'PLN'
    },
    {
      name: 'IKE Obligacje',
      value: 6500,
      firstBgColor: '#6C95FF',
      secondBgColor: '#3D69DB',
      currency: 'USD'
    }
  ]

  const walletsHtml = wallets.map(({name, value, firstBgColor, secondBgColor, currency}) => (
    <AppWalleCard key={name} walletName={name} walletValue={value} firstBgColor={firstBgColor} secondBgColor={secondBgColor} walletCurrency={currency} />
  )) 

  return (
    <div className="flex flex-col gap-16 p-4 lg:p-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {walletsHtml}
      </div>
      <div>
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
