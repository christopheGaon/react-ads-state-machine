import Mimpact from './mimpact';
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * root class bootstrap the app
 * display a Mimpact component displaying an Mimpact ads
 */
ReactDOM.render(
<Mimpact width="350" height="130" media="opel_corsa.jpg" top="150"/>,
    document.querySelector('.root')
);
