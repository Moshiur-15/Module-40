import { useState } from "react";
import "./country.css";
export default function Country({ c , handleVisitedCountries, handleImg }) {

  const [visited, setVisited] = useState(false);
  const { name, flags, area, cca3 } = c;
  const handleClick = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <img className="image" src={flags.png} alt="" />
      <h2 className="center">Name : {name?.common}</h2>
      <p className="center"> Area : {area}</p>
      <p className="center">Code : {cca3}</p>
      <button onClick={()=>handleImg(c)}>Img</button>
      <button onClick={()=>handleVisitedCountries(c)}>Mark visited</button>
      <button className="gap" onClick={handleClick}>
        {visited ? "visited" : "going"}
      </button>
      {visited ? "I have visited this country" : "I want to visit"}
    </div>
  );
}
