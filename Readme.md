*This repository is a mirror of the [component](http://component.io) module [forbeslindesay/clock](http://github.com/forbeslindesay/clock). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/forbeslindesay-clock`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# clock

  A simple clock component, mainly for demonstration purposes

## Installation

```
component install ForbesLindesay/clock
```

## API

### Clock(elements, options)

  Turn elements into clocks:

### elements

  Elements can be a single element, a pseudo-array of elements or a css selector string.

### Options

  Options is an optional object and can have the following properties:

#### getDate

  Overrides the default method to get the current date (by default it returns now, you could make it return a different time zone).

#### formatDate

  Overrides the default format of the date, i.e. how a date is converted to a string.

## License

  MIT
