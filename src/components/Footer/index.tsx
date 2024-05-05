import styled from "./footer.module.css";

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
const Wrapper = ({
  companyName = "Walcron",
  establishedYear = 2014,
  lastUpdatedYear,
}: Props) => (
  <div className={styled.footer}>
    <hr />
    <div>
      {companyName} {establishedYear} - {lastUpdatedYear} &copy;
    </div>
  </div>
);

export default Wrapper;
