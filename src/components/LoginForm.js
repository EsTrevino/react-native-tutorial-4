import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/index';
import { Card, CardSection, Input, Button } from './common/index';

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  };

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={this.onEmailChange}
            value={this.props.email}
            label="Email"
            placeHolder="email@email.com"
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.password}
            onChangeText={this.onPasswordChange}
            secureTextEntry
            label="Password"
            placeHolder="password"
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress}>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(
  mapStateToProps,
  actions
)(LoginForm);
