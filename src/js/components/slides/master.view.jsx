import React, {Component} from 'react';
import {Container, bind} from 'ext-react';
import Slide from './slide';

export default class extends Component {
  render() {
    const { vm, params } = this.props,
          currentPage = parseInt(params.page || 0);

    return <Slide currentPage={currentPage} totalPage={vm.slides.length} loadPage={this.loadPage}>
      {React.createElement(vm.slides[currentPage])}
    </Slide>
  }

  loadPage(pageNumber) {
    window.location.hash = '/' + pageNumber;
  }
}