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
  const classes = getDefaultClasses(props.classes);
  const baseClass = classes.base + classes.elementSeparator;

  let labels = [];
  labels.push(maybeGetAxisTitle(props.options.axisX, 'x', baseClass));
  labels.push(maybeGetAxisTitle(props.options.axisY, 'y', baseClass));

  return (
    <figure className={`${classes.base} ${props.align}`}>
      <div className={`${baseClass}chart`}>
        <ChartistGraph {...props} />
        {labels}
      </div>
      {props.legend &&
        <ul className={`${baseClass}legend`}>
          {props.data.series.map((series, index) => (
            <li
              key={series.name}
              className={`${baseClass}legend-item legend-item-${index}`}
            >
              {series.name}
            </li>
          ))}
        </ul>
      }
      {props.caption &&
          <figcaption className={`${baseClass}caption ${classes.caption}`}>
            {props.caption}
          </figcaption>
      }
    </figure>
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
  align: 'alignright',
  classes: {},
};

/*
 * ## Pure Helper Functions
 */

/**
 * ### getDefaultClasses()
 * Returns an object with default values supplied where omitted, and any
 * unexpected properties dropped.
 *
 * Uses ES6 destructuring and defaults, which is much simpler than the old way
 * of using `var option = opts.option || 'default'`, and also avoids pulling in
 * a third-party tool like Lodash or jQuery just for merging objects. Neat!
 *
 * @param  {String} options.base              the base BEM-ish class name
 * @param  {String} options.elementSeparator  separates blocks from elements
 * @param  {String} options.modifierSeparator separates modifiers from elements
 * @param  {String} options.caption           optional class for the caption
 * @return {Object}                           classes, with defaults set
 */
function getDefaultClasses({
  base = 'drop-in-chart',
  elementSeparator = '__',
  modifierSeparator = '--',
  caption = '',
} = {}) {

  // All the hard work is already done; just return the values as an object.
  return {
    base: base,
    elementSeparator: elementSeparator,
    modifierSeparator: modifierSeparator,
    caption: caption,
  };
}

/**
 * ### maybeGetAxisTitle()
 * If an axis title was set, returns it in markup
 * @param  {Object} axis      the axisN object from the Chartist config
 * @param  {String} axisName  identifier for the axis (typically `x` or `y`)
 * @param  {String} baseClass the base class name for building BEM-ish classes
 * @return {Array}            an array of zero or one React elements
 */
function maybeGetAxisTitle(axis = {}, axisName, baseClass) {
  const classes = `${baseClass}axis-title axis-title-${axisName}`;
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
