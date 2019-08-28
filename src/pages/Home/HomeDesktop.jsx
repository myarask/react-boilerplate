import React from 'react';
import { Card, CardContent, Typography, TextField } from '@material-ui/core';

const Thing = () => (
  <div
    style={{
      width: '150px',
      background: '#EC985A',
      color: 'white',
      margin: '0 1rem 1rem 0',
      display: 'inline-block',
      height: `${Math.random() * (700 - 200) + 200}px`,
    }}
  >
    1{' '}
  </div>
);

const HomeDesktop = props => (
  <div
    style={{
      background: '#eee',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '300px auto',
    }}
  >
    <div style={{ padding: '1rem' }}>
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
    <div style={{ columns: '6 200px', columnGap: '1rem', overflowY: 'scroll' }}>
      <Thing />
      <Thing />
      <Thing />
      <Thing />
      <Thing />
      <Thing />
      <Thing />
      <Thing />
      <Thing />
    </div>
  </div>
);

export default HomeDesktop;
