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
        setResult(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.log(error);
      }
    };
    getData();
  }, []);

  return {
    result,
    loading,
    error,
  };
};

export default useFetch;
