import React, { Component } from 'react';
// import { connect } from 'react-redux';
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
            <Profile
               userData={user}
            />
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
                id
            }
        }
    }
`;

// function mapStateToProps(state) {
//     return {
//         loading: state.profileReducer.loading
//         // userData: state.profileReducer.userData,
//         // itemsData: state.itemsReducer.itemsData,
//         // borrowedData: state.itemsReducer.borrowedData
//     };
// }

Profile.propTypes = {
    userData: PropTypes.array
};

export default graphql(fetchUserData, {
    options: (props) => ({ variables: { id: props.match.params.id } })
})(ProfileContainer);
// export default connect(mapStateToProps)(userDataList);
