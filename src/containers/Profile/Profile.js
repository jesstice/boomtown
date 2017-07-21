import React from 'react';

import ProfileCard from '../../components/ProfileCard/';
import ItemCardList from '../../components/ItemCardList/';

import './styles.css';

const Profile = ({ userData, itemsData }) => (
    <div className="profileWrapper">
        <ProfileCard userData={userData} />
        <ItemCardList itemsData={itemsData} />
    </div>
);

export default Profile;
