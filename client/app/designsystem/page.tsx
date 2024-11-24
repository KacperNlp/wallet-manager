import AppButton from "@/components/AppButton";

export default function Dashboard() {
  return (
    <div className="m-8 md:m-16">
      <section>
        <h2 className="mb-4">Buttony</h2>
        <div className="mb-3">
          <AppButton>Wciśnij mnie!</AppButton>
        </div>
        <div className="mb-3">
          <AppButton isLink={true}>Wciśnij Link!</AppButton>
        </div>
        <div className="mb-3">
          <AppButton buttonType="secondary">Wciśnij mnie!</AppButton>
        </div>
        <div className="mb-3">
          <AppButton buttonType="secondary" isLink={true}>
            Wciśnij Link!
          </AppButton>
        </div>
      </section>
      <section></section>
    </div>
  );
}
