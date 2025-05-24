import { IconProps } from "./utils";

export const Legendary = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.88571C6.96415 2.88571 2.88571 6.96415 2.88571 12C2.88571 17.0358 6.96415 21.1143 12 21.1143C17.0358 21.1143 21.1143 17.0358 21.1143 12C21.1143 6.96415 17.0358 2.88571 12 2.88571ZM12 1C5.9227 1 1 5.9227 1 12C1 18.0773 5.9227 23 12 23C18.0773 23 23 18.0773 23 12C23 5.9227 18.0773 1 12 1Z"
        fill={color}
      />
    </svg>
  );
};
