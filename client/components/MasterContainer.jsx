import React, { Component } from 'react';
import XContainer from './XContainer.jsx';
import GetSpecialistArray from '../Data/dataLoader.js';

class MasterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: [],
    };
  }

  componentDidMount() {
    this.setState(() => {
      return { structure: GetSpecialistArray() };
    });
  }

  render() {
    return (
      <>
        <XContainer structure={this.state.structure} />
      </>
    );
  }
}

export default MasterContainer;
