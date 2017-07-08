import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <section className="content">
      <h1>Reactive Extensions Library for JavaScript</h1>
      <ul>
        <li>A set of libraries for composing asynchronous and event-based programs using observable sequences and fluent query operators.</li>
        <li><a href="http://reactivex.io/rxjs/">http://reactivex.io/rxjs/</a></li>
        <li>
          This is the story of how Netflix solved​ BIG async problems​ by thinking differently about​ Events.​
          <pre>
            <code>
              <div dangerouslySetInnerHTML={{__html: "let getElementDrags  = elmt =>​"}} />
              <div dangerouslySetInnerHTML={{__html: "  elmt.mouseDowns.​"}} />
              <div dangerouslySetInnerHTML={{__html: "    map(mouseDown =>"}} />
              <div dangerouslySetInnerHTML={{__html: "      document.mouseMoves.​"}} />
              <div dangerouslySetInnerHTML={{__html: "        takeUntil(document.mouseUps))."}} />
              <div dangerouslySetInnerHTML={{__html: "    concatAll();​"}} />
              <div>&nbsp;</div>
              <div dangerouslySetInnerHTML={{__html: "getElementDrags(image).​"}} />
              <div dangerouslySetInnerHTML={{__html: "  forEach(pos => image.position = pos);​"}} />
            </code>
          </pre>
        </li>
      </ul>
    </section>
  }
}