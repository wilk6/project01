import React, { useState, useEffect } from "react"
import "./App.css"
import { SearchTown } from "./components/searchTown"
import { Weather } from "./components/weather"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome } from "@fortawesome/free-solid-svg-icons"
library.add(faHome)

const App = () => {
  const [weather, setWeather] = useState({
    temperature: "",
    icon: "",
    name: "",
    feels_temp: "",
    pressure: "",
    humidity: "",
  })
  const [town, setTown] = useState("Warszawa")
  const Api_url = `http://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=92aec1912fb9a605ef4f50a1975508a0`

  useEffect(
    () => {
      fetch(Api_url)
        .then((response) => response.json())
        .then((data) => {
          setWeather({
            temperature: data.main.temp,
            icon: data.weather[0].icon,
            name: data.name,
            feels_temp: data.main.feels_like,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
          })
        })
        .catch((error) => console.error(error))
    },
    [town],
  )
  return (
    <div className='container'>
      <a className='Link' href='https://wilk6.github.io'>
        <FontAwesomeIcon icon={["fas", "home"]} size='3x' />
      </a>
      <SearchTown setTown={setTown} />
      <Weather weather={weather} />
    </div>
  )
}

export default App
