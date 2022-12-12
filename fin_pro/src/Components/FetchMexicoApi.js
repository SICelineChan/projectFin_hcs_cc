import { useEffect, useState } from "react";

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
      <div style={{ width: "24rem" }}>
        <br></br>
        <h1>{country.nameOfficial}</h1>

        <h2>{country.capital}</h2>
        <img variant="top" img src={country.flag} alt="flag" />
      </div>
    )
  );
}

export default FetchMexicoApi;
