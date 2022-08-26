import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(URL);
        const data = await res.json();
        const characters = await data.map((character, index) => {
          return {
            ...character,
            bgColor: character.house ? character.house : "bgDefault",
            id: index + 1,
          };
        });
        setResult(characters);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    getData();
  }, [URL]);

  return {
    result,
    loading,
    error,
  };
};

export default useFetch;
