import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <section className="content">
      <h1>ReactJS</h1>
      <ul>
        <li>
          A JavaScript library for building user interfaces to solve the problem
          <ul>
            <li>How can we build large applications with data that changes over time?</li>
          </ul>
        </li>
      </ul>
      <pre>
        <code>
          <div dangerouslySetInnerHTML={{__html: "import React, {Component} from 'react';"}} />
          <div>&nbsp;</div>
          <div dangerouslySetInnerHTML={{__html: "export default class extends Component {"}} />
          <div dangerouslySetInnerHTML={{__html: "  constructor(props) {"}} />
          <div dangerouslySetInnerHTML={{__html: "    super(props);"}} />
          <div dangerouslySetInnerHTML={{__html: "  }"}} />
          <div>&nbsp;</div>
          <div dangerouslySetInnerHTML={{__html: "  render() {"}} />
          <div dangerouslySetInnerHTML={{__html: "    return &lt;h1&gt;Hello World!!!&lt;/h1&gt;"}} />
          <div dangerouslySetInnerHTML={{__html: "  }"}} />
          <div dangerouslySetInnerHTML={{__html: "}"}} />
        </code>
      </pre>
    </section>
  }
}