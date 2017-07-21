import React from 'react';

import ProfileCard from '../../components/ProfileCard/';
import ItemCardList from '../../components/ItemCardList/';

import './styles.css';

const Profile = ({ userData }) => (
    <div className="profileWrapper">
        <ProfileCard userData={userData} />
        <ItemCardList itemsData={userData.items} />
    </div>
);

export default Profile;
