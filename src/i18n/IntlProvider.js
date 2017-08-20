import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { getLocale } from 'reducers';

import React, { Component } from 'react';

import { addLocaleData } from 'react-intl';

// This component loads the correct './message-{locale}' and pass it to the inner IntlProvider
class IntlProviderAsync extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  async loadLocale(locale) {
    const localeData = await import('react-intl/locale-data/' + locale);
    addLocaleData(localeData);
    const { default: messages } = await this.props.loadMessages(locale);
    this.setState({ locale, messages });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.locale !== this.state.locale || nextState.messages !== this.state.messages;
  }

  async componentWillMount() {
    try {
      await this.loadLocale(this.props.locale);
    } catch (err) {
      console.error(err);
    }
  }

  async componentWillReceiveProps(nextProps) {
    if (this.props.locale !== nextProps.locale) {
      try {
        await this.loadLocale(nextProps.locale);
      } catch (err) {
        console.error(err);
      }
    }
  }


  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    return (
      locale ?
        <IntlProvider key={locale} locale={locale} messages={messages}>
          {children}
        </IntlProvider> :
        <div>Loading locale data...</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const locale = getLocale(state);
  return {
    locale
  };
};

export default connect(mapStateToProps)(IntlProviderAsync);
