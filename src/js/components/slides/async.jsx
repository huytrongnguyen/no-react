import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <section className="content">
      <h1>Asynchronous Programming in JS</h1>
      <ul>
        <li>Asynchronous programming deals with the needs to run several tasks (pieces of code) in parallel, in the same time</li>
      </ul>
      <div style={{textAlign:'center'}}><img src="/img/sync-and-async.png" style={{width:'50%',height:'50%'}} /></div>
      <ul>
        <li>
          In JS the asynchronous programming is based on callbacks
          <ul>
            <li>You run a background task and pass a callback function</li>
          </ul>
        </li>
      </ul>
    </section>
  }
}