"use client";
import AppTotalBalance from "@/widgets/AppTotalBalance";
import AppCard from "@/components/AppCard";
import AppCreateWalleCard from "@/components/AppCreatWalletCard";
import AppWalleCard from "@/components/AppWalletCard";

export default function Dashboard() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {walletsHtml}
        <AppCreateWalleCard />
      </div>
      <div>
        <AppCard>
          <AppTotalBalance purpos={100000} currentWalletValue={59000} />
        </AppCard>
      </div>
    </div>
  );
}
