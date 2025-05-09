import { IconProps } from "./types";

export const ArrowRight = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.364 5.70711C10.9734 5.31658 10.9734 4.68342 11.364 4.2929C11.7545 3.90237 12.3876 3.90237 12.7782 4.2929L19.8493 11.364C20.2398 11.7545 20.2398 12.3876 19.8493 12.7782L12.7782 19.8492C12.3876 20.2397 11.7545 20.2397 11.364 19.8492C10.9734 19.4587 10.9734 18.8255 11.364 18.435L16.728 13.0711H5C4.44772 13.0711 4 12.6233 4 12.0711C4 11.5188 4.44772 11.0711 5 11.0711H16.728L11.364 5.70711Z"
        fill={color}
      />
    </svg>
  );
};
