import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
// import Country from "./Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [img, setImg] = useState([]);

    const handleImg = (image)=>{
        const NewSetImg = [...img, image]
        setImg(NewSetImg)
    }

    const handleVisitedCountries = (countries) =>{
        const NewVisitedCountries= [...visitedCountries,countries]
        setVisitedCountries(NewVisitedCountries)
    }

    useEffect(()=>{
        const FetchData =async()=>{
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
            setCountries(data)
        }
        FetchData();
    },[])
    return (
        <div>
            
            <h1 className="center">All Countrys</h1>
            {/* visited country */}
            <div className="border">
                <h2 className="center">Visited Country</h2>
                {
                    visitedCountries.map((county, inx)=><li key={inx}>{county.name.common}</li>)
                }
                {
                    img.map((i, inx)=> <img key={inx} src={i.flags.png} alt="" /> )
                }
            </div>

            <div className="Country-parent">
            {
                countries.map(
                    county=><Country 
                    key={county.cca3} 
                    c={county}
                    handleVisitedCountries={handleVisitedCountries}
                    handleImg={handleImg}></Country>
                )
            }
            </div>
        </div>
    );
};

export default Countries;