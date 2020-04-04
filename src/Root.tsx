import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from "./App";

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
            <App/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Root;
