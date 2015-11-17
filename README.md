# Drop-In Chart

This is a simple React component to wrap [`react-chartist`](https://npmjs.org/package/react-chartist) for use in shortcodes via Hugo.

No styles are included.

## Installation

This tool is intended to work as a drop-in component on an existing site. As such, your best bet is to use Bower:

    bower install jlengstorf/drop-in-chart --save

You can also clone the latest version directly from GitHub:

    git clone git@github.com:jlengstorf/drop-in-chart.git

Once it's downloaded, add the following to the page where you want this component to show up (make sure to check the path to the component):

    <script src="/bower_components/drop-in-chart/dist/drop-in-chart.min.js" async></script>

## Using the Component

Since this component accepts props, it can't be fully bundled. To work around
this, the bundle attaches `React`, `ReactDOM`, and the `DropInChart` component
to the `window` for later reference.

In its simplest form, use it like this:

    <div id="drop-in-chart"></div>
    <script>
      ReactDOM.render(
        React.createElement(DropInChart),
        document.getElementById('drop-in-chart')
      );
    </script>

Note that this doesn't use JSX. That's to avoid an additional dependency for
loading a single component.

### Configuring the Component

data

options

type

## Styling the Component

The component does not come with styles embedded, so you'll have to roll your own.

Example: [lengstorf.com drop-in chart stylesheet](https://github.com/jlengstorf/hugo-lengstorf/blob/master/source/styles/components/drop-in-chart.css) (written for use with [PostCSS](https://github.com/postcss/postcss)).
