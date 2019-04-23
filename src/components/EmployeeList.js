import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { Spinner, CardSection } from './common/index';
import _ from 'lodash';
import { employeeFetch } from '../redux/actions/index';
import ListItem from './ListItem.js';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeeFetch();
  }

  renderItem = employee => {
    return <ListItem employee={employee} />;
  };

  renderList = () => {
    if (this.props.employees !== undefined) {
      return (
        <FlatList
          data={this.props.employees}
          renderItem={this.renderItem}
          keyExtractor={employee => employee.uid.toString()}
        />
      );
    } else {
      return (
        <CardSection>
          <Spinner />
        </CardSection>
      );
    }
  };

  render() {
    console.log(this.props);
    return <View>{this.renderList()}</View>;
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees: employees };
};

export default connect(
  mapStateToProps,
  { employeeFetch }
)(EmployeeList);
