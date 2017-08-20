import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import Joi from 'joi';

const PASSWORD_REGEXP = /^(?=(.*[a-z])+)(?=(.*[0-9])+)[0-9a-zA-Z!\"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]{6,}$/;

const FormGroup = ({
  level, feedback, id, label, placeHolder, onChange, value, validation, onFieldChange, ...rest
}) => {
  return (
    <div className={classnames('form-group row', {
      'has-danger': level === 'error',
      'has-warning': level === 'warning',
      'has-success': level === 'success'
    })}>
      <label htmlFor={id} className="col-sm-2 col-form-label">{label}</label>
      <div className="col-sm-10">
        <input type="text" className={classnames('form-control', {
          'form-control-danger': level === 'error',
          'form-control-warning': level === 'warning',
          'form-control-success': level === 'success'
        })} id={id} placeholder={placeHolder} {...rest}
          value={value} onChange={event => {
            onFieldChange(id, event.target.value, validation);
          }} />
        <div className="form-control-feedback">{feedback}</div>
      </div>
    </div>
  );
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: { value: '' },
      lastname: { value: '' },
      email: { value: '' },
      password: { value: '' },
      confirmPassword: { value: '' },
      userid: { value: '' }
    };

    this.firstnameValidation = Joi.string().alphanum().min(3).max(30).required();
    this.lastnameValidation = Joi.string().alphanum().min(3).max(30).required();
    this.emailValidation = Joi.string().email().required();
    this.passwordValidation = Joi.string().regex(PASSWORD_REGEXP, 'password').required();
    this.useridValidation = Joi.string().alphanum().min(3).max(30).required();

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.isValid = this.isValid.bind(this);
  }


  componentWillMount() {
    const { firstname = '', lastname = '', email = '', userid = '' } = this.props;
    const newState = { ...this.state };
    newState.firstname = firstname ? this.getNewFieldState('firstname', firstname, this.firstnameValidation) :
      this.state.firstname;
    newState.lastname = lastname ? this.getNewFieldState('lastname', lastname, this.lastnameValidation) :
      this.state.lastname;
    newState.email = email ? this.getNewFieldState('email', email, this.emailValidation) : this.state.email;
    newState.userid = userid ? this.getNewFieldState('userid', userid, this.useridValidation) : this.state.userid;
    this.setState(newState);
  }

  getNewFieldState(id, value, validation) {
    const { error } = validation ? Joi.validate(value, validation) : { error: false };
    const feedback = error && error.details ? error.details.map((detail, index) => {
      console.log(Joi.validate(value, validation), 'joi.' + detail.type + (detail.type === 'string.regex.name' ? ('.' + detail.context.name) : ''));
      return <FormattedMessage
        key={id + '-' + index}
        id={'joi.' + detail.type + (detail.type === 'string.regex.name' ? ('.' + detail.context.name) : '')}
        defaultMessage={detail.message}
        values={{ ...detail.context }}
      />;
    }) : [];
    const newFieldState = error ? { value, level: 'error', feedback, valid: false } :
      { value, level: 'success', feedback: null, valid: true };
    return { ...this.state[id], ...newFieldState };
  }

  onFieldChange(id, value, validation) {
    const newState = { ...this.state };
    newState[id] = this.getNewFieldState(id, value, validation);
    this.setState(newState);
  };

  onSubmit(event) {
    event.preventDefault();
    const {
      firstname: { value: firstname },
      lastname: { value: lastname },
      email: { value: email },
      password: { value: password },
      userid: { value: userid }
    } = this.state;
    if (this.isValid()) {
      this.props.onSubmit({ firstname, lastname, email, password, userid });
    }
  }

  isValid() {
    const { firstname, lastname, email, password, confirmPassword, userid } = this.state;
    return firstname.valid && lastname.valid && email.valid && password.valid && confirmPassword.valid && userid.valid;
  }

  render() {
    const { loading, error, success, intl } = this.props;
    return (
      success ?
        <div className="col-12 text-center text-success lead my-5">
          <p><i className="material-icons pr-1 md-48">done</i></p>
          <p>
            <FormattedMessage
              id="user.sign-up.signUpForm.successMessage"
              defaultMessage="Congrats! you just signed up!"
            />
          </p>
          <p><NavLink to="/sign-in" className="btn btn-primary" role="button">
            <FormattedMessage id="user.sign-up.signUpForm.goSignIn" defaultMessage="Sign in now !" />
          </NavLink></p>
        </div> :
        <form onSubmit={this.onSubmit} >

          {error && <div className="row m-1"><p className="font-weight-bold text-danger">{error}</p></div>}

          < FormGroup
            id="firstname"
            label={<FormattedMessage id="user.sign-up.signUpForm.firstname.label" defaultMessage="First name" />}
            placeHolder={
              intl.formatMessage({ id: 'user.sign-up.signUpForm.firstname.placeholder', defaultMessage: 'Beverly' })
            }
            value={this.state.firstname.value}
            validation={this.firstnameValidation}
            level={this.state.firstname.level}
            feedback={this.state.firstname.feedback}
            required
            onFieldChange={this.onFieldChange}
            disabled={loading} />

          <FormGroup
            id="lastname"
            label={<FormattedMessage id="user.sign-up.signUpForm.lastname.label" defaultMessage="Last name" />}
            placeHolder={
              intl.formatMessage({ id: 'user.sign-up.signUpForm.lastname.placeholder', defaultMessage: 'Marsh' })
            }
            value={this.state.lastname.value}
            validation={this.lastnameValidation}
            level={this.state.lastname.level}
            feedback={this.state.lastname.feedback}
            required
            onFieldChange={this.onFieldChange}
            disabled={loading} />

          <FormGroup
            id="email"
            label={<FormattedMessage id="user.sign-up.signUpForm.email.label" defaultMessage="Email" />}
            type="email"
            placeHolder={intl.formatMessage({
              id: 'user.sign-up.signUpForm.email.placeholder',
              defaultMessage: 'beverly@marsh.it'
            })}
            value={this.state.email.value}
            validation={this.emailValidation}
            level={this.state.email.level}
            feedback={this.state.email.feedback}
            required
            onFieldChange={this.onFieldChange}
            disabled={loading} />

          <FormGroup
            id="password"
            label={<FormattedMessage id="user.sign-up.signUpForm.password.label" defaultMessage="Password" />}
            type="password"
            placeHolder={intl.formatMessage({
              id: 'user.sign-up.signUpForm.password.placeholder',
              defaultMessage: 'Your password'
            })}
            value={this.state.password.value}
            validation={this.passwordValidation}
            level={this.state.password.level}
            feedback={this.state.password.feedback}
            required
            onFieldChange={this.onFieldChange}
            disabled={loading} />

          <FormGroup
            id="confirmPassword"
            label={
              <FormattedMessage
                id="user.sign-up.signUpForm.confirmPassword.label"
                defaultMessage="Confirm your password" />
            }
            type="password"
            placeHolder={intl.formatMessage({
              id: 'user.sign-up.signUpForm.confirmPassword.placeholder',
              defaultMessage: 'Password confirmation'
            })}
            value={this.state.confirmPassword.value}
            validation={Joi.string().equal(this.state.password.value).regex(PASSWORD_REGEXP, 'password')
              .required()}
            level={this.state.confirmPassword.level}
            feedback={this.state.confirmPassword.feedback}
            required
            onFieldChange={this.onFieldChange}
            disabled={loading} />

          <FormGroup
            id="userid"
            label={<FormattedMessage id="user.sign-up.signUpForm.userid.label" defaultMessage="Choose your user id" />}
            placeHolder={intl.formatMessage({
              id: 'user.sign-up.signUpForm.userid.placeholder',
              defaultMessage: 'bmarsh'
            })}
            value={this.state.userid.value}
            validation={this.useridValidation}
            level={this.state.userid.level}
            feedback={this.state.userid.feedback}
            required
            onFieldChange={this.onFieldChange}
            disabled={loading} />

          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              <button type="submit" className="btn btn-primary btn-block" disabled={!this.isValid() || loading}>
                {loading ?
                  <span>
                    <i className="material-icons md-spin pr-1">sync</i>
                    <FormattedMessage id="user.sign-up.signUpForm.signingUp" defaultMessage="Signing up..." />
                  </span> :
                  <span><FormattedMessage id="user.sign-up.signUpForm.actionSignUp" defaultMessage="Sign up" /></span>
                }
              </button>
            </div>
          </div>

        </form >
    );
  }
}

export default injectIntl(SignUpForm);