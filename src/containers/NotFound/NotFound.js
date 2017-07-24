import React from 'react';
import './styles.css';
import Cat from '../../images/not-found.png';

const NotFound = () => (
    <div className="lost-container">
        <img src={Cat} alt="lost cat" />
    </div>
);

export default NotFound;
