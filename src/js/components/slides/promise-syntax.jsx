import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <section className="content">
      <h1>JS Promises - Syntax</h1>
      <ul>
        <li>
          Declare:
          <pre>
            <code>
              <div dangerouslySetInnerHTML={{__html: "let p = new Promise(function(resolve, reject) {"}} />
              <div dangerouslySetInnerHTML={{__html: "  // Do an async task and then resolve or reject"}} />
              <div dangerouslySetInnerHTML={{__html: "  if (/* operation successful */) {"}} />
              <div dangerouslySetInnerHTML={{__html: "    resolve('Success!');"}} />
              <div dangerouslySetInnerHTML={{__html: "  } else { /* operation failed */"}} />
              <div dangerouslySetInnerHTML={{__html: "    reject('Failure!');"}} />
              <div dangerouslySetInnerHTML={{__html: "  }"}} />
              <div dangerouslySetInnerHTML={{__html: "});"}} />
            </code>
          </pre>
        </li>
        <li>
          Use:
          <pre>
            <code>
              <div dangerouslySetInnerHTML={{__html: "p.then(function(result) {"}} />
              <div dangerouslySetInnerHTML={{__html: "  /* process the result (when the promise is resolved) */"}} />
              <div dangerouslySetInnerHTML={{__html: "}).catch(function(error) {"}} />
              <div dangerouslySetInnerHTML={{__html: "  /* handle the error (when the promise is rejected) */"}} />
              <div dangerouslySetInnerHTML={{__html: "});"}} />
            </code>
          </pre>
        </li>
      </ul>
    </section>
  }
}