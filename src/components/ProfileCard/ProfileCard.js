import React from 'react';

import {
    Card,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

import Gravatar from 'react-gravatar';

import './styles.css';

const ProfileCard = ({ userData }) => {

    return (
        <div className="profileCardWrapper">
            <Card className="profileCard">
                <CardTitle
                    className="userData"
                    title={userData.fullName}
                    titleStyle={{fontSize: '2.5rem', marginBottom: '1rem'}}
                    subtitle={userData.bio}
                    subtitleStyle={{fontSize: '1rem', marginBottom: '1rem'}}
                >
                    <ul>
                        <h2>Currently Borrowing:</h2>
                        {userData.borrowed.map((data) => (
                            <li className="listedItems">{data.title} from {data.itemOwner.fullName}</li>
                        ))}
                    </ul>
                </CardTitle>
                <CardText>
                    <ul className="userItemsData">
                        <li className="numberOfItems">{userData.items.length}</li>
                        <li className="listedItems">Items Shared</li>
                        <li className="numberOfItems">{userData.borrowed.length}</li>
                        <li className="listedItems">Items Borrowed</li>
                    </ul>
                </CardText>
                <CardMedia className="userImage">
                    <Gravatar email={userData.email} default="monsterid" size={200} />
                </CardMedia>
            </Card>
        </div>
    );

}


export default ProfileCard;
