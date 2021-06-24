import React,{useState,useEffect} from 'react';
import "./Card.css";

const Card = () => {


    // State hook to handle name of city entered in search bar
    const [ NameOfCity , setNameOfCity ] = useState(null);


    // State hook to search the name of city entered by user
    const [searchCity , setSearchCity ] = useState(""); 


    // Effect hook to display data after first render
    useEffect(() => {

       const getData =  async () => {

        // the api url from which the data will be fetched
           const dataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=2b01569f9eeb5f0390fef2270eb8a4e5`;
           const response = await fetch(dataUrl);

        //    json response to access fields easily
           const jsonResponse = await response.json();

           setNameOfCity(jsonResponse.main);
        }

       getData();

    },[searchCity]);

    

    return (

       <div className="card">
            <div className="search">
                <input 
                    type="search" 
                    className="search_bar" 
                    placeholder="Search City Name ... " 
                    value={searchCity}
                    onChange={(event) => {
                        setSearchCity(event.target.value);
                    }} />
            </div>

            {!NameOfCity ? (
                <h2>The city name you entered doesn't exists</h2>
            ) : (
                
                    <div className="data">
                        <h1 className="location_name"><i className="fas fa-location-arrow">{searchCity}</i></h1>
                        <div className="details">
                            <h3 className="temperature">
                                Temperature is : {NameOfCity.temp}
                            </h3>
                            <h3 className="max-temp">
                                Maximum temperature : {NameOfCity.temp_min}
                            </h3>
                            <h3 className="min-temp">
                                Minimum temperature : {NameOfCity.temp_max}
                            </h3>
                            <h3 className="pressure">
                                Pressure : {NameOfCity.pressure}
                            </h3>
                            <h3 className="humidity">
                                Humidity : {NameOfCity.humidity}
                            </h3>
                        </div>
                    </div>
                
            )}

            
       </div>
    )
}

export default Card;
