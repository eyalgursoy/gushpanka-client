import React, { Component } from 'react';
import { Image, Button, Section, Headline, Box  } from 'grommet';
import skillsData from '../../data/skills-data';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

import './skill-details.css';

class SkillDetails extends Component {
    componentWillMount () {
        const { match } = this.props;
        const { skillId } = match.params;

        const skill = skillId && skillsData.find( skillRow => skillRow.id === skillId );
        this.setState({ skill });
    }

    render() {
        const { skill } = this.state;

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
                    <div className="flex-row"><label className="flex-label">Market Size:</label><span className="flex-data">{marketSize}</span></div>
                    <div className="flex-row"><label className="flex-label">Price:</label><span className="flex-data">{price}</span></div>
                    <div className="flex-row"><label className="flex-label">% Ratio:</label><span className="flex-data">{ratio}</span></div>
                    <Button 
                        href="#" 
                        className="skill-details__button"
                        icon={<LinkNextIcon />}
                        onClick={() => undefined} 
                        label="Acquire Skill" 
                    />
                </div>
            </Box>
         </Section>
      );
    }
}

export default SkillDetails;
