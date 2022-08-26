import Card from "./components/Card";
import Layout from "./components/Layout/Layout";
import useFetch from "./hooks/useCharacters";
import { Provider } from "react-redux";
import generateStore from "./redux/store";

function App() {
  const { result } = useFetch("https://hp-api.herokuapp.com/api/characters");
  const store = generateStore();
  return (
    <Provider store={store}>
      <Layout>
        <div className="cards-container">
          {result.map((character, index) => {
            return <Card key={index} character={character} />;
          })}
        </div>
      </Layout>
    </Provider>
  );
}

export default App;
