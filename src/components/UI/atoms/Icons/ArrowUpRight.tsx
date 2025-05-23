import { IconProps } from "./utils";

export const ArrowUpRight = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8H7Z"
        fill={color}
      />
    </svg>
  );
};
