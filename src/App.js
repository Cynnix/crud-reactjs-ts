import React from "react";
import {Route, Routes} from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={Adduser} exact />
        <Route path="/edit/:id" component={Edituser} exact />
      </Routes>
    </GlobalProvider>
  );
}

export default App;