import { IconProps } from "./types";

export const SingleArrow = ({
  color = "currentColor",
  ...props
}: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.33474 5.34171C8.78105 4.8861 9.50467 4.8861 9.95098 5.34171L15.6653 11.175C16.1116 11.6307 16.1116 12.3693 15.6653 12.825L9.95098 18.6583C9.50467 19.1139 8.78105 19.1139 8.33474 18.6583C7.88842 18.2027 7.88842 17.464 8.33474 17.0084L13.2409 12L8.33474 6.99162C7.88842 6.53601 7.88842 5.79732 8.33474 5.34171Z"
        fill={color}
      />
    </svg>
  );
};
