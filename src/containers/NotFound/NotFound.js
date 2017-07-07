import React from 'react';
import './styles.css';
import Cat from '../../images/not-found.png';

const NotFound = () => (
    <div>
        <h1>I think you are lost...</h1>
        <img src={Cat} alt="lost cat" />
    </div>
);

export default NotFound;
