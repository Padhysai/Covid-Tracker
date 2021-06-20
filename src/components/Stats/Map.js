import React from "react";
import numeral from "numeral";
import { Map as LeafletMap, TileLayer, Circle, Popup } from "react-leaflet";

function Map(props) {
  const showDataOnmap = (data) =>
    data.map((country) => (
      <Circle
        key={country.name}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        color="#CC1034"
        fillColor="#CC1034"
        fillOpacity={0.4}
        radius={Math.min(Math.sqrt(country.cases) * 100, 586500)}
      >
        <Popup>
          <div className="info-container">
            <div
              className="info-flag"
              style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
            ></div>
            <div className="info-name">{country.country}</div>
            <div className="info-confirmed">
              Cases: {numeral(country.cases).format("0,0")}
            </div>
            <div className="info-recovered">
              Recovered: {numeral(country.recovered).format("0,0")}
            </div>
            <div className="info-deaths">
              Deaths: {numeral(country.deaths).format("0,0")}
            </div>
          </div>
        </Popup>
      </Circle>
    ));
  return (
    <div className="map">
      <LeafletMap center={props.center} zoom={props.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnmap(props.mapCountries)}
      </LeafletMap>
    </div>
  );
}

export default Map;
