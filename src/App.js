import React, { useEffect, useState } from "react"
import "./App.css"
import SearchAppBar from "./Components/Bar"
import Album from "./Components/Album"
// import Info from "./Components/CardMedia"



export default function App() {

  const [countries, setCountries] = useState([])
  useEffect(() => {
    let url = "https://linacountries.herokuapp.com";
    fetch(url)
      .then(data => data.json())
      .then(countries => setCountries(countries))
  },[countries])
  return (
    <div className="app">
      <SearchAppBar />

      {
        countries.length !== 0
          ?

          <Album data={countries} />

          : null
      }


    </div>
  )

}
  // componentDidMount() {

  //   let url = "https://linacountries.herokuapp.com";
  //   fetch(url)
  //     .then(data => data.json())
  //     .then(countries =>
  //       this.setState({ countries: countries })
  //     )
  // }


  // render() {

  //   return (


  //   )

  // }

// }


// export default App;




/* {

  this.state.countries.map((country, i) =>

    <div key={i}> HI {country.capital}</div>

  )

} */


/* <Info information={this.state.countries} /> */