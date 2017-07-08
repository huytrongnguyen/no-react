import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <section className="content">
      <h1>Component Life Cycle</h1>
      <ul>
        <li>
          Mounting
          <ul>
            <li>constructor</li>
            <li>componentWillMount</li>
            <li>componentDidMount</li>
          </ul>
        </li>
        <li>
          Updating
          <ul>
            <li>shouldComponentUpdate</li>
            <li>componentWillUpdate</li>
            <li>componentDidUpdate</li>
          </ul>
        </li>
        <li>
          Unmounting
          <ul>
            <li>componentWillUnmount</li>
          </ul>
        </li>
      </ul>
    </section>
  }
}