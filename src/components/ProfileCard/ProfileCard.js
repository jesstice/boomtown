import React from 'react';

import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';

import Gravatar from 'react-gravatar';

import './styles.css';

const ProfileCard = ({ userData }) => (
    <li className="itemCardWrapper">
        <Card>
            <CardHeader
                title={userData.fullName}
                subtitle={userData.bio}
                avatar={
                    <Gravatar email={userData.email} default="monsterid" />
                }
            />
            <CardText>{userData.description}</CardText>
        </Card>
    </li>
);

export default ProfileCard;
