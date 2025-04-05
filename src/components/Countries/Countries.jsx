import React, { use, useState } from 'react';
import Country from '../Country/Country';
import'./Countries.css';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries]= useState([]);
    const [visitedFlags,setVisitedFlags]= useState([]);
    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) =>{
        console.log('country visited clicked.....'),country;
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags=(flag)=>{
        const newVisitedFlags = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        <div>
            <h1>Traveling countries: {countries.length}</h1>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag,index) => <img 
                    key={index}
                    src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <h3>Traveled so far:{visitedCountries.length}</h3>
            <div className='countries'>
            {
                countries.map(country => <Country
                    key={country.cca3}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;