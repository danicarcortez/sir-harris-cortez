import { Flowbite } from "flowbite-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flowbite>
      <main className="p-6 md:p-8 flex justify-center max-w-5xl flex-col mx-auto">
        {children}
      </main>
    </Flowbite>
  );
}
