import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

import store from './redux/store';
import Routes from './routes/';

import './index.css';
import muiTheme from './config/theme';
import Layout from './components/Layout';


injectTapEventPlugin();

const Boomtown = () => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
