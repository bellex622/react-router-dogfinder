import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogNames }) {

  return (
    <div>
      <h1>Find a dog!!!</h1>
      {dogNames.map(dogName => <Link key={dogName} to="/dogs/:{dogName}" > {dogName}</Link>)
      }
    </div >
  );

}

export default Nav;
