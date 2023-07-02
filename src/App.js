import React from 'react';
//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import {BrowserRouter } from 'react-router-dom';
import RoutesIndex from './routes';

console.log('teste')


function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <RoutesIndex />
    </BrowserRouter>
  );
}

export default App;


 /*export default connect(state => ({
  user: state.users
}))(App);*/
