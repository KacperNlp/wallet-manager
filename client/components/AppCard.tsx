import type { ReactNode } from "react";

export type Props = {
    children: ReactNode;
};

export default function AppCard({
    children
}: Props ) {
    return (
      <section className="p-4 lg:p-8 xl:p-12 shadow-xl bg-stone-900 rounded-md">
        { children }
      </section>
    );
}