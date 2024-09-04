import { Popover } from "flowbite-react";

export const FigureComponent = ({
  imageSrc,
  text,
  variant = "sup",
}: {
  imageSrc: string;
  text: string;
  variant?: "sup" | "p";
}) => (
  <Popover
    trigger="hover"
    content={
      <div className="max-w-48 md:max-w-72 max-h-48 md:max-h-72 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
        <img src={imageSrc} className="col-span-2 w-full" />
      </div>
    }
  >
    <>
      {variant === "sup" ? (
        <sup className="cursor-pointer inline text-blue-600 dark:text-blue-500">
          {text}
        </sup>
      ) : (
        <p className="cursor-pointer inline text-blue-600 dark:text-blue-500">
          {text}
        </p>
      )}
    </>
  </Popover>
);
