import React, { Component } from 'react';
import { Header, Footer, Section, Menu, Title, Box, Anchor, Search, Paragraph, Card, Heading, Headline } from 'grommet';
import './MyApp.css';
import '../node_modules/grommet-css';
import stamp from './stamp-solid.svg';
import UserSettingsIcon from 'grommet/components/icons/base/UserSettings';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import BitcoinLogo from './images/bitcoin.png';
import SpaceMeshLogo from './images/spacemesh-logo.svg';

class MyApp extends Component {
  render() {
    return (
      <div>
        <Header fixed={false}>
          <Title>
            <span>Gushpanka</span>
            <img src={stamp} className="App-logo" alt="logo" />
          </Title>
          <Box flex={true}
              justify='end'
              direction='row'
              responsive={false}>
              <Menu responsive={true} direction="row">
                <Anchor href='#'
                  className='active'>
                  <UserSettingsIcon />
                </Anchor>
              </Menu>
          </Box>
        </Header>
        <Section>
          <Headline align="center" size="small">
            Market Place - Aquire new Skils
          </Headline>
          <Search inline={true}
            fill={true}
            size='medium'
            placeHolder='Search'
            dropAlign={{"right": "right"}} />

            <Box direction="row" align="start">
              <Card 
                className="skill-card"
                thumbnail={BitcoinLogo}
                heading='Satoshi White Paper'
                description='Learn the basics of Bitcoin: A Peer-to-Peer Electronic Cash System' 
                link={<Anchor href='#'><LinkNextIcon /></Anchor>}
              >
                <div className="flex-row"><label className="flex-label">Market Size:</label><span className="flex-data">20000g</span></div>
                <div className="flex-row"><label className="flex-label">Price:</label><span className="flex-data">100g</span></div>
                <div className="flex-row"><label className="flex-label">% Ratio:</label><span className="flex-data">50%</span></div>
              </Card>
              <Card thumbnail={SpaceMeshLogo}
                label='Spacemesh White Paper 1'
                heading='Spacemesh White Paper 1'
                description='Sample description providing more details.' 
              />
          </Box>
        </Section>
        <Footer justify='between'>
          <Title>
            <img src={stamp} className="App-logo" alt="logo" />
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
