import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <section className="content">
      <h1>Reactive Programming</h1>
      <ul>
        <li>
          Reactive (adaptive) applications are capable to:
          <ul>
            <li>
              React to events
              <ul>
                <li>the event-driven nature enables the following qualities.</li>
              </ul>
            </li>
            <li>
              React to load
              <ul>
                <li>focus on scalability rather than single-user performance.</li>
              </ul>
            </li>
            <li>
              React to failure
              <ul>
                <li>build resilient systems with the ability to recover at all levels.</li>
              </ul>
            </li>
            <li>
              React to users
              <ul>
                <li>combine the above traits for an interactive user experience.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  }
}