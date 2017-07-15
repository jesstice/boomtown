import React from 'react';
import { Link } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import Gravatar from 'react-gravatar';

import './styles.css';

const ItemCard = ({ itemDetails }) => (

    <li className="itemCardWrapper">
        <Card>
            <CardMedia>
                <img src={itemDetails.imageUrl} alt={itemDetails.title} />
            </CardMedia>
            <Link to={`/profile/${itemDetails.itemOwner.id}`}>
                <CardHeader
                    title={itemDetails.itemOwner.fullName}
                    subtitle="date"
                    avatar={
                        <Gravatar email={itemDetails.itemOwner.email} default="monsterid" />
                    }
                />
            </Link>
            <CardTitle title={itemDetails.title} subtitle={itemDetails.tags} />
            <CardText>{itemDetails.description}</CardText>
        </Card>
    </li>
);

export default ItemCard;
