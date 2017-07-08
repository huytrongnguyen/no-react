(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

var _extReact2 = _interopRequireDefault(_extReact);

var _viewport = require('./components/viewport/viewport');

var _viewport2 = _interopRequireDefault(_viewport);

var _master = require('./components/slides/master');

var _master2 = _interopRequireDefault(_master);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_extReact2.default.launch(_react2.default.createElement(_viewport2.default, null));

},{"./components/slides/master":8,"./components/viewport/viewport":19,"babel-polyfill":"babel-polyfill","ext-react":"ext-react","react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "content" },
        _react2.default.createElement(
          "h1",
          null,
          "What make AngularJS so popular"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "Two-way data binding"
          ),
          _react2.default.createElement(
            "li",
            null,
            "Templates"
          ),
          _react2.default.createElement(
            "li",
            null,
            "Model-View-Whatever"
          ),
          _react2.default.createElement(
            "li",
            null,
            "Dependency injection"
          ),
          _react2.default.createElement(
            "li",
            null,
            "Open Source"
          ),
          _react2.default.createElement(
            "li",
            null,
            "Comprehensive"
          ),
          _react2.default.createElement(
            "li",
            null,
            "Testable"
          ),
          _react2.default.createElement(
            "li",
            null,
            "..."
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "https://angular.io/" },
              "https://angular.io/"
            )
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'content' },
        _react2.default.createElement(
          'h1',
          null,
          'Asynchronous Programming in JS'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Asynchronous programming deals with the needs to run several tasks (pieces of code) in parallel, in the same time'
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { textAlign: 'center' } },
          _react2.default.createElement('img', { src: '/img/sync-and-async.png', style: { width: '50%', height: '50%' } })
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'In JS the asynchronous programming is based on callbacks',
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'You run a background task and pass a callback function'
              )
            )
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "content" },
        _react2.default.createElement(
          "h1",
          null,
          "Nested Callbacks"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "Also called as \"callback hell\""
          )
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "var allTheCustomerThings;" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "$('#getCustomer').click(function (cust) {" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  var id = $('#cust-id').val();" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  getCustomer(id, function (cust) {" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "    allTheCustomerThings = cust;" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "    getContacts(id, function (contacts) {" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "      allTheCustomerThings.contacts = contacts;" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "      getOrders(id, function (orders) {" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "        allTheCustomerThings.orders = orders;" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "        getAccountsRecv(id, function (ar) {" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "          allTheCustomerThings.ar = ar;" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "          // OK - we got all the data, NOW WHAT?! :-)" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "        });" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "      });" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "    });" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  });" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "});" } })
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "content" },
        _react2.default.createElement(
          "h1",
          null,
          "Component Life Cycle"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "Mounting",
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "constructor"
              ),
              _react2.default.createElement(
                "li",
                null,
                "componentWillMount"
              ),
              _react2.default.createElement(
                "li",
                null,
                "componentDidMount"
              )
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            "Updating",
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "shouldComponentUpdate"
              ),
              _react2.default.createElement(
                "li",
                null,
                "componentWillUpdate"
              ),
              _react2.default.createElement(
                "li",
                null,
                "componentDidUpdate"
              )
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            "Unmounting",
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "componentWillUnmount"
              )
            )
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderDonutChart();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'content' },
        _react2.default.createElement(
          'h1',
          null,
          'D3'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'A JavaScript library for manipulating documents based on data.'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://d3js.org/' },
              'https://d3js.org/'
            )
          )
        ),
        _react2.default.createElement('div', { id: 'donut' })
      );
    }
  }, {
    key: 'renderDonutChart',
    value: function renderDonutChart() {
      var dataset = [{ label: 'Abulia', count: 10 }, { label: 'Betelgeuse', count: 20 }, { label: 'Cantaloupe', count: 30 }, { label: 'Dijkstra', count: 40 }],
          width = 360,
          height = 360,
          radius = Math.min(width, height) / 2,
          donutWidth = 75,
          color = d3.scaleOrdinal(d3.schemeCategory20b),
          svg = d3.select('#donut').append('svg').attr('width', width).attr('height', height).append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')'),
          arc = d3.arc().innerRadius(radius - donutWidth).outerRadius(radius),
          pie = d3.pie().value(function (d) {
        return d.count;
      }).sort(null),
          path = svg.selectAll('path').data(pie(dataset)).enter().append('path').attr('d', arc).attr('fill', function (d, i) {
        return color(d.data.label);
      }),
          legendRectSize = 18,
          legendSpacing = 4,
          legend = svg.selectAll('.legend').data(color.domain()).enter().append('g').attr('class', 'legend').attr('transform', function (d, i) {
        var height = legendRectSize + legendSpacing,
            offset = height * color.domain().length / 2,
            horz = -2 * legendRectSize,
            vert = i * height - offset;
        return 'translate(' + horz + ',' + vert + ')';
      }),
          tooltip = d3.select('#donut').append('div').attr('class', 'tooltip');
      legend.append('rect').attr('width', legendRectSize).attr('height', legendRectSize).style('fill', color).style('stroke', color);
      legend.append('text').attr('x', legendRectSize + legendSpacing).attr('y', legendRectSize - legendSpacing).text(function (d) {
        return d;
      });
      tooltip.append('div').attr('class', 'label');
      tooltip.append('div').attr('class', 'count');
      tooltip.append('div').attr('class', 'percent');
      path.on('mouseover', function (d) {
        var total = d3.sum(dataset.map(function (d) {
          return d.count;
        })),
            percent = Math.round(1000 * d.data.count / total) / 10;
        tooltip.select('.label').html(d.data.label);
        tooltip.select('.count').html(d.data.count);
        tooltip.select('.percent').html(percent + '%');
        tooltip.style('position', 'absolute').style('display', 'block');
      });
      path.on('mousemove', function (d) {
        return tooltip.style('top', d3.event.layerY + 10 + 'px').style('left', d3.event.layerX + 10 + 'px');
      });
      path.on('mouseout', function () {
        return tooltip.style('display', 'none');
      });
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"d3":"d3","react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'content' },
        _react2.default.createElement(
          'h1',
          null,
          'Higher Order Components'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Higher Order Function',
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Functions that operate on other functions, either by taking them as arguments or by returning them'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            'Higher Order Component',
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Functions that takes a component and returns a new component.'
              )
            )
          )
        ),
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            { style: { fontSize: '1rem' } },
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "function higherOrderComponent(WrappedComponent, selectData) {" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "  return class extends React.Component {" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "    constructor(props) {" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "      super(props);" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "      this.handleChange = this.handleChange.bind(this);" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "      this.state = {" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "        data: selectData(DataSource, props)" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "      };" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "    }" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "    componentDidMount() {" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "      DataSource.addChangeListener(this.handleChange);" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "    }" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "    componentWillUnmount() {" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "      DataSource.removeChangeListener(this.handleChange);" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "    }" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "    handleChange() {" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "      this.setState(() => ({ data: selectData(DataSource, this.props) }));" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "    }" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "    render() {" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "      return <WrappedComponent data={this.state.data} {...this.props} />" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "    }" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "  };" } }),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "}" } }),
            _react2.default.createElement(
              'div',
              null,
              '\xA0'
            ),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "const dataSource = [];" } }),
            _react2.default.createElement(
              'div',
              null,
              '\xA0'
            ),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "const EnhancedComponent = higherOrderComponent(WrappedComponent, dataSource);" } })
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

var _master = require('./master.view');

var _master2 = _interopRequireDefault(_master);

var _title = require('./title');

var _title2 = _interopRequireDefault(_title);

var _tableOfContents = require('./table-of-contents');

var _tableOfContents2 = _interopRequireDefault(_tableOfContents);

var _react3 = require('./react');

var _react4 = _interopRequireDefault(_react3);

var _componentLifeCycle = require('./component-life-cycle');

var _componentLifeCycle2 = _interopRequireDefault(_componentLifeCycle);

var _higherOrderComponents = require('./higher-order-components');

var _higherOrderComponents2 = _interopRequireDefault(_higherOrderComponents);

var _angular = require('./angular');

var _angular2 = _interopRequireDefault(_angular);

