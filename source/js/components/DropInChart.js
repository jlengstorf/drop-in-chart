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
  return (
    <div className="drop-in-chart aligncenter">
      <ChartistGraph {...props} />
      <ul className="drop-in-chart__legend">
        {props.data.series.map(series => (
          <li key={series.name}>{series.name}</li>
        ))}
      </ul>
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
};

/*
 * ## Export the Component
 */
export default DropInChart;
