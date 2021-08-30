import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {

  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress={setProgress} key="home" pageSize={10} country="in" />
            </Route>
            <Route exact path="/business">
              <News setProgress={setProgress} key="business" pageSize={10} country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={setProgress} key="entertainment" pageSize={10} country="in" category="entertainment" />
            </Route>
            <Route exact path="/general">
              <News setProgress={setProgress} key="general" pageSize={10} country="in" category="general" />
            </Route>
            <Route exact path="/health">
              <News setProgress={setProgress} key="health" pageSize={10} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News setProgress={setProgress} key="science" pageSize={10} country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={setProgress} key="sports" pageSize={10} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={setProgress} key="technology" pageSize={10} country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
}
export default App