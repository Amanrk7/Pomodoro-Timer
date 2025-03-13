import Hero from "./components/Hero";
import Layout from "./components/layout";
import Pomotab from "./components/Pomotab";

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <Pomotab />
      </main>
    </Layout>
  );
}

export default App;
