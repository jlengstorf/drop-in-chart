/*
 * # DropInChart.js
 * A React component that accepts data in its props to create charts via
 * Chartist. Styles are housed in the `lengstorf` theme, not in this mini-app.
 */
'use strict';

/*
 * ## Dependencies
 */
import React from 'react';
import ChartistGraph from 'react-chartist';

/*
 * ## Stateless Component
 */
function DropInChart(props) {

  let labels = [];
  labels.push(maybeGetAxisTitle(props.options.axisX, 'x'));
  labels.push(maybeGetAxisTitle(props.options.axisY, 'y'));

  return (
    <div className="drop-in-chart aligncenter">
      <div className="drop-in-chart__chart">
        <ChartistGraph {...props} />
        {labels}
      </div>
      {props.legend &&
        <ul className="drop-in-chart__legend">
          {props.data.series.map((series, index) => (
            <li
              key={series.name}
              className={`drop-in-chart__legend-item legend-item-${index}`}
            >
              {series.name}
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

/*
 * ### Default Properties
 * For a full list of available properties, check out
 * the Chartist documentation.
 * @see http://gionkunz.github.io/chartist-js/api-documentation.html
 */
DropInChart.defaultProps = {
  data: {
    labels: ['one', 'two', 'three', 'four', 'five', 'six'],
    series: [
      {
        name: 'Thing One',
        data: [0,10,20,30,40,50],
      },
      {
        name: 'Thing Two',
        data: [50,40,10,30,20,0],
      },
    ],
  },
  options: {
    stretch: true,
    fullWidth: true,
  },
  type: 'Line',
  legend: true,
};

/*
 * ## Pure Helper Functions
 */

function maybeGetAxisTitle(axis = {}, axisName) {
  const classes = `drop-in-chart__axis-title axis-title-${axisName}`;
  let title = [];

  if (!!axis.title) {
    title.push(
      <span
        key={axis.title}
        className={classes}
      >
        {axis.title}
      </span>
    );
  }

  return title;
}

/*
 * ## Export the Component
 */
export default DropInChart;
