// # Front-End Initialization

import React from 'react';
import ReactDOM from 'react-dom';

import DropInChart from './js/components/DropInChart';

// Loads the stylesheet (via webpack)
// require('./css/main.css');

window.React = React;
window.ReactDOM = ReactDOM;
window.DropInChart = DropInChart;
