// import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";
import { flex } from "./styled/styled";

const Section = styled.section`
  ${flex({justify: "center", align: "center", wrap: "wrap", gap: "20"})}
  padding: 20px 40px;
`

function App() {
  return (
    <main>
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </main>
  );
}

export default App;
