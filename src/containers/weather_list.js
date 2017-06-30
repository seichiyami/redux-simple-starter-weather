import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const weather = cityData.list;

    const temps = weather.map(w => w.main.temp);
    const pressures = weather.map(w => w.main.pressure);
    const humidities = weather.map(w => w.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" units="K"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// { weather } ~ state, const weather = state.weather;
function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
