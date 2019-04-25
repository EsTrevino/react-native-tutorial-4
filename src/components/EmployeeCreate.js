import React, { Component } from 'react';
import { Card, CardSection, Button } from './common/index';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../redux/actions/index';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress = () => {
    const { name, phone, shift, employeeCreate } = this.props;
    employeeCreate({ name, phone, shift: shift || 'Monday' });
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
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
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
