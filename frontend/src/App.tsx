import GlobalStyles from "./styles/global";
import Layout from "./components/Layout";
import Router from "./router";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
