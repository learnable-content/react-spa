import React from 'react';
import {ActorList} from '../data/actors';
import Actor from './actor';
import Actors from './actors';
import { Route} from 'react-router-dom';

const ActorsContainer = (props) => {
    let actorUrl = ActorList.map((actor,i) => {
        return (
          <Route key={i} path={`/actors/${actor.url}`} render={() => <Actor name={actor.name} image={actor.profile_img} details={actor.description}/>} />
        );
      });

    return (
        <React.Fragment>
          <Route exact path="/actors" render={() => <Actors title="Best Actors"/>} />
          {actorUrl}
          {/* <Route path="/actors/hello" render={() => <Actor />} /> */}
        </React.Fragment>
    );
}

export default ActorsContainer;