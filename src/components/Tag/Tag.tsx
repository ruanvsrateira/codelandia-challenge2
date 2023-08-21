import classnames from "classnames";

interface TagProps {
  type: "title" | "informative";
  color: "blue" | "light-gray";
  text: string;
}

export const Tag = ({ color, text, type }: TagProps) => {
  const finalClassName = classnames(
    "w-full h-14 flex flex-row items-center justify-center font-montSerrat",
    { "bg-blue": color === "blue" },
    { "bg-extraLightSilver": color === "light-gray" },
    { "text-lg font-semibold": type === "title" }
  );

  return <div className={finalClassName}>{text}</div>;
};
