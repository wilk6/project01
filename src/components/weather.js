import React from "react"

export const Weather = ({ weather }) => {
  return (
    <div className='Weather'>
      <figure>
        {" "}
        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt='blad' />
      </figure>
      <p>
        <span>Miasto: </span>
        {weather.name}
      </p>
      <asp>
        <span>Temperatura: </span>
        {weather.temperature} &#8451;
      </asp>
      <p>
        <span>Temperatura odczuwalna: </span>
        {weather.feels_temp} &#8451;
      </p>
      <p>
        <span>Ciśnienie: </span>
        {weather.pressure}hPa
      </p>
      <p>
        <span>Wilgotność: </span>
        {weather.humidity}%
      </p>
    </div>
  )
}
