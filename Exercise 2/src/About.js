import React from 'react';

function About(props) {
    return (
      <div>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    );
  }
  
  export default About;