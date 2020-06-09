import React from 'react';
import {ActorList} from '../data/actors';
import { Link } from 'react-router-dom';

const Actors = (props) => {
    let actors = ActorList.map((actor) => {
      return (
        <div className="actor-container">
          <Link to={`/actors/${actor.url}`}><div className="actor-image" style={{ backgroundImage: "url(" + actor.img_src + ")" }}></div></Link>
          <h3>{actor.name}</h3>
        </div>
      );
    });

    return (
      <div className="main-content">
        <div><Link className="back" to="/">BACK</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
          {actors}
        </div>
      </div>
    );
}

export default Actors;