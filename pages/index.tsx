import type { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div<{ theme: string }>`
  padding: 0 2px;
  ${(props) => props.theme === "dark" && "background:black"}
`;

const Home: NextPage = () => {
  return <Container theme="light"></Container>;
};

export default Home;
