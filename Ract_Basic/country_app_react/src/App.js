import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries';
const url = "https://restcountries.com/v3.1/all";
function App() {
  

  const [isLoading,setIsLoading]= useState(true);
  const [error,setError] = useState(null);
  const [countries,setCountries]= useState([]);
  const [filteredCountries,setFilteredCountries]= useState(countries);
const fetchData = async (url)=>{
  setIsLoading(true)
try{
  const response = await fetch(url);
  const data = await response.json();
  setCountries(data);
  setFilteredCountries(data);
  setIsLoading(false);
  setError(null);
  console.log(countries);
}
catch(error){
  setIsLoading(false);
  setError(error);
  console.log(error)
}

}

  useEffect(()=>{
    fetchData(url)
  },[]);

  const handleRemoveCountry = (name) =>{
    const filter = filteredCountries.filter((country)=>
    country.name.common != name );
    setFilteredCountries(filter);

  }


  return (
    <div >
      <h3>Country App</h3>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry}/>}
    </div>
  );
}

export default App;
