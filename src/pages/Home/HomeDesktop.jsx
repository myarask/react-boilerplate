import React from 'react';
import { Card, CardContent, Typography, TextField } from '@material-ui/core';

const HomeDesktop = props => (
  <div style={{ background: '#eee', height: '100%', display: 'flex' }}>
    <div style={{ width: '300px', padding: '1rem' }}>
      <Card>
        <CardContent>
          <Typography>Find your shit!</Typography>
          <TextField
            label="Keywords"
            fullWidth
            margin="normal"
            type="search"
            onChange={props.onChange}
            value={props.search}
            name="search"
          />
        </CardContent>
      </Card>
    </div>
    <div>fdsfd</div>
  </div>
);

export default HomeDesktop;
