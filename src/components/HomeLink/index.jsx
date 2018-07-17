import React, {Component} from 'react';
import {List} from 'antd-mobile';

const Item = List.Item;

class HomeList extends Component {
  render() {
    return (
      <section className="home-list">
        <List renderHeader={() => 'all router'}>
          <Item
            thumb="http://www.iconpng.com/png/flatastic1/user-blue.png"
            arrow="horizontal"
            onClick={() => {
              // this.props.history.push('user');
              alert('go')
            }}
          >test</Item>
        </List>
      </section>
    );
  }
}

export default HomeList;