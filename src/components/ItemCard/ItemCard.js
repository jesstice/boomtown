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
import * as moment from 'moment';

import './styles.css';

const ItemCard = ({ itemDetails }) => {

    let tags = itemDetails.tags.join(', ');
    const fakeId = 'LAi9TYWxgGhbjgHu1Sm6ZvB1tRP2';

    return (
        <li className="itemCardWrapper">
            <Card>
                <CardMedia
                    className="card-media"
                    overlay={
                        (!itemDetails.available) ?
                            <CardTitle subtitle={`Lent to ${itemDetails.borrower.fullName}`} />
                        : null
                    }
                >
                    <img src={itemDetails.imageUrl} alt={itemDetails.title} />
                </CardMedia>
                <Link to={`/profile/${itemDetails.itemOwner.id}`}>
                    <CardHeader
                        title={itemDetails.itemOwner.fullName}
                        subtitle={moment.unix(itemDetails.createdOn).fromNow()}
                        avatar={
                            <Gravatar email={itemDetails.itemOwner.email} default="monsterid" />
                        }
                    />
                </Link>
                <CardTitle title={itemDetails.title} subtitle={tags} />
                <CardText>{itemDetails.description}</CardText>
            </Card>
        </li>
    );
};

export default ItemCard;
