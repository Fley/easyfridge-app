import React, { Component } from 'react';

export default (importComponent, defaultComponent = null) => {

  class AsyncComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      try {
        const { default: component } = await importComponent(this.props);
        this.setState({ component });
      } catch (err) {
        console.log(err);
        defaultComponent && this.setState({ component: defaultComponent });
      }
    }

    render() {
      const C = this.state.component;

      return C
        ? <C {...this.props} />
        : null;
    }

  }

  return AsyncComponent;
};