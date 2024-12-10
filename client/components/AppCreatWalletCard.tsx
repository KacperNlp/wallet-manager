export default function AppCreateWalleCard() {
    const createNewWallet = () => {
        console.log('add form to create new wallet')
    }

  return (
    <section onClick={createNewWallet} className="flex flex-col items-center justify-center gap-2 rounded-xl aspect-video px-6 py-8 border border-gray-500 hover:border-gray-300 text-gray-500 hover:text-gray-300 duration-200 cursor-pointer">
        <span className="text-4xl">+</span>
    </section>
  );
}
