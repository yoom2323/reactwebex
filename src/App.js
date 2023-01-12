import Main from "./components/Main";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
}
`;

function App() {
  return (
    <>
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;
