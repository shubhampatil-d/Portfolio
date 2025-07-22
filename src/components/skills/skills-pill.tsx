import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>> | string;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;
  const isString = typeof icon === "string";
  return (
    <div
      className="flex min-h-[44px] w-max items-center gap-3 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-2 text-sm shadow-sm dark:bg-zinc-800 sm:min-h-[56px] sm:text-base md:px-6 md:py-2 md:text-lg"
      style={{ minWidth: 120 }}
    >
      {isString ? (
        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-900 sm:h-10 sm:w-10">
          <img
            src={icon as string}
            alt={name + " logo"}
            className="h-6 w-6 object-contain sm:h-8 sm:w-8"
            style={{ display: "block", margin: "0 auto" }}
          />
        </div>
      ) : (
        // @ts-ignore
        icon && <icon className="h-6 w-6 sm:h-8 sm:w-8" />
      )}
      <span
        className="w-full whitespace-nowrap text-center font-medium"
        style={{ lineHeight: 1.2 }}
      >
        {name}
      </span>
    </div>
  );
}
