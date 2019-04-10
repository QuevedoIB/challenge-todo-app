import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Error extends Component {
  render() {
    return (<div >
      <h1>SOMETHING WENT WRONG</h1>
      <Link to='/'>Go Back to Home</Link>
    </div>
    )
  }
}
