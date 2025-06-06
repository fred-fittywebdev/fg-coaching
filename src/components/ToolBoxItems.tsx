import { twMerge } from "tailwind-merge";
export const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassname,
}: {
  items: {
    title: string;
  }[];
  className?: string;
  itemsWrapperClassname?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassname
        )}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center text-white gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
