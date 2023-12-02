import { useEffect, useState } from "react";
import './index.css'
const ENDPOINT_RAMDON_FACT = `https://catfact.ninja/fact`;

export default function App() {
  const [fact, setFact] = useState(null);
  const [cat, setCat] = useState(null);
  
  useEffect(() => {
    const getRamdonFact = async () => {
      try {
        const fetching = await fetch(ENDPOINT_RAMDON_FACT)
          .then((res) => res.json())
          .then((data) => {
            const { fact } = data;
            setFact(fact);
          });
        return fetching;
      } catch (error) {
        throw Error({ Error: error.message });
      }
    };
    getRamdonFact();
  }, []);

  useEffect(() => {
    try {
      if (!fact) return;
      const threeFirsttWord = fact.split(" ", 3).join(" ");
      const ENDPOINT_CAT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirsttWord}?fontSize=6&fontColor=red`;
      setCat(ENDPOINT_CAT_IMAGE_URL);
    } catch (error) {
      throw Error({ Error: error.message });
    }
  }, [fact]);



  return (
    <main>
      <h1>Cat App</h1>
      <article>
        {fact && <p>{fact}</p>}
        {cat && <img src={cat} alt="img" />}
        
      </article>
      
    </main>
  );
}
