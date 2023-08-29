import styled from "styled-components";

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

const Footer = styled.footer`
  padding-top: 0.5rem;
`;

const Text = styled.div`
  font-size: 0.75rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
`;

/**
 * Walcron footer
 */
const Wrapper = ({
  companyName = "Walcron",
  establishedYear = 2014,
  lastUpdatedYear,
}: Props) => (
  <Footer>
    <hr />
    <Text>
      {companyName} {establishedYear} - {lastUpdatedYear} &copy;
    </Text>
  </Footer>
);

export default Wrapper;
