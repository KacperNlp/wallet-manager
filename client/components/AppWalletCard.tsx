import formatCurrency from "@/helpers/formatCurrency";

export type Props = {
    walletName: string,
    walletValue: number,
    firstBgColor: string,
    secondBgColor: string,
    walletCurrency: string
};

export default function AppWalleCard({
    walletName,
    walletValue,
    firstBgColor,
    secondBgColor,
    walletCurrency = 'USD'
}: Props) {
  return (
    <section className="flex flex-col gap-2 rounded-xl aspect-video px-6 py-8" style={{ background: `linear-gradient(${firstBgColor}, ${secondBgColor})` }}>
        <span className="text-sm text-gray-50/60">{ walletName }</span>
        <strong className="text-xl md:text-2xl">{ formatCurrency(walletValue, walletCurrency) }</strong>
    </section>
  );
}
