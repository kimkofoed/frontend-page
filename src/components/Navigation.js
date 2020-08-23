import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/recipe'>Recipe link</Link>
    </div>
);

export default Navigation;
