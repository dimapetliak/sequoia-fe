import { IconProps } from "./utils";

export const ArrowUpLeft = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 8C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6H7C6.44771 6 6 6.44772 6 7V17C6 17.5523 6.44771 18 7 18C7.55229 18 8 17.5523 8 17V9.41421L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L9.41421 8H17Z"
        fill={color}
      />
    </svg>
  );
};
