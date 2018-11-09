import React, { Component } from 'react';
import { Image, Button, Section, Headline, Box, Layer, Heading } from 'grommet';
import skillsData from '../../data/skills-data';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

import './skill-details.css';


class SkillDetails extends Component {
    state = {
        skill: null,
        confirmOpen: false,
        amount: 100,
    }

    componentWillMount () {
        const { match } = this.props;
        const { skillId } = match.params;

        const skill = skillId && skillsData.find( skillRow => skillRow.id === skillId );
        this.setState({ skill });
    }

    onAqcuireNewSkill(event) {
        this.setState({confirmOpen: true});
    }

    onSendFunds(link) {
        this.setState({
            confirmOpen:false,
        });
        window.open(link, '_blank');

        const userMenu = document.getElementsByClassName("user-menu");
        const userLabel = userMenu && userMenu[0].firstChild && userMenu[0].firstChild.firstChild;
        if (userLabel) {
            userLabel.innerText = '0g';
        }
    }

    render() {
        const { skill, confirmOpen, amount } = this.state;

        if (!skill) { 
            return null;
        };

        const { thumbnail, heading, description, link, marketSize, price, ratio } = skill;

        return (
        <Section className="skill-details">
            <Box className="skill-details__content">
                <Image src={thumbnail} alt={description} className="skill-details__image"  />
                <div className="skill-details__info">
                    <Headline className="skill-details__headline" align="center" size="small">{heading}</Headline>
                    <div className="flex-row"><label className="flex-label">Volume:</label><span className="flex-data">{marketSize}</span></div>
                    <div className="flex-row"><label className="flex-label">Price:</label><span className="flex-data">{price}</span></div>
                    <div className="flex-row"><label className="flex-label">% Ratio:</label><span className="flex-data">{ratio}</span></div>
                    <Button 
                        href="#" 
                        className="skill-details__button"
                        icon={<LinkNextIcon />}
                        onClick={() => {
                            this.onAqcuireNewSkill();
                        }} 
                        label="Acquire Skill" 
                    />
                </div>
            </Box>
            { confirmOpen && (
                <Layer align="center" className="confirmation" closer onClose={() => { this.setState({confirmOpen:false})}}>
                    <Heading tag="h3" strong={false} align="center">Acquire New Skill</Heading>
                    <Box a11yTitle="" align="center">
                        <div className="confirmation__title">Your're going to send {amount}g</div>
                        <div className="confirmation__actions">
                            <Button onClick={() => { this.setState({confirmOpen:false})}}>Cancel</Button>
                            <Button primary onClick={() => { this.onSendFunds(link) }}>Continue</Button>
                        </div>
                    </Box>
                </Layer>
            )}
         </Section>
      );
    }
}

export default SkillDetails;
