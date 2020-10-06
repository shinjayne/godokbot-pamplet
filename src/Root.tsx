import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./HomePage/Home";
import ShareEventPage from "./ShareEventPage/ShareEventPage";
import MoemzipPage from "./MoemzipPage/MoemzipPage";

interface IProps {
}


const Root: React.FC<IProps> = () => {

  return (
    <>
      <HashRouter>
        <Switch>

          <Route path={'/moemzip'} exact>
            <MoemzipPage/>
          </Route>
          <Route path={'/share-congrats'} exact>
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
