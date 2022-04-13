import React from "react";
import {Route, Routes} from 'react-router-dom'
import { HOME } from './component/Home';
import { ADD_USER } from './component/Adduser';
import { EDIT_USER } from './component/Edituser';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" component={HOME} exact />
        <Route path="/add" component={ADD_USER} exact />
        <Route path="/edit/:id" component={EDIT_USER} exact />
      </Routes>
    </GlobalProvider>
  );
}

export default App;