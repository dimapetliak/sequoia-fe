import { IconProps } from "./utils";

export const ArrowDown = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.70711 11.3644C5.31658 10.9739 4.68342 10.9739 4.2929 11.3644C3.90237 11.755 3.90237 12.3881 4.2929 12.7787L11.364 19.8498C11.7545 20.2403 12.3876 20.2403 12.7782 19.8498L19.8492 12.7787C20.2397 12.3881 20.2397 11.755 19.8492 11.3644C19.4587 10.9739 18.8255 10.9739 18.435 11.3644L13.0711 16.7285L13.0711 5.00049C13.0711 4.44821 12.6233 4.00049 12.0711 4.00049C11.5188 4.00049 11.0711 4.44821 11.0711 5.00049L11.0711 16.7285L5.70711 11.3644Z"
        fill={color}
      />
    </svg>
  );
};
