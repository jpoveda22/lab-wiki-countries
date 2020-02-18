import React, { Component } from 'react';
import countries from './countries.json';

class CountryDetails extends Component {
    state ={
countries
    }


    findDetails = () => {
        console.log('country detail cca3:',this.props.match.params.hippopotamus, this.props.countries)
        let theCountry = this.props.countries.find(eachCountry => {
            return eachCountry.cca3 === this.props.match.params.hippopotamus
        })
        console.log(theCountry)
        return theCountry

    }



    render() {
        let theCountry = this.findDetails()
        return (
            <div className="col-7">

            <h1>{theCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{theCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{theCountry.area}km
           <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Costa Rica</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}

export default CountryDetails;