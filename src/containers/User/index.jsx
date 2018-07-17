import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List, Checkbox } from 'antd-mobile';
import { Header, wrap } from 'components';

const CheckboxItem = Checkbox.CheckboxItem;

const User = props => {
  const { title } = props;
  return (
    <section className="main user">
      <Header>
        <h3>{title}</h3>
      </Header>
      <List renderHeader={() => 'CheckboxItem demo'}>
        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
          Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
        </CheckboxItem>
      </List>
    </section>
  );
}
const mapStateToProps = state => {
  const { user } = state
  console.log('user---', user)
  return {
    ...user,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  }
}
const mapFunToComponent  = dispatch => ({
  componentWillMount: () => {
    dispatch({ type: 'USER_NAME', name: 'margin'})
  },
  componentDidMount: () => {
    console.log('success')
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(wrap(mapFunToComponent)(User)
);