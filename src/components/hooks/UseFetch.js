import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (url, option) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios({
          method: option.method,
          url: url,
          data: option.details,
        });
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;
