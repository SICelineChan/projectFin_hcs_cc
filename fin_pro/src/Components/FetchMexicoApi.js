import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";

function FetchMexicoApi({ id: countryId }) {
  const [country, setCountry] = useState({});
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const countryFromStorage = JSON.parse(
      window.localStorage.getItem(countryId)
    );

    if (!countryFromStorage) {
      console.log("Fetching new Country from API");
      const endpoint = `https://restcountries.com/v3.1/name/mexico`;

      fetch(endpoint)
        .then((result) => result.json())
        .then((resultJson) => {
          console.log(resultJson[0].name);
          console.log(resultJson);
          //   console.log(resultJson[0].name.nativeName.spa.official);

          if (resultJson) {
            const countryObject = {
              nameOfficial: resultJson[0].name.nativeName.spa.official,
              flag: resultJson[0].flags.png,
              capital: resultJson[0].capital,
            };
            setCountry(countryObject);
            window.localStorage.setItem(
              countryId,
              JSON.stringify(countryObject)
            );
          }
        })
        .catch((error) => {
          console.error("Something went wrong", error);
          setFetchError(true);
        });
    } else {
      console.log("Found SOMETHING in localStorage");
      setCountry(countryFromStorage);
    }
  }, [countryId]);

  return (
    !fetchError && (
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>{country.nameOfficial}</Card.Title>

          <Card.Text>{country.capital}</Card.Text>
          <Card.Img variant="top" img src={country.flag} />
        </Card.Body>
      </Card>
    )
  );
}

export default FetchMexicoApi;
