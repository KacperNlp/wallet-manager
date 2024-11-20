import type { ReactNode } from "react";

export type Props = {
    children: ReactNode;
};

export default function AppCard({
    children
}: Props ) {
    return (
      <section className="p-4 shadow-md border border-indigo-700">
        { children }
      </section>
    );
}