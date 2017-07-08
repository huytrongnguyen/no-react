import React, {Component} from 'react';
import {Container} from 'ext-react';

export default class extends Component {
  render() {
    const { className, currentPage, totalPage, loadPage, children } = this.props;
    return <Container className={`slides ${className}`}>
      {this.props.children}
      <aside className="controls">
        <button className="navigate left" disabled={currentPage === 0} onClick={() => loadPage(currentPage - 1)} />
        <button className="navigate right" disabled={currentPage === totalPage - 1} onClick={() => loadPage(currentPage + 1)} />
        <button className="navigate up" disabled />
        <button className="navigate down" disabled />
      </aside>
    </Container>
  }
}