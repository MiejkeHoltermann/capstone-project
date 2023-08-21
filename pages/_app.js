import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import initialSights from "../db/sights";
import useLocalStorageState from "use-local-storage-state";
import trips from "../db/trips";

export default function App({ Component, pageProps }) {
  const [sights, setSights] = useLocalStorageState("sights", {
    defaultValue: initialSights,
  });

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
        <Component
          {...pageProps}
          trips={trips}
          sights={sights}
          setSights={setSights}
          handleSights={handleSights}
        />
      </Layout>
    </>
  );
}
