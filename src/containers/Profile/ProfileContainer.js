import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Loader from '../../components/Loader/';
import Profile from './Profile';

class ProfileContainer extends Component {

    render() {
        const { data: { loading, user } } = this.props;
        if (loading) return <Loader />;
        return (
            <Profile userData={user} />
        );
    }
}

const fetchUserData = gql`
    query fetchUserData($id: ID!) {
        user(id: $id) {
            fullName
            bio
            email
            borrowed {
                title
                itemOwner {
                    fullName
                }
            }
            items {
                title
                itemOwner {
                    id
                    fullName
                    email
                }
                imageUrl
                borrower {
                    fullName
                }
                createdOn
                description
                tags
            }
        }
    }
`;

ProfileContainer.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        userData: PropTypes.object,
    }).isRequired,
};

export default graphql(fetchUserData, {
    options: (props) => ({ variables: { id: props.match.params.id } })
})(ProfileContainer);
