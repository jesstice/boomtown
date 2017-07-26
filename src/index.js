import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import client from './config/apolloClient';
import { FirebaseAuth } from './config/firebase';
import { updateAuthState } from './redux/modules/auth';

import store from './redux/store';
import Routes from './routes/';

import './index.css';
import muiTheme from './config/theme';
import Layout from './components/Layout';

injectTapEventPlugin();

// TO DO:
FirebaseAuth.onAuthStateChanged(function(user) {
    if (user) {
        store.dispatch(updateAuthState(user.uid));
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // ...
    } else {
        store.dispatch(updateAuthState(false));
        // User is signed out.
        // ...
    }
});

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <ApolloProvider client={client} store={store}>
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </ApolloProvider>
    </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
