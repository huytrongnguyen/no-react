import React from 'react';
import { Route, Component } from 'ext-react';
import MasterView from './master.view';
import Title from './title';
import TableOfContents from './table-of-contents';
import ReactJS from './react';
import ComponentLifeCycle from './component-life-cycle';
import HigherOrderComponents from './higher-order-components';
import Angular from './angular';
import Async from './async';
import CallbackHell from './callback-hell';
import Promise from './promise';
import PromiseSyntax from './promise-syntax';
import ReactiveProgramming from './reactive-programming';
import RxJS from './rxjs';
import D3 from './d3';
import QA from './qa';

@Route('/:page')
@Component({
  view: MasterView
})
export default class {
  constructor() {
    this.slides = [
      Title,
      TableOfContents,
      ReactJS,
      ComponentLifeCycle,
      HigherOrderComponents,
      Angular,
      RxJS,
      D3,
      QA
    ]
  }
}