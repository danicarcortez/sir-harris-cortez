export const LinkComponent = ({ href, text }: { href: string; text: string }) => (
  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={href}>
    {text}
  </a>
);
