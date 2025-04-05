import React, { useState } from 'react';
import'./Country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    const [visited,setVisited] = useState(false);

    const handleVisited = () =>{
        // if(visited === true){
        //     setVisited(false);
        // }
        // else {
        //     setVisited(true);
        // }
        setVisited(!visited);
        handleVisitedCountries(country);
        handleVisitedFlags()
    }
    // console.log(country);
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name:{country.name.common}</h3>
            <img src={country?.flags?.png} alt="" />
            <p>Independent: {country.independent ? 'Free' : 'Not Free' }</p>
            <p>Population: {country.population}</p>
            <button 
            className={visited ? 'btn-visited' : 'btn-not-visited'}
            onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add visited Flag</button>
        </div>
    );
};

export default Country;