import styled from "styled-components";

type Props = {
  companyName?: string;
  link?: string;
  lastUpdatedYear: number;
};

const Copyright = styled.div`
  font-size: 0.75rem;
  text-align: center;
`;

const Wrapper = ({
  companyName = "Walcron",
  link = "/",
  lastUpdatedYear,
}: Props) => {
  return (
    <Copyright>
      {"Copyright © "}
      <a color="inherit" href={link}>
        {companyName}
      </a>{" "}
      {lastUpdatedYear}
      {"."}
    </Copyright>
  );
};

export default Wrapper;
