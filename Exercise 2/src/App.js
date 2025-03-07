import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  var titleHome = "Home Page";
  var titleAbout = "About Us";
  var titleContact = "Contact Us";
  var descriptionHome = "Welcome to our website";
  var descriptionAbout = "We are passionate about delivering quality experiences";
  var descriptionContact = "Feel free to reach out to us via email or phone.";


  return (
    <div>
      <Home title = {titleHome} description= {descriptionHome}></Home>
      <About title = {titleAbout} description= {descriptionAbout}></About>
      <Contact title = {titleContact} description= {descriptionContact}></Contact>
    </div>
  );
}

export default App;
