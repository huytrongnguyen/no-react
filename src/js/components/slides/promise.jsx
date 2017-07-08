import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <section className="content">
      <h1>Promises in JS</h1>
      <ul>
        <li>
          A promise is an object holding an asynchronous operation
          <ul>
            <li>A result which may be available now, or in the future, or never</li>
          </ul>
        </li>
        <li>
          Promises may be in one of these states:
          <ul>
            <li>Pending – operation still running (unfinished)</li>
            <li>Fulfilled – operation finished (and the result is available)</li>
            <li>Failed – operation is failed (and an error is available)</li>
          </ul>
        </li>
        <li>Promises in JS use the Promise object</li>
      </ul>
    </section>
  }
}