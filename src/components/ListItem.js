import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common/index';

class ListItem extends Component {
  render() {
    console.log(this.props);
    const { name } = this.props.employee.item;
    return (
      <CardSection>
        <Text style={styles.titleStyle}>{name}</Text>
      </CardSection>
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
