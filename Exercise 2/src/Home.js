import React from 'react';

function Home(props) {
    return (
      <div>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    );
  }
  
  export default Home;