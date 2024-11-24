import AppButton from "@/components/AppButton";

type Props = {
  onClickClosePopup?: () => void;
};

export default function AppActionForm({ onClickClosePopup }: Props) {
  return (
    <section className="fixed inset-0 w-full h-full flex justify-center items-center bg-gray-900/60">
      <div className="p-16 flex flex-col gap-4 bg-gray-900 rounded-lg shadow-lg">
        <form action="POST">
          <div>
            <label htmlFor="sum"></label>
            <input type="number" name="sum" id="sum" />
          </div>
        </form>
        <div className="flex justify-center gap-4 mt-4">
          <AppButton clickBtn={onClickClosePopup}>Prześlij</AppButton>
          <AppButton buttonType="secondary" clickBtn={onClickClosePopup}>
            Zamknij
          </AppButton>
        </div>
      </div>
    </section>
  );
}
