import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export const NewView = () => (
  <div>
    <h4>New Route</h4>
    <p>You made it!</p>
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} />
  </div>
)

export default NewView
