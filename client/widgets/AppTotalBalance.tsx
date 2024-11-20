export type Props = {
    purpos: number,
    currentWalletValue: number
};

export default function AppTotalBalance({
  purpos,
  currentWalletValue
}: Props) {

    const formatNumber = (value: number) => {
      return new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    }

  return (
    <section>
        <div className="text-2xl text-center"><strong className="font-semibold">{formatNumber(currentWalletValue)}</strong></div>
    </section>
  );
}
