"use client";
import AppTotalBalance from "@/widgets/AppTotalBalance";
import AppCard from "@/components/AppCard";
import AppPie from "@/components/AppPie";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-16 lg:grid lg:grid-cols-2 p-4 lg:p-8">
      <div>
        <AppTotalBalance purpos={100000} currentWalletValue={59000} />
      </div>
    </div>
  );
}
