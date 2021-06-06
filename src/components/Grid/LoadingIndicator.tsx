import React from 'react';
import Spinner from '../Spinner';
import Row from './Row';

const LoadingIndicator = () => (
  <Row>
    <Spinner />
  </Row>
);

export default LoadingIndicator;
