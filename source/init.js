/*
 * # Front-End Initialization
 * First, we need `react` and `react-dom` loaded.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/*
 * Then we load the `DropInChart` component.
 */
import DropInChart from './js/components/DropInChart';

/*
 * To allow us to drop in the component wherever, we need to attach the libs to
 * the `window` so we can access they globally. Kind of shitty, but I can't
 * think of a simpler way to solve the problem.
 */
window.React = React;
window.ReactDOM = ReactDOM;
window.DropInChart = DropInChart;

/*
 * Worth noting is that nothing really happens (aside from polluting the global
 * namespace) in this script. Our goal here is to package up all the
 * dependencies in a way that makes it easy to drop a chart into any page.
 */
