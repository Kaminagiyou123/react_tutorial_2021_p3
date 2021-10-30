import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='error-page section'>
      <h1>opps! it is a dead end</h1>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
    </section>
  );
};

export default Error;
