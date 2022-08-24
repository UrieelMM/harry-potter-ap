import Card from "./components/Card";
import Layout from "./components/Layout/Layout";
import useFetch from "./hooks/useFetch";

function App() {
  const { result } = useFetch("http://hp-api.herokuapp.com/api/characters");

  return (
    <Layout>
      <div className="cards-container">
        {result.map((character, index) => {
          return <Card key={index} character={character} />;
        })}
      </div>
    </Layout>
  );
}

export default App;
