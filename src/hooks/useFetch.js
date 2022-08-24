import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setTimeout(async () => {
          const res = await fetch(URL);
          const data = await res.json();
          setResult(data);
        }, 2500);
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
