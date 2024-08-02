import { Flowbite } from "flowbite-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flowbite>
      <main className="p-6 md:p-8">{children}</main>
    </Flowbite>
  );
}