var _async = require('./async');

var _async2 = _interopRequireDefault(_async);

var _callbackHell = require('./callback-hell');

var _callbackHell2 = _interopRequireDefault(_callbackHell);

var _promise = require('./promise');

var _promise2 = _interopRequireDefault(_promise);

var _promiseSyntax = require('./promise-syntax');

var _promiseSyntax2 = _interopRequireDefault(_promiseSyntax);

var _reactiveProgramming = require('./reactive-programming');

var _reactiveProgramming2 = _interopRequireDefault(_reactiveProgramming);

var _rxjs = require('./rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

var _d = require('./d3');

var _d2 = _interopRequireDefault(_d);

var _qa = require('./qa');

var _qa2 = _interopRequireDefault(_qa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = (_dec = (0, _extReact.Route)('/:page'), _dec2 = (0, _extReact.Component)({
  view: _master2.default
}), _dec(_class = _dec2(_class = function _default() {
  _classCallCheck(this, _default);

  this.slides = [_title2.default, _tableOfContents2.default, _react4.default, _componentLifeCycle2.default, _higherOrderComponents2.default, _angular2.default, _rxjs2.default, _d2.default, _qa2.default];
}) || _class) || _class);

exports.default = _default;

},{"./angular":2,"./async":3,"./callback-hell":4,"./component-life-cycle":5,"./d3":6,"./higher-order-components":7,"./master.view":9,"./promise":11,"./promise-syntax":10,"./qa":12,"./react":13,"./reactive-programming":14,"./rxjs":15,"./table-of-contents":17,"./title":18,"ext-react":"ext-react","react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

var _slide = require('./slide');

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          vm = _props.vm,
          params = _props.params,
          currentPage = parseInt(params.page || 0);


      return _react2.default.createElement(
        _slide2.default,
        { currentPage: currentPage, totalPage: vm.slides.length, loadPage: this.loadPage },
        _react2.default.createElement(vm.slides[currentPage])
      );
    }
  }, {
    key: 'loadPage',
    value: function loadPage(pageNumber) {
      window.location.hash = '/' + pageNumber;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"./slide":16,"ext-react":"ext-react","react":"react"}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "content" },
        _react2.default.createElement(
          "h1",
          null,
          "JS Promises - Syntax"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "Declare:",
            _react2.default.createElement(
              "pre",
              null,
              _react2.default.createElement(
                "code",
                null,
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "let p = new Promise(function(resolve, reject) {" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  // Do an async task and then resolve or reject" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  if (/* operation successful */) {" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "    resolve('Success!');" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  } else { /* operation failed */" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "    reject('Failure!');" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  }" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "});" } })
              )
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            "Use:",
            _react2.default.createElement(
              "pre",
              null,
              _react2.default.createElement(
                "code",
                null,
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "p.then(function(result) {" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  /* process the result (when the promise is resolved) */" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "}).catch(function(error) {" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  /* handle the error (when the promise is rejected) */" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "});" } })
              )
            )
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "content" },
        _react2.default.createElement(
          "h1",
          null,
          "Promises in JS"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "A promise is an object holding an asynchronous operation",
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "A result which may be available now, or in the future, or never"
              )
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            "Promises may be in one of these states:",
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "Pending \u2013 operation still running (unfinished)"
              ),
              _react2.default.createElement(
                "li",
                null,
                "Fulfilled \u2013 operation finished (and the result is available)"
              ),
              _react2.default.createElement(
                "li",
                null,
                "Failed \u2013 operation is failed (and an error is available)"
              )
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            "Promises in JS use the Promise object"
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "title" },
        _react2.default.createElement(
          "h1",
          null,
          "Q & A"
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "content" },
        _react2.default.createElement(
          "h1",
          null,
          "ReactJS"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "A JavaScript library for building user interfaces to solve the problem",
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "How can we build large applications with data that changes over time?"
              )
            )
          )
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "import React, {Component} from 'react';" } }),
            _react2.default.createElement(
              "div",
              null,
              "\xA0"
            ),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "export default class extends Component {" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  constructor(props) {" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "    super(props);" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  }" } }),
            _react2.default.createElement(
              "div",
              null,
              "\xA0"
            ),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  render() {" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "    return &lt;h1&gt;Hello World!!!&lt;/h1&gt;" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  }" } }),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "}" } })
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "content" },
        _react2.default.createElement(
          "h1",
          null,
          "Reactive Programming"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "Reactive (adaptive) applications are capable to:",
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "React to events",
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    "the event-driven nature enables the following qualities."
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                "React to load",
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    "focus on scalability rather than single-user performance."
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                "React to failure",
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    "build resilient systems with the ability to recover at all levels."
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                "React to users",
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    "combine the above traits for an interactive user experience."
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "content" },
        _react2.default.createElement(
          "h1",
          null,
          "Reactive Extensions Library for JavaScript"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "A set of libraries for composing asynchronous and event-based programs using observable sequences and fluent query operators."
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "http://reactivex.io/rxjs/" },
              "http://reactivex.io/rxjs/"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            "This is the story of how Netflix solved\u200B BIG async problems\u200B by thinking differently about\u200B Events.\u200B",
            _react2.default.createElement(
              "pre",
              null,
              _react2.default.createElement(
                "code",
                null,
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "let getElementDrags  = elmt =>​" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  elmt.mouseDowns.​" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "    map(mouseDown =>" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "      document.mouseMoves.​" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "        takeUntil(document.mouseUps))." } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "    concatAll();​" } }),
                _react2.default.createElement(
                  "div",
                  null,
                  "\xA0"
                ),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "getElementDrags(image).​" } }),
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: "  forEach(pos => image.position = pos);​" } })
              )
            )
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          currentPage = _props.currentPage,
          totalPage = _props.totalPage,
          loadPage = _props.loadPage,
          children = _props.children;

      return _react2.default.createElement(
        _extReact.Container,
        { className: 'slides ' + className },
        this.props.children,
        _react2.default.createElement(
          'aside',
          { className: 'controls' },
          _react2.default.createElement('button', { className: 'navigate left', disabled: currentPage === 0, onClick: function onClick() {
              return loadPage(currentPage - 1);
            } }),
          _react2.default.createElement('button', { className: 'navigate right', disabled: currentPage === totalPage - 1, onClick: function onClick() {
              return loadPage(currentPage + 1);
            } }),
          _react2.default.createElement('button', { className: 'navigate up', disabled: true }),
          _react2.default.createElement('button', { className: 'navigate down', disabled: true })
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"ext-react":"ext-react","react":"react"}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "content" },
        _react2.default.createElement(
          "h1",
          null,
          "Table of Contents"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "ReactJS"
          ),
          _react2.default.createElement(
            "li",
            null,
            "React versus Angular"
          ),
          _react2.default.createElement(
            "li",
            null,
            "Reactive Programming with RxJS"
          ),
          _react2.default.createElement(
            "li",
            null,
            "React with D3"
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "title" },
        _react2.default.createElement(
          "h1",
          null,
          "Not Only React"
        ),
        _react2.default.createElement(
          "h2",
          null,
          "Presenter: Huy Trong Nguyen"
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _extReact.Container,
        null,
        _react2.default.createElement(_extReact.HashRouter, null)
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"ext-react":"ext-react","react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzL2FuZ3VsYXIuanN4Iiwic3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzL2FzeW5jLmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3NsaWRlcy9jYWxsYmFjay1oZWxsLmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3NsaWRlcy9jb21wb25lbnQtbGlmZS1jeWNsZS5qc3giLCJzcmMvanMvY29tcG9uZW50cy9zbGlkZXMvZDMuanN4Iiwic3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzL2hpZ2hlci1vcmRlci1jb21wb25lbnRzLmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3NsaWRlcy9tYXN0ZXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9zbGlkZXMvbWFzdGVyLnZpZXcuanN4Iiwic3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzL3Byb21pc2Utc3ludGF4LmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3NsaWRlcy9wcm9taXNlLmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3NsaWRlcy9xYS5qc3giLCJzcmMvanMvY29tcG9uZW50cy9zbGlkZXMvcmVhY3QuanN4Iiwic3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzL3JlYWN0aXZlLXByb2dyYW1taW5nLmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3NsaWRlcy9yeGpzLmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS5qc3giLCJzcmMvanMvY29tcG9uZW50cy9zbGlkZXMvdGFibGUtb2YtY29udGVudHMuanN4Iiwic3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzL3RpdGxlLmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG1CQUFLLE1BQUwsQ0FBWSx1REFBWjs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdXO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBUyxXQUFVLFNBQW5CO0FBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURLO0FBRUw7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVBGO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVJGO0FBU0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGdCQUFHLE1BQUsscUJBQVI7QUFBQTtBQUFBO0FBQUo7QUFURjtBQUZLLE9BQVA7QUFjRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHVztBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVMsV0FBVSxTQUFuQjtBQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUZLO0FBS0w7QUFBQTtBQUFBLFlBQUssT0FBTyxFQUFDLFdBQVUsUUFBWCxFQUFaO0FBQWtDLGlEQUFLLEtBQUkseUJBQVQsRUFBbUMsT0FBTyxFQUFDLE9BQU0sS0FBUCxFQUFhLFFBQU8sS0FBcEIsRUFBMUM7QUFBbEMsU0FMSztBQU1MO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBRkY7QUFERjtBQU5LLE9BQVA7QUFlRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHVztBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVMsV0FBVSxTQUFuQjtBQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUZLO0FBS0w7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSwyQkFBVCxFQUE5QixHQURGO0FBRUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSwyQ0FBVCxFQUE5QixHQUZGO0FBR0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxpQ0FBVCxFQUE5QixHQUhGO0FBSUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxxQ0FBVCxFQUE5QixHQUpGO0FBS0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxrQ0FBVCxFQUE5QixHQUxGO0FBTUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSwyQ0FBVCxFQUE5QixHQU5GO0FBT0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxpREFBVCxFQUE5QixHQVBGO0FBUUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSx5Q0FBVCxFQUE5QixHQVJGO0FBU0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSwrQ0FBVCxFQUE5QixHQVRGO0FBVUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSw2Q0FBVCxFQUE5QixHQVZGO0FBV0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSx5Q0FBVCxFQUE5QixHQVhGO0FBWUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSx1REFBVCxFQUE5QixHQVpGO0FBYUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxhQUFULEVBQTlCLEdBYkY7QUFjRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLFdBQVQsRUFBOUIsR0FkRjtBQWVFLG1EQUFLLHlCQUF5QixFQUFDLFFBQVEsU0FBVCxFQUE5QixHQWZGO0FBZ0JFLG1EQUFLLHlCQUF5QixFQUFDLFFBQVEsT0FBVCxFQUE5QixHQWhCRjtBQWlCRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLEtBQVQsRUFBOUI7QUFqQkY7QUFERjtBQUxLLE9BQVA7QUEyQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR1c7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFTLFdBQVUsU0FBbkI7QUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREs7QUFFTDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUZGLFdBREY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUZGLFdBVEY7QUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFGRjtBQWpCRjtBQUZLLE9BQVA7QUEyQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CSDs7OztBQUNBOztJQUFZLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQUdVO0FBQ2xCLFdBQUssZ0JBQUw7QUFDRDs7OzZCQUVRO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBUyxXQUFVLFNBQW5CO0FBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURLO0FBRUw7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGdCQUFHLE1BQUssbUJBQVI7QUFBQTtBQUFBO0FBQUo7QUFGRixTQUZLO0FBTUwsK0NBQUssSUFBRyxPQUFSO0FBTkssT0FBUDtBQVFEOzs7dUNBRWtCO0FBQ2pCLFVBQU0sVUFBVSxDQUNSLEVBQUUsT0FBTyxRQUFULEVBQW1CLE9BQU8sRUFBMUIsRUFEUSxFQUVSLEVBQUUsT0FBTyxZQUFULEVBQXVCLE9BQU8sRUFBOUIsRUFGUSxFQUdSLEVBQUUsT0FBTyxZQUFULEVBQXVCLE9BQU8sRUFBOUIsRUFIUSxFQUlSLEVBQUUsT0FBTyxVQUFULEVBQXFCLE9BQU8sRUFBNUIsRUFKUSxDQUFoQjtBQUFBLFVBTU0sUUFBUSxHQU5kO0FBQUEsVUFPTSxTQUFTLEdBUGY7QUFBQSxVQVFNLFNBQVMsS0FBSyxHQUFMLENBQVMsS0FBVCxFQUFnQixNQUFoQixJQUEwQixDQVJ6QztBQUFBLFVBU00sYUFBYSxFQVRuQjtBQUFBLFVBVU0sUUFBUSxHQUFHLFlBQUgsQ0FBZ0IsR0FBRyxpQkFBbkIsQ0FWZDtBQUFBLFVBV00sTUFBTSxHQUFHLE1BQUgsQ0FBVSxRQUFWLEVBQ0csTUFESCxDQUNVLEtBRFYsRUFFRyxJQUZILENBRVEsT0FGUixFQUVpQixLQUZqQixFQUdHLElBSEgsQ0FHUSxRQUhSLEVBR2tCLE1BSGxCLEVBSUcsTUFKSCxDQUlVLEdBSlYsRUFLRyxJQUxILENBS1EsV0FMUixFQUtxQixlQUFnQixRQUFRLENBQXhCLEdBQThCLEdBQTlCLEdBQXFDLFNBQVMsQ0FBOUMsR0FBbUQsR0FMeEUsQ0FYWjtBQUFBLFVBaUJNLE1BQU0sR0FBRyxHQUFILEdBQ0csV0FESCxDQUNlLFNBQVMsVUFEeEIsRUFFRyxXQUZILENBRWUsTUFGZixDQWpCWjtBQUFBLFVBb0JNLE1BQU0sR0FBRyxHQUFILEdBQ0csS0FESCxDQUNTO0FBQUEsZUFBSyxFQUFFLEtBQVA7QUFBQSxPQURULEVBRUcsSUFGSCxDQUVRLElBRlIsQ0FwQlo7QUFBQSxVQXVCTSxPQUFPLElBQUksU0FBSixDQUFjLE1BQWQsRUFDSSxJQURKLENBQ1MsSUFBSSxPQUFKLENBRFQsRUFFSSxLQUZKLEdBR0ksTUFISixDQUdXLE1BSFgsRUFJSSxJQUpKLENBSVMsR0FKVCxFQUljLEdBSmQsRUFLSSxJQUxKLENBS1MsTUFMVCxFQUtpQixVQUFDLENBQUQsRUFBSSxDQUFKO0FBQUEsZUFBVSxNQUFNLEVBQUUsSUFBRixDQUFPLEtBQWIsQ0FBVjtBQUFBLE9BTGpCLENBdkJiO0FBQUEsVUE2Qk0saUJBQWlCLEVBN0J2QjtBQUFBLFVBOEJNLGdCQUFnQixDQTlCdEI7QUFBQSxVQStCTSxTQUFTLElBQUksU0FBSixDQUFjLFNBQWQsRUFDSSxJQURKLENBQ1MsTUFBTSxNQUFOLEVBRFQsRUFFSSxLQUZKLEdBR0ksTUFISixDQUdXLEdBSFgsRUFJSSxJQUpKLENBSVMsT0FKVCxFQUlrQixRQUpsQixFQUtJLElBTEosQ0FLUyxXQUxULEVBS3NCLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUMzQixZQUFNLFNBQVMsaUJBQWlCLGFBQWhDO0FBQUEsWUFDTSxTQUFVLFNBQVMsTUFBTSxNQUFOLEdBQWUsTUFBeEIsR0FBaUMsQ0FEakQ7QUFBQSxZQUVNLE9BQU8sQ0FBQyxDQUFELEdBQUssY0FGbEI7QUFBQSxZQUdNLE9BQU8sSUFBSSxNQUFKLEdBQWEsTUFIMUI7QUFJQSxlQUFPLGVBQWUsSUFBZixHQUFzQixHQUF0QixHQUE0QixJQUE1QixHQUFtQyxHQUExQztBQUNELE9BWEosQ0EvQmY7QUFBQSxVQTJDTSxVQUFVLEdBQUcsTUFBSCxDQUFVLFFBQVYsRUFDRyxNQURILENBQ1UsS0FEVixFQUVHLElBRkgsQ0FFUSxPQUZSLEVBRWlCLFNBRmpCLENBM0NoQjtBQThDQSxhQUFPLE1BQVAsQ0FBYyxNQUFkLEVBQXNCLElBQXRCLENBQTJCLE9BQTNCLEVBQW9DLGNBQXBDLEVBQW9ELElBQXBELENBQXlELFFBQXpELEVBQW1FLGNBQW5FLEVBQW1GLEtBQW5GLENBQXlGLE1BQXpGLEVBQWlHLEtBQWpHLEVBQXdHLEtBQXhHLENBQThHLFFBQTlHLEVBQXdILEtBQXhIO0FBQ0EsYUFBTyxNQUFQLENBQWMsTUFBZCxFQUFzQixJQUF0QixDQUEyQixHQUEzQixFQUFnQyxpQkFBaUIsYUFBakQsRUFBZ0UsSUFBaEUsQ0FBcUUsR0FBckUsRUFBMEUsaUJBQWlCLGFBQTNGLEVBQTBHLElBQTFHLENBQStHO0FBQUEsZUFBSyxDQUFMO0FBQUEsT0FBL0c7QUFDQSxjQUFRLE1BQVIsQ0FBZSxLQUFmLEVBQXNCLElBQXRCLENBQTJCLE9BQTNCLEVBQW9DLE9BQXBDO0FBQ0EsY0FBUSxNQUFSLENBQWUsS0FBZixFQUFzQixJQUF0QixDQUEyQixPQUEzQixFQUFvQyxPQUFwQztBQUNBLGNBQVEsTUFBUixDQUFlLEtBQWYsRUFBc0IsSUFBdEIsQ0FBMkIsT0FBM0IsRUFBb0MsU0FBcEM7QUFDQSxXQUFLLEVBQUwsQ0FBUSxXQUFSLEVBQXFCLGFBQUs7QUFDeEIsWUFBTSxRQUFRLEdBQUcsR0FBSCxDQUFPLFFBQVEsR0FBUixDQUFZO0FBQUEsaUJBQUssRUFBRSxLQUFQO0FBQUEsU0FBWixDQUFQLENBQWQ7QUFBQSxZQUNNLFVBQVUsS0FBSyxLQUFMLENBQVcsT0FBTyxFQUFFLElBQUYsQ0FBTyxLQUFkLEdBQXNCLEtBQWpDLElBQTBDLEVBRDFEO0FBRUEsZ0JBQVEsTUFBUixDQUFlLFFBQWYsRUFBeUIsSUFBekIsQ0FBOEIsRUFBRSxJQUFGLENBQU8sS0FBckM7QUFDQSxnQkFBUSxNQUFSLENBQWUsUUFBZixFQUF5QixJQUF6QixDQUE4QixFQUFFLElBQUYsQ0FBTyxLQUFyQztBQUNBLGdCQUFRLE1BQVIsQ0FBZSxVQUFmLEVBQTJCLElBQTNCLENBQWdDLFVBQVUsR0FBMUM7QUFDQSxnQkFBUSxLQUFSLENBQWMsVUFBZCxFQUEwQixVQUExQixFQUFzQyxLQUF0QyxDQUE0QyxTQUE1QyxFQUF1RCxPQUF2RDtBQUNELE9BUEQ7QUFRQSxXQUFLLEVBQUwsQ0FBUSxXQUFSLEVBQXFCO0FBQUEsZUFBSyxRQUFRLEtBQVIsQ0FBYyxLQUFkLEVBQXNCLEdBQUcsS0FBSCxDQUFTLE1BQVQsR0FBa0IsRUFBbkIsR0FBeUIsSUFBOUMsRUFBb0QsS0FBcEQsQ0FBMEQsTUFBMUQsRUFBbUUsR0FBRyxLQUFILENBQVMsTUFBVCxHQUFrQixFQUFuQixHQUF5QixJQUEzRixDQUFMO0FBQUEsT0FBckI7QUFDQSxXQUFLLEVBQUwsQ0FBUSxVQUFSLEVBQW9CO0FBQUEsZUFBTSxRQUFRLEtBQVIsQ0FBYyxTQUFkLEVBQXlCLE1BQXpCLENBQU47QUFBQSxPQUFwQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdXO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBUyxXQUFVLFNBQW5CO0FBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURLO0FBRUw7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFGRixXQURGO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFGRjtBQVBGLFNBRks7QUFnQkw7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sT0FBTyxFQUFDLFVBQVMsTUFBVixFQUFiO0FBQ0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSwrREFBVCxFQUE5QixHQURGO0FBRUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSwwQ0FBVCxFQUE5QixHQUZGO0FBR0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSwwQkFBVCxFQUE5QixHQUhGO0FBSUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxxQkFBVCxFQUE5QixHQUpGO0FBS0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSx5REFBVCxFQUE5QixHQUxGO0FBTUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxzQkFBVCxFQUE5QixHQU5GO0FBT0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSw2Q0FBVCxFQUE5QixHQVBGO0FBUUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxVQUFULEVBQTlCLEdBUkY7QUFTRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLE9BQVQsRUFBOUIsR0FURjtBQVVFLG1EQUFLLHlCQUF5QixFQUFDLFFBQVEsMkJBQVQsRUFBOUIsR0FWRjtBQVdFLG1EQUFLLHlCQUF5QixFQUFDLFFBQVEsd0RBQVQsRUFBOUIsR0FYRjtBQVlFLG1EQUFLLHlCQUF5QixFQUFDLFFBQVEsT0FBVCxFQUE5QixHQVpGO0FBYUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSw4QkFBVCxFQUE5QixHQWJGO0FBY0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSwyREFBVCxFQUE5QixHQWRGO0FBZUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxPQUFULEVBQTlCLEdBZkY7QUFnQkUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxzQkFBVCxFQUE5QixHQWhCRjtBQWlCRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLDRFQUFULEVBQTlCLEdBakJGO0FBa0JFLG1EQUFLLHlCQUF5QixFQUFDLFFBQVEsT0FBVCxFQUE5QixHQWxCRjtBQW1CRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLGdCQUFULEVBQTlCLEdBbkJGO0FBb0JFLG1EQUFLLHlCQUF5QixFQUFDLFFBQVEsMEVBQVQsRUFBOUIsR0FwQkY7QUFxQkUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxPQUFULEVBQTlCLEdBckJGO0FBc0JFLG1EQUFLLHlCQUF5QixFQUFDLFFBQVEsTUFBVCxFQUE5QixHQXRCRjtBQXVCRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLEdBQVQsRUFBOUIsR0F2QkY7QUF3QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRjtBQXlCRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLHdCQUFULEVBQTlCLEdBekJGO0FBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkY7QUEyQkUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSwrRUFBVCxFQUE5QjtBQTNCRjtBQURGO0FBaEJLLE9BQVA7QUFnREQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BESDs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7dUJBRUMscUJBQU0sUUFBTixDLFVBQ0EseUJBQVU7QUFDVDtBQURTLENBQVYsQywrQkFJQyxvQkFBYztBQUFBOztBQUNaLE9BQUssTUFBTCxHQUFjLDBMQUFkO0FBV0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0g7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR1c7QUFBQSxtQkFDZ0IsS0FBSyxLQURyQjtBQUFBLFVBQ0MsRUFERCxVQUNDLEVBREQ7QUFBQSxVQUNLLE1BREwsVUFDSyxNQURMO0FBQUEsVUFFRCxXQUZDLEdBRWEsU0FBUyxPQUFPLElBQVAsSUFBZSxDQUF4QixDQUZiOzs7QUFJUCxhQUFPO0FBQUE7QUFBQSxVQUFPLGFBQWEsV0FBcEIsRUFBaUMsV0FBVyxHQUFHLE1BQUgsQ0FBVSxNQUF0RCxFQUE4RCxVQUFVLEtBQUssUUFBN0U7QUFDSix3QkFBTSxhQUFOLENBQW9CLEdBQUcsTUFBSCxDQUFVLFdBQVYsQ0FBcEI7QUFESSxPQUFQO0FBR0Q7Ozs2QkFFUSxVLEVBQVk7QUFDbkIsYUFBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLE1BQU0sVUFBN0I7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHVztBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVMsV0FBVSxTQUFuQjtBQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsdURBQUsseUJBQXlCLEVBQUMsUUFBUSxpREFBVCxFQUE5QixHQURGO0FBRUUsdURBQUsseUJBQXlCLEVBQUMsUUFBUSxrREFBVCxFQUE5QixHQUZGO0FBR0UsdURBQUsseUJBQXlCLEVBQUMsUUFBUSxxQ0FBVCxFQUE5QixHQUhGO0FBSUUsdURBQUsseUJBQXlCLEVBQUMsUUFBUSwwQkFBVCxFQUE5QixHQUpGO0FBS0UsdURBQUsseUJBQXlCLEVBQUMsUUFBUSxtQ0FBVCxFQUE5QixHQUxGO0FBTUUsdURBQUsseUJBQXlCLEVBQUMsUUFBUSx5QkFBVCxFQUE5QixHQU5GO0FBT0UsdURBQUsseUJBQXlCLEVBQUMsUUFBUSxLQUFULEVBQTlCLEdBUEY7QUFRRSx1REFBSyx5QkFBeUIsRUFBQyxRQUFRLEtBQVQsRUFBOUI7QUFSRjtBQURGO0FBRkYsV0FERjtBQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHVEQUFLLHlCQUF5QixFQUFDLFFBQVEsMkJBQVQsRUFBOUIsR0FERjtBQUVFLHVEQUFLLHlCQUF5QixFQUFDLFFBQVEsMkRBQVQsRUFBOUIsR0FGRjtBQUdFLHVEQUFLLHlCQUF5QixFQUFDLFFBQVEsNEJBQVQsRUFBOUIsR0FIRjtBQUlFLHVEQUFLLHlCQUF5QixFQUFDLFFBQVEseURBQVQsRUFBOUIsR0FKRjtBQUtFLHVEQUFLLHlCQUF5QixFQUFDLFFBQVEsS0FBVCxFQUE5QjtBQUxGO0FBREY7QUFGRjtBQWhCRjtBQUZLLE9BQVA7QUFnQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR1c7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFTLFdBQVUsU0FBbkI7QUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREs7QUFFTDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUZGLFdBREY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUZGLFdBUEY7QUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkY7QUFGSyxPQUFQO0FBb0JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdXO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBUyxXQUFVLE9BQW5CO0FBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLLE9BQVA7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdXO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBUyxXQUFVLFNBQW5CO0FBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURLO0FBRUw7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFGRjtBQURGLFNBRks7QUFVTDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLHlDQUFULEVBQTlCLEdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFHRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLDBDQUFULEVBQTlCLEdBSEY7QUFJRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLHdCQUFULEVBQTlCLEdBSkY7QUFLRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLG1CQUFULEVBQTlCLEdBTEY7QUFNRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLEtBQVQsRUFBOUIsR0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQVFFLG1EQUFLLHlCQUF5QixFQUFDLFFBQVEsY0FBVCxFQUE5QixHQVJGO0FBU0UsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxnREFBVCxFQUE5QixHQVRGO0FBVUUsbURBQUsseUJBQXlCLEVBQUMsUUFBUSxLQUFULEVBQTlCLEdBVkY7QUFXRSxtREFBSyx5QkFBeUIsRUFBQyxRQUFRLEdBQVQsRUFBOUI7QUFYRjtBQURGO0FBVkssT0FBUDtBQTBCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHVztBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVMsV0FBVSxTQUFuQjtBQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFGRixlQURGO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFGRixlQVBGO0FBYUU7QUFBQTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFGRixlQWJGO0FBbUJFO0FBQUE7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBRkY7QUFuQkY7QUFGRjtBQURGO0FBRkssT0FBUDtBQWtDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHVztBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVMsV0FBVSxTQUFuQjtBQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxnQkFBRyxNQUFLLDJCQUFSO0FBQUE7QUFBQTtBQUFKLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHVEQUFLLHlCQUF5QixFQUFDLFFBQVEsaUNBQVQsRUFBOUIsR0FERjtBQUVFLHVEQUFLLHlCQUF5QixFQUFDLFFBQVEscUJBQVQsRUFBOUIsR0FGRjtBQUdFLHVEQUFLLHlCQUF5QixFQUFDLFFBQVEsc0JBQVQsRUFBOUIsR0FIRjtBQUlFLHVEQUFLLHlCQUF5QixFQUFDLFFBQVEsNkJBQVQsRUFBOUIsR0FKRjtBQUtFLHVEQUFLLHlCQUF5QixFQUFDLFFBQVEsd0NBQVQsRUFBOUIsR0FMRjtBQU1FLHVEQUFLLHlCQUF5QixFQUFDLFFBQVEsbUJBQVQsRUFBOUIsR0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFRRSx1REFBSyx5QkFBeUIsRUFBQyxRQUFRLDBCQUFULEVBQTlCLEdBUkY7QUFTRSx1REFBSyx5QkFBeUIsRUFBQyxRQUFRLDBDQUFULEVBQTlCO0FBVEY7QUFERjtBQUZGO0FBSEY7QUFGSyxPQUFQO0FBdUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkg7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdXO0FBQUEsbUJBQzJELEtBQUssS0FEaEU7QUFBQSxVQUNDLFNBREQsVUFDQyxTQUREO0FBQUEsVUFDWSxXQURaLFVBQ1ksV0FEWjtBQUFBLFVBQ3lCLFNBRHpCLFVBQ3lCLFNBRHpCO0FBQUEsVUFDb0MsUUFEcEMsVUFDb0MsUUFEcEM7QUFBQSxVQUM4QyxRQUQ5QyxVQUM4QyxRQUQ5Qzs7QUFFUCxhQUFPO0FBQUE7QUFBQSxVQUFXLHVCQUFxQixTQUFoQztBQUNKLGFBQUssS0FBTCxDQUFXLFFBRFA7QUFFTDtBQUFBO0FBQUEsWUFBTyxXQUFVLFVBQWpCO0FBQ0Usb0RBQVEsV0FBVSxlQUFsQixFQUFrQyxVQUFVLGdCQUFnQixDQUE1RCxFQUErRCxTQUFTO0FBQUEscUJBQU0sU0FBUyxjQUFjLENBQXZCLENBQU47QUFBQSxhQUF4RSxHQURGO0FBRUUsb0RBQVEsV0FBVSxnQkFBbEIsRUFBbUMsVUFBVSxnQkFBZ0IsWUFBWSxDQUF6RSxFQUE0RSxTQUFTO0FBQUEscUJBQU0sU0FBUyxjQUFjLENBQXZCLENBQU47QUFBQSxhQUFyRixHQUZGO0FBR0Usb0RBQVEsV0FBVSxhQUFsQixFQUFnQyxjQUFoQyxHQUhGO0FBSUUsb0RBQVEsV0FBVSxlQUFsQixFQUFrQyxjQUFsQztBQUpGO0FBRkssT0FBUDtBQVNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR1c7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFTLFdBQVUsU0FBbkI7QUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREs7QUFFTDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFGSyxPQUFQO0FBU0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHVztBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVMsV0FBVSxPQUFuQjtBQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSyxPQUFQO0FBSUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JIOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHVztBQUNQLGFBQU87QUFBQTtBQUFBO0FBQ0w7QUFESyxPQUFQO0FBR0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuaW1wb3J0IE1hc3RlciBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVzL21hc3Rlcic7XG5cblJleHQubGF1bmNoKDxWaWV3cG9ydCAvPik7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICA8aDE+V2hhdCBtYWtlIEFuZ3VsYXJKUyBzbyBwb3B1bGFyPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlR3by13YXkgZGF0YSBiaW5kaW5nPC9saT5cbiAgICAgICAgPGxpPlRlbXBsYXRlczwvbGk+XG4gICAgICAgIDxsaT5Nb2RlbC1WaWV3LVdoYXRldmVyPC9saT5cbiAgICAgICAgPGxpPkRlcGVuZGVuY3kgaW5qZWN0aW9uPC9saT5cbiAgICAgICAgPGxpPk9wZW4gU291cmNlPC9saT5cbiAgICAgICAgPGxpPkNvbXByZWhlbnNpdmU8L2xpPlxuICAgICAgICA8bGk+VGVzdGFibGU8L2xpPlxuICAgICAgICA8bGk+Li4uPC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2FuZ3VsYXIuaW8vXCI+aHR0cHM6Ly9hbmd1bGFyLmlvLzwvYT48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxoMT5Bc3luY2hyb25vdXMgUHJvZ3JhbW1pbmcgaW4gSlM8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+QXN5bmNocm9ub3VzIHByb2dyYW1taW5nIGRlYWxzIHdpdGggdGhlIG5lZWRzIHRvIHJ1biBzZXZlcmFsIHRhc2tzIChwaWVjZXMgb2YgY29kZSkgaW4gcGFyYWxsZWwsIGluIHRoZSBzYW1lIHRpbWU8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT48aW1nIHNyYz1cIi9pbWcvc3luYy1hbmQtYXN5bmMucG5nXCIgc3R5bGU9e3t3aWR0aDonNTAlJyxoZWlnaHQ6JzUwJSd9fSAvPjwvZGl2PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgSW4gSlMgdGhlIGFzeW5jaHJvbm91cyBwcm9ncmFtbWluZyBpcyBiYXNlZCBvbiBjYWxsYmFja3NcbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+WW91IHJ1biBhIGJhY2tncm91bmQgdGFzayBhbmQgcGFzcyBhIGNhbGxiYWNrIGZ1bmN0aW9uPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxoMT5OZXN0ZWQgQ2FsbGJhY2tzPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkFsc28gY2FsbGVkIGFzIFwiY2FsbGJhY2sgaGVsbFwiPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcInZhciBhbGxUaGVDdXN0b21lclRoaW5ncztcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIkKCcjZ2V0Q3VzdG9tZXInKS5jbGljayhmdW5jdGlvbiAoY3VzdCkge1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgdmFyIGlkID0gJCgnI2N1c3QtaWQnKS52YWwoKTtcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgIGdldEN1c3RvbWVyKGlkLCBmdW5jdGlvbiAoY3VzdCkge1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICBhbGxUaGVDdXN0b21lclRoaW5ncyA9IGN1c3Q7XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICAgIGdldENvbnRhY3RzKGlkLCBmdW5jdGlvbiAoY29udGFjdHMpIHtcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgICBhbGxUaGVDdXN0b21lclRoaW5ncy5jb250YWN0cyA9IGNvbnRhY3RzO1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICAgIGdldE9yZGVycyhpZCwgZnVuY3Rpb24gKG9yZGVycykge1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICAgICAgYWxsVGhlQ3VzdG9tZXJUaGluZ3Mub3JkZXJzID0gb3JkZXJzO1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICAgICAgZ2V0QWNjb3VudHNSZWN2KGlkLCBmdW5jdGlvbiAoYXIpIHtcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgICAgICAgYWxsVGhlQ3VzdG9tZXJUaGluZ3MuYXIgPSBhcjtcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgICAgICAgLy8gT0sgLSB3ZSBnb3QgYWxsIHRoZSBkYXRhLCBOT1cgV0hBVD8hIDotKVwifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICAgICAgfSk7XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICAgICAgfSk7XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICAgIH0pO1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgfSk7XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwifSk7XCJ9fSAvPlxuICAgICAgICA8L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICA8L3NlY3Rpb24+XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgPGgxPkNvbXBvbmVudCBMaWZlIEN5Y2xlPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIE1vdW50aW5nXG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPmNvbnN0cnVjdG9yPC9saT5cbiAgICAgICAgICAgIDxsaT5jb21wb25lbnRXaWxsTW91bnQ8L2xpPlxuICAgICAgICAgICAgPGxpPmNvbXBvbmVudERpZE1vdW50PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgVXBkYXRpbmdcbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+c2hvdWxkQ29tcG9uZW50VXBkYXRlPC9saT5cbiAgICAgICAgICAgIDxsaT5jb21wb25lbnRXaWxsVXBkYXRlPC9saT5cbiAgICAgICAgICAgIDxsaT5jb21wb25lbnREaWRVcGRhdGU8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBVbm1vdW50aW5nXG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPmNvbXBvbmVudFdpbGxVbm1vdW50PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlbmRlckRvbnV0Q2hhcnQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgPGgxPkQzPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBtYW5pcHVsYXRpbmcgZG9jdW1lbnRzIGJhc2VkIG9uIGRhdGEuPC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QzanMub3JnL1wiPmh0dHBzOi8vZDNqcy5vcmcvPC9hPjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBpZD1cImRvbnV0XCI+PC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICB9XG5cbiAgcmVuZGVyRG9udXRDaGFydCgpIHtcbiAgICBjb25zdCBkYXRhc2V0ID0gW1xuICAgICAgICAgICAgeyBsYWJlbDogJ0FidWxpYScsIGNvdW50OiAxMCB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0JldGVsZ2V1c2UnLCBjb3VudDogMjAgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdDYW50YWxvdXBlJywgY291bnQ6IDMwIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnRGlqa3N0cmEnLCBjb3VudDogNDAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgd2lkdGggPSAzNjAsXG4gICAgICAgICAgaGVpZ2h0ID0gMzYwLFxuICAgICAgICAgIHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMixcbiAgICAgICAgICBkb251dFdpZHRoID0gNzUsXG4gICAgICAgICAgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkyMGIpLFxuICAgICAgICAgIHN2ZyA9IGQzLnNlbGVjdCgnI2RvbnV0JylcbiAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgICAgICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAod2lkdGggLyAyKSArICAnLCcgKyAoaGVpZ2h0IC8gMikgKyAnKScpLFxuICAgICAgICAgIGFyYyA9IGQzLmFyYygpXG4gICAgICAgICAgICAgICAgICAuaW5uZXJSYWRpdXMocmFkaXVzIC0gZG9udXRXaWR0aClcbiAgICAgICAgICAgICAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpLFxuICAgICAgICAgIHBpZSA9IGQzLnBpZSgpXG4gICAgICAgICAgICAgICAgICAudmFsdWUoZCA9PiBkLmNvdW50KVxuICAgICAgICAgICAgICAgICAgLnNvcnQobnVsbCksXG4gICAgICAgICAgcGF0aCA9IHN2Zy5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YShwaWUoZGF0YXNldCkpXG4gICAgICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZCcsIGFyYylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAoZCwgaSkgPT4gY29sb3IoZC5kYXRhLmxhYmVsKSksXG4gICAgICAgICAgbGVnZW5kUmVjdFNpemUgPSAxOCxcbiAgICAgICAgICBsZWdlbmRTcGFjaW5nID0gNCxcbiAgICAgICAgICBsZWdlbmQgPSBzdmcuc2VsZWN0QWxsKCcubGVnZW5kJylcbiAgICAgICAgICAgICAgICAgICAgICAuZGF0YShjb2xvci5kb21haW4oKSlcbiAgICAgICAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gbGVnZW5kUmVjdFNpemUgKyBsZWdlbmRTcGFjaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gIGhlaWdodCAqIGNvbG9yLmRvbWFpbigpLmxlbmd0aCAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3J6ID0gLTIgKiBsZWdlbmRSZWN0U2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnQgPSBpICogaGVpZ2h0IC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGhvcnogKyAnLCcgKyB2ZXJ0ICsgJyknO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgIHRvb2x0aXAgPSBkMy5zZWxlY3QoJyNkb251dCcpXG4gICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpO1xuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKS5hdHRyKCd3aWR0aCcsIGxlZ2VuZFJlY3RTaXplKS5hdHRyKCdoZWlnaHQnLCBsZWdlbmRSZWN0U2l6ZSkuc3R5bGUoJ2ZpbGwnLCBjb2xvcikuc3R5bGUoJ3N0cm9rZScsIGNvbG9yKTtcbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JykuYXR0cigneCcsIGxlZ2VuZFJlY3RTaXplICsgbGVnZW5kU3BhY2luZykuYXR0cigneScsIGxlZ2VuZFJlY3RTaXplIC0gbGVnZW5kU3BhY2luZykudGV4dChkID0+IGQpO1xuICAgIHRvb2x0aXAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdsYWJlbCcpO1xuICAgIHRvb2x0aXAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdjb3VudCcpO1xuICAgIHRvb2x0aXAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdwZXJjZW50Jyk7XG4gICAgcGF0aC5vbignbW91c2VvdmVyJywgZCA9PiB7XG4gICAgICBjb25zdCB0b3RhbCA9IGQzLnN1bShkYXRhc2V0Lm1hcChkID0+IGQuY291bnQpKSxcbiAgICAgICAgICAgIHBlcmNlbnQgPSBNYXRoLnJvdW5kKDEwMDAgKiBkLmRhdGEuY291bnQgLyB0b3RhbCkgLyAxMDtcbiAgICAgIHRvb2x0aXAuc2VsZWN0KCcubGFiZWwnKS5odG1sKGQuZGF0YS5sYWJlbCk7XG4gICAgICB0b29sdGlwLnNlbGVjdCgnLmNvdW50JykuaHRtbChkLmRhdGEuY291bnQpO1xuICAgICAgdG9vbHRpcC5zZWxlY3QoJy5wZXJjZW50JykuaHRtbChwZXJjZW50ICsgJyUnKTtcbiAgICAgIHRvb2x0aXAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJykuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICB9KTtcbiAgICBwYXRoLm9uKCdtb3VzZW1vdmUnLCBkID0+IHRvb2x0aXAuc3R5bGUoJ3RvcCcsIChkMy5ldmVudC5sYXllclkgKyAxMCkgKyAncHgnKS5zdHlsZSgnbGVmdCcsIChkMy5ldmVudC5sYXllclggKyAxMCkgKyAncHgnKSk7XG4gICAgcGF0aC5vbignbW91c2VvdXQnLCAoKSA9PiB0b29sdGlwLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKSk7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxoMT5IaWdoZXIgT3JkZXIgQ29tcG9uZW50czwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBIaWdoZXIgT3JkZXIgRnVuY3Rpb25cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+RnVuY3Rpb25zIHRoYXQgb3BlcmF0ZSBvbiBvdGhlciBmdW5jdGlvbnMsIGVpdGhlciBieSB0YWtpbmcgdGhlbSBhcyBhcmd1bWVudHMgb3IgYnkgcmV0dXJuaW5nIHRoZW08L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBIaWdoZXIgT3JkZXIgQ29tcG9uZW50XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkZ1bmN0aW9ucyB0aGF0IHRha2VzIGEgY29tcG9uZW50IGFuZCByZXR1cm5zIGEgbmV3IGNvbXBvbmVudC48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGUgc3R5bGU9e3tmb250U2l6ZTonMXJlbSd9fT5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcImZ1bmN0aW9uIGhpZ2hlck9yZGVyQ29tcG9uZW50KFdyYXBwZWRDb21wb25lbnQsIHNlbGVjdERhdGEpIHtcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICAgICAgc3VwZXIocHJvcHMpO1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgICB0aGlzLnN0YXRlID0ge1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICAgICAgZGF0YTogc2VsZWN0RGF0YShEYXRhU291cmNlLCBwcm9wcylcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgICB9O1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICB9XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICAgIGNvbXBvbmVudERpZE1vdW50KCkge1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICAgIERhdGFTb3VyY2UuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5oYW5kbGVDaGFuZ2UpO1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICB9XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICAgIERhdGFTb3VyY2UucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5oYW5kbGVDaGFuZ2UpO1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICB9XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICAgIGhhbmRsZUNoYW5nZSgpIHtcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGRhdGE6IHNlbGVjdERhdGEoRGF0YVNvdXJjZSwgdGhpcy5wcm9wcykgfSkpO1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICB9XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICAgIHJlbmRlcigpIHtcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB7Li4udGhpcy5wcm9wc30gLz5cIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgfVwifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgfTtcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCJ9XCJ9fSAvPlxuICAgICAgICAgIDxkaXY+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCJjb25zdCBkYXRhU291cmNlID0gW107XCJ9fSAvPlxuICAgICAgICAgIDxkaXY+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCJjb25zdCBFbmhhbmNlZENvbXBvbmVudCA9IGhpZ2hlck9yZGVyQ29tcG9uZW50KFdyYXBwZWRDb21wb25lbnQsIGRhdGFTb3VyY2UpO1wifX0gLz5cbiAgICAgICAgPC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IE1hc3RlclZpZXcgZnJvbSAnLi9tYXN0ZXIudmlldyc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgVGFibGVPZkNvbnRlbnRzIGZyb20gJy4vdGFibGUtb2YtY29udGVudHMnO1xuaW1wb3J0IFJlYWN0SlMgZnJvbSAnLi9yZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TGlmZUN5Y2xlIGZyb20gJy4vY29tcG9uZW50LWxpZmUtY3ljbGUnO1xuaW1wb3J0IEhpZ2hlck9yZGVyQ29tcG9uZW50cyBmcm9tICcuL2hpZ2hlci1vcmRlci1jb21wb25lbnRzJztcbmltcG9ydCBBbmd1bGFyIGZyb20gJy4vYW5ndWxhcic7XG5pbXBvcnQgQXN5bmMgZnJvbSAnLi9hc3luYyc7XG5pbXBvcnQgQ2FsbGJhY2tIZWxsIGZyb20gJy4vY2FsbGJhY2staGVsbCc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuL3Byb21pc2UnO1xuaW1wb3J0IFByb21pc2VTeW50YXggZnJvbSAnLi9wcm9taXNlLXN5bnRheCc7XG5pbXBvcnQgUmVhY3RpdmVQcm9ncmFtbWluZyBmcm9tICcuL3JlYWN0aXZlLXByb2dyYW1taW5nJztcbmltcG9ydCBSeEpTIGZyb20gJy4vcnhqcyc7XG5pbXBvcnQgRDMgZnJvbSAnLi9kMyc7XG5pbXBvcnQgUUEgZnJvbSAnLi9xYSc7XG5cbkBSb3V0ZSgnLzpwYWdlJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiBNYXN0ZXJWaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNsaWRlcyA9IFtcbiAgICAgIFRpdGxlLFxuICAgICAgVGFibGVPZkNvbnRlbnRzLFxuICAgICAgUmVhY3RKUyxcbiAgICAgIENvbXBvbmVudExpZmVDeWNsZSxcbiAgICAgIEhpZ2hlck9yZGVyQ29tcG9uZW50cyxcbiAgICAgIEFuZ3VsYXIsXG4gICAgICBSeEpTLFxuICAgICAgRDMsXG4gICAgICBRQVxuICAgIF1cbiAgfVxufSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtDb250YWluZXIsIGJpbmR9IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdm0sIHBhcmFtcyB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXJyZW50UGFnZSA9IHBhcnNlSW50KHBhcmFtcy5wYWdlIHx8IDApO1xuXG4gICAgcmV0dXJuIDxTbGlkZSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IHRvdGFsUGFnZT17dm0uc2xpZGVzLmxlbmd0aH0gbG9hZFBhZ2U9e3RoaXMubG9hZFBhZ2V9PlxuICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQodm0uc2xpZGVzW2N1cnJlbnRQYWdlXSl9XG4gICAgPC9TbGlkZT5cbiAgfVxuXG4gIGxvYWRQYWdlKHBhZ2VOdW1iZXIpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJyArIHBhZ2VOdW1iZXI7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxoMT5KUyBQcm9taXNlcyAtIFN5bnRheDwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBEZWNsYXJlOlxuICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCJsZXQgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1wifX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgIC8vIERvIGFuIGFzeW5jIHRhc2sgYW5kIHRoZW4gcmVzb2x2ZSBvciByZWplY3RcIn19IC8+XG4gICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICBpZiAoLyogb3BlcmF0aW9uIHN1Y2Nlc3NmdWwgKi8pIHtcIn19IC8+XG4gICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICAgIHJlc29sdmUoJ1N1Y2Nlc3MhJyk7XCJ9fSAvPlxuICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgfSBlbHNlIHsgLyogb3BlcmF0aW9uIGZhaWxlZCAqL1wifX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgcmVqZWN0KCdGYWlsdXJlIScpO1wifX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgIH1cIn19IC8+XG4gICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwifSk7XCJ9fSAvPlxuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgVXNlOlxuICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCJwLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XCJ9fSAvPlxuICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgLyogcHJvY2VzcyB0aGUgcmVzdWx0ICh3aGVuIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkKSAqL1wifX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCJ9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1wifX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgIC8qIGhhbmRsZSB0aGUgZXJyb3IgKHdoZW4gdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQpICovXCJ9fSAvPlxuICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIn0pO1wifX0gLz5cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICA8aDE+UHJvbWlzZXMgaW4gSlM8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgQSBwcm9taXNlIGlzIGFuIG9iamVjdCBob2xkaW5nIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb25cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+QSByZXN1bHQgd2hpY2ggbWF5IGJlIGF2YWlsYWJsZSBub3csIG9yIGluIHRoZSBmdXR1cmUsIG9yIG5ldmVyPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgUHJvbWlzZXMgbWF5IGJlIGluIG9uZSBvZiB0aGVzZSBzdGF0ZXM6XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlBlbmRpbmcg4oCTIG9wZXJhdGlvbiBzdGlsbCBydW5uaW5nICh1bmZpbmlzaGVkKTwvbGk+XG4gICAgICAgICAgICA8bGk+RnVsZmlsbGVkIOKAkyBvcGVyYXRpb24gZmluaXNoZWQgKGFuZCB0aGUgcmVzdWx0IGlzIGF2YWlsYWJsZSk8L2xpPlxuICAgICAgICAgICAgPGxpPkZhaWxlZCDigJMgb3BlcmF0aW9uIGlzIGZhaWxlZCAoYW5kIGFuIGVycm9yIGlzIGF2YWlsYWJsZSk8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5Qcm9taXNlcyBpbiBKUyB1c2UgdGhlIFByb21pc2Ugb2JqZWN0PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgPGgxPlEgJiBBPC9oMT5cbiAgICA8L3NlY3Rpb24+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxoMT5SZWFjdEpTPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIEEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGludGVyZmFjZXMgdG8gc29sdmUgdGhlIHByb2JsZW1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+SG93IGNhbiB3ZSBidWlsZCBsYXJnZSBhcHBsaWNhdGlvbnMgd2l0aCBkYXRhIHRoYXQgY2hhbmdlcyBvdmVyIHRpbWU/PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XCJ9fSAvPlxuICAgICAgICAgIDxkaXY+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICBjb25zdHJ1Y3Rvcihwcm9wcykge1wifX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgICBzdXBlcihwcm9wcyk7XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICB9XCJ9fSAvPlxuICAgICAgICAgIDxkaXY+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgIHJlbmRlcigpIHtcIn19IC8+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgcmV0dXJuICZsdDtoMSZndDtIZWxsbyBXb3JsZCEhISZsdDsvaDEmZ3Q7XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiICB9XCJ9fSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwifVwifX0gLz5cbiAgICAgICAgPC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICA8aDE+UmVhY3RpdmUgUHJvZ3JhbW1pbmc8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgUmVhY3RpdmUgKGFkYXB0aXZlKSBhcHBsaWNhdGlvbnMgYXJlIGNhcGFibGUgdG86XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBSZWFjdCB0byBldmVudHNcbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT50aGUgZXZlbnQtZHJpdmVuIG5hdHVyZSBlbmFibGVzIHRoZSBmb2xsb3dpbmcgcXVhbGl0aWVzLjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBSZWFjdCB0byBsb2FkXG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+Zm9jdXMgb24gc2NhbGFiaWxpdHkgcmF0aGVyIHRoYW4gc2luZ2xlLXVzZXIgcGVyZm9ybWFuY2UuPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIFJlYWN0IHRvIGZhaWx1cmVcbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5idWlsZCByZXNpbGllbnQgc3lzdGVtcyB3aXRoIHRoZSBhYmlsaXR5IHRvIHJlY292ZXIgYXQgYWxsIGxldmVscy48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgUmVhY3QgdG8gdXNlcnNcbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5jb21iaW5lIHRoZSBhYm92ZSB0cmFpdHMgZm9yIGFuIGludGVyYWN0aXZlIHVzZXIgZXhwZXJpZW5jZS48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxoMT5SZWFjdGl2ZSBFeHRlbnNpb25zIExpYnJhcnkgZm9yIEphdmFTY3JpcHQ8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+QSBzZXQgb2YgbGlicmFyaWVzIGZvciBjb21wb3NpbmcgYXN5bmNocm9ub3VzIGFuZCBldmVudC1iYXNlZCBwcm9ncmFtcyB1c2luZyBvYnNlcnZhYmxlIHNlcXVlbmNlcyBhbmQgZmx1ZW50IHF1ZXJ5IG9wZXJhdG9ycy48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9yZWFjdGl2ZXguaW8vcnhqcy9cIj5odHRwOi8vcmVhY3RpdmV4LmlvL3J4anMvPC9hPjwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBUaGlzIGlzIHRoZSBzdG9yeSBvZiBob3cgTmV0ZmxpeCBzb2x2ZWTigIsgQklHIGFzeW5jIHByb2JsZW1z4oCLIGJ5IHRoaW5raW5nIGRpZmZlcmVudGx5IGFib3V04oCLIEV2ZW50cy7igItcbiAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwibGV0IGdldEVsZW1lbnREcmFncyAgPSBlbG10ID0+4oCLXCJ9fSAvPlxuICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgZWxtdC5tb3VzZURvd25zLuKAi1wifX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgbWFwKG1vdXNlRG93biA9PlwifX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgICBkb2N1bWVudC5tb3VzZU1vdmVzLuKAi1wifX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgICAgIHRha2VVbnRpbChkb2N1bWVudC5tb3VzZVVwcykpLlwifX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogXCIgICAgY29uY2F0QWxsKCk74oCLXCJ9fSAvPlxuICAgICAgICAgICAgICA8ZGl2PiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcImdldEVsZW1lbnREcmFncyhpbWFnZSku4oCLXCJ9fSAvPlxuICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIiAgZm9yRWFjaChwb3MgPT4gaW1hZ2UucG9zaXRpb24gPSBwb3MpO+KAi1wifX0gLz5cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGN1cnJlbnRQYWdlLCB0b3RhbFBhZ2UsIGxvYWRQYWdlLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9e2BzbGlkZXMgJHtjbGFzc05hbWV9YH0+XG4gICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJjb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmlnYXRlIGxlZnRcIiBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDB9IG9uQ2xpY2s9eygpID0+IGxvYWRQYWdlKGN1cnJlbnRQYWdlIC0gMSl9IC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2aWdhdGUgcmlnaHRcIiBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZSAtIDF9IG9uQ2xpY2s9eygpID0+IGxvYWRQYWdlKGN1cnJlbnRQYWdlICsgMSl9IC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2aWdhdGUgdXBcIiBkaXNhYmxlZCAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmlnYXRlIGRvd25cIiBkaXNhYmxlZCAvPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgPGgxPlRhYmxlIG9mIENvbnRlbnRzPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlJlYWN0SlM8L2xpPlxuICAgICAgICA8bGk+UmVhY3QgdmVyc3VzIEFuZ3VsYXI8L2xpPlxuICAgICAgICA8bGk+UmVhY3RpdmUgUHJvZ3JhbW1pbmcgd2l0aCBSeEpTPC9saT5cbiAgICAgICAgPGxpPlJlYWN0IHdpdGggRDM8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICA8aDE+Tm90IE9ubHkgUmVhY3Q8L2gxPlxuICAgICAgPGgyPlByZXNlbnRlcjogSHV5IFRyb25nIE5ndXllbjwvaDI+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgSGFzaFJvdXRlciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPEhhc2hSb3V0ZXIgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSJdfQ==
