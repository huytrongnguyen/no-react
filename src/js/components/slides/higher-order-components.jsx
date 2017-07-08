import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <section className="content">
      <h1>Higher Order Components</h1>
      <ul>
        <li>
          Higher Order Function
          <ul>
            <li>Functions that operate on other functions, either by taking them as arguments or by returning them</li>
          </ul>
        </li>
        <li>
          Higher Order Component
          <ul>
            <li>Functions that takes a component and returns a new component.</li>
          </ul>
        </li>
      </ul>
      <pre>
        <code style={{fontSize:'1rem'}}>
          <div dangerouslySetInnerHTML={{__html: "function higherOrderComponent(WrappedComponent, selectData) {"}} />
          <div dangerouslySetInnerHTML={{__html: "  return class extends React.Component {"}} />
          <div dangerouslySetInnerHTML={{__html: "    constructor(props) {"}} />
          <div dangerouslySetInnerHTML={{__html: "      super(props);"}} />
          <div dangerouslySetInnerHTML={{__html: "      this.handleChange = this.handleChange.bind(this);"}} />
          <div dangerouslySetInnerHTML={{__html: "      this.state = {"}} />
          <div dangerouslySetInnerHTML={{__html: "        data: selectData(DataSource, props)"}} />
          <div dangerouslySetInnerHTML={{__html: "      };"}} />
          <div dangerouslySetInnerHTML={{__html: "    }"}} />
          <div dangerouslySetInnerHTML={{__html: "    componentDidMount() {"}} />
          <div dangerouslySetInnerHTML={{__html: "      DataSource.addChangeListener(this.handleChange);"}} />
          <div dangerouslySetInnerHTML={{__html: "    }"}} />
          <div dangerouslySetInnerHTML={{__html: "    componentWillUnmount() {"}} />
          <div dangerouslySetInnerHTML={{__html: "      DataSource.removeChangeListener(this.handleChange);"}} />
          <div dangerouslySetInnerHTML={{__html: "    }"}} />
          <div dangerouslySetInnerHTML={{__html: "    handleChange() {"}} />
          <div dangerouslySetInnerHTML={{__html: "      this.setState(() => ({ data: selectData(DataSource, this.props) }));"}} />
          <div dangerouslySetInnerHTML={{__html: "    }"}} />
          <div dangerouslySetInnerHTML={{__html: "    render() {"}} />
          <div dangerouslySetInnerHTML={{__html: "      return <WrappedComponent data={this.state.data} {...this.props} />"}} />
          <div dangerouslySetInnerHTML={{__html: "    }"}} />
          <div dangerouslySetInnerHTML={{__html: "  };"}} />
          <div dangerouslySetInnerHTML={{__html: "}"}} />
          <div>&nbsp;</div>
          <div dangerouslySetInnerHTML={{__html: "const dataSource = [];"}} />
          <div>&nbsp;</div>
          <div dangerouslySetInnerHTML={{__html: "const EnhancedComponent = higherOrderComponent(WrappedComponent, dataSource);"}} />
        </code>
      </pre>
    </section>
  }
}