import GlobalStyle from "../styles";
import initialSights from "../db/sights";
import initialTrips from "../db/trips";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [sights, setSights] = useLocalStorageState("sights", {
    defaultValue: initialSights,
  });
  const [trips, setTrips] = useLocalStorageState("trips", {
    defaultValue: initialTrips,
  });

  function addSightsToItinerary(id) {
    const updatedSights = sights.map((sight) => {
      if (sight.id === id) {
        return {
          ...sight,
          inItinerary: !sight.inItinerary,
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
      <GlobalStyle />
      <Component
        {...pageProps}
        sights={sights}
        setSights={setSights}
        trips={trips}
        setTrips={setTrips}
        addSightsToItinerary={addSightsToItinerary}
      />
    </>
  );
}
