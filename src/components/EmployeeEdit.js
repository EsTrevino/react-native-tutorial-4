import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common/index';
import {
  employeeUpdate,
  employeeSave,
  employeeDelete
} from '../redux/actions/EmployeeActions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  state = { showModal: false };
  componentDidMount() {
    _.each(this.props.employee.item, (value, props) => {
      this.props.employeeUpdate({ props, value });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift, employee } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: employee.item.uid });
  };

  onTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Bitch you work on ${shift}`);
  };

  onAccept = () => {
    this.props.employeeDelete(this.props.employee.item.uid);
  };

  onDecline = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>Text</Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: true })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          onDecline={this.onDecline}
          onAccept={this.onAccept}
          visible={this.state.showModal}
        >
          Are you sure you want to fire this person?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
