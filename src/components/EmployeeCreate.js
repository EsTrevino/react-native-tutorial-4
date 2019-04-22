import React, { Component } from 'react';
import { Text } from 'react-native';
import { Picker } from 'react-native';
import { Card, CardSection, Input, Button } from './common/index';
import { connect } from 'react-redux';
import { employeeUpdate } from '../redux/actions/index';

class EmployeeCreate extends Component {
  render() {
    const { name, phone, shift, employeeUpdate } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={text =>
              employeeUpdate({ props: 'name', value: text })
            }
            value={name}
            label="Name"
            placeHolder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={text =>
              employeeUpdate({ props: 'phone', value: text })
            }
            value={phone}
            label="Phone"
            placeHolder="555-555-5555"
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, paddingLeft: 21 }}>Shift</Text>
          <Picker
            onValueChange={day =>
              this.props.employeeUpdate({ props: 'shift', value: day })
            }
            selectedValue={this.props.shift}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Create</Button>
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
  { employeeUpdate }
)(EmployeeCreate);
