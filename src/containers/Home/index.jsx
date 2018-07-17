import React, { Component } from 'react';
// import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { WhiteSpace } from 'antd-mobile';

import { Header, Banner, HomeLink, wrap } from 'components';

const Home =  props => {
  const { title, test } = props
  console.log('----', title, test)
  return (
    <section className="home">
      <Header>
        <h3>{title}</h3>
      </Header>
      <Banner />
      <WhiteSpace />
      <HomeLink/>
    </section>
  )
}
const mapStateToProps = state => {
  const { home } = state
  console.log('home---', home)
  return {
    ...home,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    testFn: () => {},
  }
}
const mapFunToComponent  = dispatch => ({
  componentWillMount: () => {
    dispatch({ type: 'TEST', test: 'majing'})
  },
  componentDidMount: () => {
    console.log('success')
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(wrap(mapFunToComponent)(Home)
);