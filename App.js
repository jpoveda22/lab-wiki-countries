import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import './App.css';
import countries from './countries.json';
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  state = {
    countries// Same thing ===> countries:countries
  }



  showCountryLinks = () => {
    let countryList = [...this.state.countries]
    return countryList.map(eachCountry => {
      return <Link key={eachCountry.cca3} to={`/country-detail/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
    })
  }

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="list-group">
                  {this.showCountryLinks()}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**Invisible */}
        <Switch>
          <Route exact path="/country-detail/:hippopotamus" render={(props) => <CountryDetails {...props} cool="super fantastically amaxzing" countries={this.state.countries} />} />

        </Switch>
      </div>
    );
  }
}

export default App;