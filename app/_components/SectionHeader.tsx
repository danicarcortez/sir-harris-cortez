export const SectionHeader = ({ text, id }: { text: string; id: string }) => (
  <h2 id={id} className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
    {text}
  </h2>
);
