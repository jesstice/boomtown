import React from 'react';
import './styles.css';

import ProfileCard from '../../components/ProfileCard/';
import ItemCardList from '../../components/ItemCardList/';

const Profile = ({ userData, itemsData }) => (
    <div>
        <p>This works</p>
        <ProfileCard userData={userData} />
        <ItemCardList itemsData={itemsData} />
    </div>
);

export default Profile;
