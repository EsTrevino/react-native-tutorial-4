import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/index';
import { Card, CardSection, Input, Button, Spinner } from './common/index';

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

  renderError = () => {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorStyle}>{this.props.error}</Text>
        </View>
      );
    }
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return <Button onPress={this.onButtonPress}>Log In</Button>;
    }
  };

  render() {
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

        {this.renderError()}

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  actions
)(LoginForm);
