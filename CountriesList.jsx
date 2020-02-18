import React, { Component } from 'react';
import {Link} from 'react-router-dom'




class CountriesList extends Component {
    displayAllCountries = () => {
        return this.props.countries.map(eachCountry => {
          return (
            <Link
              key={eachCountry.cca3}
              className="list-group-item list-group-item-action"
              to={"/countries/" + eachCountry.cca3}>
              <span role="img">{eachCountry.flag}</span> {eachCountry.name.common}
            </Link>
          );
        })
      }
      render() {
        return (
          <div>
            {/* You can do display the countries with or without a function */}
            {/* { this.props.countries.map(eachCountry => {
            return (
              <Link
                key={eachCountry.cca3}
                className="list-group-item list-group-item-action"
                to={"/" + eachCountry.cca3}>
                <span role="img">{eachCountry.flag}</span> {eachCountry.name.common}
              </Link>
            );
          })} */}
          {this.displayAllCountries()}
          </div>
        );
      }
    }
    
    export default CountriesList;