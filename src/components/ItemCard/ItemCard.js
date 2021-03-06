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
    const tags = itemDetails.tags.map(tag => tag.title).join(', ');

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
                    <img src={itemDetails.imageurl} alt={itemDetails.title} />
                </CardMedia>
                <Link to={`/profile/${itemDetails.itemowner.id}`}>
                    <CardHeader
                        title={itemDetails.itemowner.fullname}
                        subtitle={moment(itemDetails.createdon, 'YYYYMMDD').fromNow()}
                        avatar={
                            <Gravatar email={itemDetails.itemowner.email} default="monsterid" />
                        }
                    />
                </Link>
                <CardTitle title={itemDetails.title} subtitle={tags} />
                <CardText>{itemDetails.description}</CardText>
                <CardActions>
                    <RaisedButton label="Borrow" secondary />
                </CardActions>
            </Card>
        </li>
    );
};

ItemCard.propTypes = {
    itemDetails: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        imageurl: PropTypes.string,
        createdon: PropTypes.string,
        tags: PropTypes.array,
        itemowner: PropTypes.shape({
            id: PropTypes.string,
            fullname: PropTypes.string,
            email: PropTypes.string
        }),
        borrower: PropTypes.shape({
            fullname: PropTypes.string
        })
    }).isRequired
};

export default ItemCard;
