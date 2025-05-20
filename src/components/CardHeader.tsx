import { twMerge } from "tailwind-merge";
export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="inline-flex items-center text-red-orange-500 gap-2">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
            fill="currentColor"
          />
        </svg>
        <h3 className="text-3xl text-white gap-2">{title}</h3>
      </div>
      <p className="text-sm text-white/60 mt-2">{description}</p>
    </div>
  );
};
