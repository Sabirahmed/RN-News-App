import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
export default class TabScreens extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={styles.header}>
        <Left/>
          <Body style={styles.textColor}>
            <Title>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab heading="General" activeTabStyle= {{backgroundColor:'white'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Business" activeTabStyle= {{backgroundColor:'white'}}>
            <Tab2 />
          </Tab>
          <Tab heading="Technology" activeTabStyle= {{backgroundColor:'white'}}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#009387'
    },
    textColor: {
        color: 'white'
    }
})