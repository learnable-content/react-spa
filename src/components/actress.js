import React from 'react';
import {ActressList} from '../data/actress';
import { Link } from 'react-router-dom';

const Actress = (props) => {
    let actress = ActressList.map((actress) => {
      return (
        <div className="actor-container">
          <Link to={`/actors/${actress.url}`}><div className="actor-image" style={{ backgroundImage: "url(" + actress.img_src + ")" }}></div></Link>
          <h3>{actress.name}</h3>
        </div>
      );
    });

    return (
      <div className="main-content">
        <div><Link className="back" to="/">BACK</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
          {actress}
        </div>
      </div>
    );
}

export default Actress;