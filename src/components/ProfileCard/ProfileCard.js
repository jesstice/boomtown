import React from 'react';

import {
    Card,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

import Gravatar from 'react-gravatar';

import './styles.css';

const ProfileCard = ({ userData, borrowedItems }) => (
    <div className="profileCardWrapper">
        <Card className="profileCard">
            <CardTitle
                className="userData"
                title={userData.fullName}
                subtitle={userData.bio}
            />
            <CardMedia className="userImage">
                <Gravatar email={userData.email} default="monsterid" size={200} />
            </CardMedia>
            <CardText>
                {borrowedItems}
            </CardText>
        </Card>
    </div>
);

export default ProfileCard;
