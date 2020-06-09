import React from 'react';
import {FilmsList} from '../data/films';

const Films = (props) => {
    let films = FilmsList.map((film) => {
      return (
        
        <div className="actor-container">
          <div className="film-image" style={{ backgroundImage: "url(" + film.img_src + ")" }}></div>
          <h3>{film.name}</h3>
        </div>
         
  
      );
    });
    return (
      <div className="main-content">
        <h2>{props.title}</h2>
        <div className="container">
          {films}    
        </div>
      </div>
    );
}

export default Films;