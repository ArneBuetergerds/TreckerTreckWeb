import React from 'react';
import ReactDOM from 'react-dom';
import InfoAction from '../src/actions/InfoAction';
import { AppContainer } from 'react-hot-loader';
import App from './App';

import SERVER_URL from './constants/server-url';

const tappElement = document.querySelector('.app');

/**
 * Renders a component as entry point of your application into the tapp element.
 * @param Component
 */
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        tappElement
    );
};

/**
 * The function waits till the chayns api is successfully loaded and
 * every additional functionality of it is ready to go,
 * renders the App component then
 * and finally initializes the ModeSwitch.
 * @return {Promise.<void>}
 */
async function init() {
    try {
        //console.debug('ServerUrl for current environment:', SERVER_URL);
        console.log("init");
        //await chayns.ready;
        const body = document.querySelector('body');
        body.height = window.height;
        console.log("mount");
        InfoAction.fetchTraffic.defer();
        InfoAction.fetchPosts.defer();
        console.log("init2");
        render(App);
        // use hot-module-replacement if available
        if (module.hot) {
            module.hot.accept('./App', () => render(App));
        }
        console.log("init3");
        /**
         * Initialize the ModeSwitch. The available modes are 'user mode' (default) and 'chayns® manager'.
         * You can specify content to display according to the current mode (see chayns 'mode' component).
         */

    } catch (err) {
        console.warn('no chayns environment found',err);
    }
}

init();
