import GlobalStyles from "./styles/global";
import Layout from "./components/Layout";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Quotes />
      </Layout>
    </>
  );
}

export default App;
