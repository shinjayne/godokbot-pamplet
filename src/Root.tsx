import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./HomePage/Home";

interface IProps {
}


const Root: React.FC<IProps> = () => {

  return (
    <>
      <BrowserRouter>
        <Switch>


          <Route path={'/share-congrats'}>
            helloWorld
          </Route>

          <Route path={'/'}>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Root;
