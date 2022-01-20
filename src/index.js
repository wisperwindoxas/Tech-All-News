import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Users from './context'

function Apps(){

  const [isUser, setIsUser]  = React.useState(false)

  return(
    <>
      <BrowserRouter>
        <Users.Provider value={{isUser, setIsUser}}>
          <App />
        </Users.Provider>
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Apps/>
  </React.StrictMode>,
  document.getElementById('root')
);


