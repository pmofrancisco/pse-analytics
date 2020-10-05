import React from 'react';
import { Link } from 'react-router-dom';

export default ({ to, label }: { to: string, label: string }) => (
  <div>
    <Link to={to}>{label}</Link>
  </div>
);
