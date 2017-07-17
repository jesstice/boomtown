import React from 'react';

import {
    Card,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

import Gravatar from 'react-gravatar';

import './styles.css';

const ProfileCard = ({ userData, borrowedData, itemsData }) => {

    return (
        <div className="profileCardWrapper">
            <Card className="profileCard">
                <CardTitle
                    className="userData"
                    title={userData.fullName}
                    titleStyle={{fontSize: '2.5rem', marginBottom: '1rem'}}
                    subtitle={userData.bio}
                    subtitleStyle={{fontSize: '1rem', marginBottom: '1rem'}}
                />
                <CardText>
                    <p>Items Borrowed Coming Soon!</p>
                </CardText>
                <CardMedia className="userImage">
                    <Gravatar email={userData.email} default="monsterid" size={200} />
                </CardMedia>
            </Card>
        </div>
    );

}

    
export default ProfileCard;
