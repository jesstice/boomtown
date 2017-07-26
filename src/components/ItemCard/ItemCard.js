import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText,
    CardActions
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Gravatar from 'react-gravatar';
import * as moment from 'moment';

import './styles.css';

const ItemCard = ({ itemDetails }) => {
    let tags = itemDetails.tags.join(', ');

    return (
        <li className="itemCardWrapper">
            <Card>
                <CardMedia
                    className="card-media"
                    overlay={
                        (itemDetails.borrower) ?
                            <CardTitle subtitle={`Lent to ${itemDetails.borrower.fullname}`} />
                        : null
                    }
                >
                    <img src={itemDetails.imageUrl} alt={itemDetails.title} />
                </CardMedia>
                <Link to={`/profile/${itemDetails.itemOwner.id}`}>
                    <CardHeader
                        title={itemDetails.itemOwner.fullname}
                        subtitle={moment.unix(itemDetails.createdOn).fromNow()}
                        avatar={
                            <Gravatar email={itemDetails.itemOwner.email} default="monsterid" />
                        }
                    />
                </Link>
                <CardTitle title={itemDetails.title} subtitle={tags} />
                <CardText>{itemDetails.description}</CardText>
                <CardActions>
                    <RaisedButton label="Borrow" secondary={true} />
                </CardActions>
            </Card>
        </li>
    );
};

ItemCard.propTypes = {
    itemDetails: PropTypes.array
};

export default ItemCard;
