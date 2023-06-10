interface Props {
  /**
   * Provide a company name, or else it will be defaulted with "Walcron"
   */
  companyName?: string;
  /**
   * Provide company year started as YYYY
   */
  establishedYear?: number;
  /**
   * Last updated year
   */
  lastUpdatedYear: number;
}

/**
 * Walcron footer
 */
const Footer = ({
  companyName = "Walcron",
  establishedYear = 2014,
  lastUpdatedYear,
}: Props) => (
  <small>
    {companyName} {establishedYear}-{lastUpdatedYear} &copy;
  </small>
);

export default Footer;
