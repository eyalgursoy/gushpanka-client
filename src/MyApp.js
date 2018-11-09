import React, { Component } from 'react';
import { Header, Footer, Section, Menu, Title, Box, Anchor, Paragraph } from 'grommet';
import './MyApp.css';
import '../node_modules/grommet-css';
import gushpanka from './images/gushpanka-logo.png';
import UserSettingsIcon from 'grommet/components/icons/base/UserSettings';
import SkillsMarketPlace from './components/SkillsMarketPlace';
import SkillDetails from './components/SkillDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import usersData from './data/user-data';

class MyApp extends Component {
  state = {
    user: null,
  }

  componentWillMount(){
    const user = usersData[0];
    this.setState({
      user,
    })
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <Header fixed={false}>
          <Title>
            <Anchor href="/">
              <img src={gushpanka} className="App-logo" alt="logo" />
              <span>Gushpanka</span>
            </Anchor>
          </Title>
          <Box flex={true}
              justify='end'
              direction='row'
              responsive={false}>
              
              <Menu responsive={true} label={user && `${user.assets}`} icon={ <UserSettingsIcon />}>
                <Anchor href='#'>
                  {user && `Hello ${user.name}`}
                </Anchor>
              </Menu>
          </Box>
        </Header>
        <Section>
          <Router>
            <div>
              <Route exact path="/" component={SkillsMarketPlace}/>
              <Route exact path="/skill-details/:skillId" component={SkillDetails}/>
            </div>
          </Router>
        </Section>
        <Footer justify='between'>
          <Title>
            <img src={gushpanka} className="App-logo" alt="logo" />
          </Title>
          <Box direction='row'
            align='center'
            pad={{"between": "medium"}}>
            <Paragraph margin='none'>
              © 2018 Gushpanka
            </Paragraph>
            <Menu direction='row'
              size='small'
              dropAlign={{"right": "right"}}>
              <Anchor href='#'>
                Support
              </Anchor>
              <Anchor href='#'>
                Contact
              </Anchor>
              <Anchor href='#'>
                About
              </Anchor>
            </Menu>
          </Box>
        </Footer>
      </div>
    );
  }
}

export default MyApp;
