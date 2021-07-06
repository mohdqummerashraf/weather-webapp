import React from 'react';
import './search.css' 

function Search(props) {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <div className="wrap-search">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h2>mo<span>JAX</span></h2>     
            </div>
            <div className="col-7">
            <form action="" method="get" onSubmit={fetchWeather}>
                <input type="text" onChange={(e) => updateCity(e.target.value)}  />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;