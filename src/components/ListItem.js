import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common/index';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress = () => {
    Actions.employeeEdit({ employee: this.props.employee });
  };

  render() {
    const { name } = this.props.employee.item;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
