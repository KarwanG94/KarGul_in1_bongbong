import React, { Fragment } from 'react';
import './App.css';
import UserTable from './frontEnd/UserTable';

function App() {

  return (
    <Fragment>
        <div className="main-container">
          <div className="mainHeader">
            <h1>BingBong</h1>
            <hr/>
          </div>
          <UserTable />

        </div>

    </Fragment>
  );
}

export default App;
