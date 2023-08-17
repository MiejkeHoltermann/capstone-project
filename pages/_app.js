import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import initialSights from "../db/sights";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [sights, setSights] = useState(initialSights);

  function handleSights(id) {
    const updatedSights = sights.map((sight) => {
      if (sight.id === id) {
        return {
          ...sight,
          inItinerary: true,
          hidden: true,
        };
      } else {
        return sight;
      }
    });
    setSights(updatedSights);
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} sights={sights} handleSights={handleSights} />
      </Layout>
    </>
  );
}
