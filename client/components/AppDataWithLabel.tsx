export type Props = {
    label: string,
    value: string | number
};

export default function AppDataWithLabel({
    label,
    value
}: Props ) {
    return (
    <div>
        <h4 className="mb-2 font-light text-zinc-400">{label}</h4>
        <span><strong>{value}</strong></span>
      </div>
    );
}