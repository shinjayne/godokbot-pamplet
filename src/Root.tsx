import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./HomePage/Home";
import ShareEventPage from "./ShareEventPage/ShareEventPage";

interface IProps {
}


const Root: React.FC<IProps> = () => {

  return (
    <>
      <HashRouter>
        <Switch>


          <Route path={'/share-congrats'}>
            <ShareEventPage  />
          </Route>

          <Route path={'/'}>
            <Home/>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};

export default Root;
