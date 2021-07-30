import { useState, useEffect } from "react";
import API_KEY from "./Keys";

const CONTEXT_KEY = "cae26b74d1eeab5c9";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  // Fires off when the term is changed
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        // Fetcing the data from google API
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        // Setting the response we got from google and putting in is our data
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
