import React from "react";
import uuid from "react-uuid";
// import {Box ,ListItem,ListItemButton,ListItemText} from '@mui/material';

// import {
//   FixedSizeList
// } from 'react-window';

class FeaturesList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  
  render(){
    return this.props.features.length > 0 ? (
      <div>
        <h1>Features</h1>
        <ul>
          {this.props.features.map(feature => (
            <li key={uuid()}>{feature}</li>
          ))}
        </ul>
      </div>
    ) : (
      <div>
        <h1>Features</h1>
        <p>No features</p>
      </div>
    );
  }
}

FeaturesList.defaultProps = {
  features: []
}

export default FeaturesList;