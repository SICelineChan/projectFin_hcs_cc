import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";

function FetchGlobeApi({ id: GlobeId }) {
  const [globe, setGlobe] = useState({});
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const GlobeFromStorage = JSON.parse(window.localStorage.getItem(GlobeId));

    if (!GlobeFromStorage) {
      console.log("Fetching the Globe from API");
      const wholeGlobe = `https://restcountries.com/v3.1/name/${GlobeId}`;

      fetch(wholeGlobe)
        .then((result) => result.json())
        .then((resJson) => {
          console.log(resJson);

          //   if (resJson) {
          //     const countryObject = {
          //       nameOfficial: resultJson[0].name.nativeName.spa.official,
          //       flag: resultJson[0].flags.png,
          //       capital: resultJson[0].capital,
          //     };
          //     setCountry(countryObject);
          //     window.localStorage.setItem(
          //       countryId,
          //       JSON.stringify(countryObject)
          //     );
          //   }
        })
        .catch((error) => {
          console.error("Something went wrong", error);
          setFetchError(true);
        });
    } else {
      console.log("Found SOMETHING in localStorage");
      setGlobe(GlobeFromStorage);
    }
  }, [GlobeId]);

  return (
    !fetchError && (
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <h2>Ooops I did it again!</h2>
          {/* <Card.Title>{country.nameOfficial}</Card.Title>

          <Card.Text>{country.capital}</Card.Text>
          <Card.Img variant="top" img src={country.flag} /> */}
        </Card.Body>
      </Card>
    )
  );
}

export default FetchGlobeApi;
