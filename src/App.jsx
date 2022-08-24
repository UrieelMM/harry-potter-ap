import Layout from "./components/Layout/Layout";
import useFetch from "./hooks/useFetch";

function App() {
  const { result, loading, error } = useFetch(
    "http://hp-api.herokuapp.com/api/characters"
  );
  console.log(result[0].name);
  return (
    <Layout>
      <div>
        {result.map((character) => {
          return <p style={{ color: "#FFFFFF" }}>{character.name}</p>;
        })}
      </div>
    </Layout>
  );
}

export default App;
