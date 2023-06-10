interface Props {
  /**
   * Color of logo
   */
  color?: "green" | "blue" | "yellow";
}

/**
 * Walcron logo and symbol
 */
const Logo = ({ color }: Props) => (
  <div>
    Logo <span>{color}</span>
  </div>
);

export default Logo;
