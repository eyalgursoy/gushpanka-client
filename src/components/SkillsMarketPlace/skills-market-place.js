import React, { Component } from 'react';
import { Anchor, Card, Section, Headline, Search, Box  } from 'grommet';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import skillsData from '../../data/skills-data';

class SkillsMarketPlace extends Component {
    componentWillMount () {
        this.setState({ skills: skillsData });
    }

    render() {
        const { skills } = this.state;
        
        return (
        <Section>
            <Headline align="center" size="small">
                Market Place - Aquire new Skills
            </Headline>
            <Search 
                inline={true}
                fill={true}
                size='medium'
                placeHolder='Search'
                dropAlign={{"right": "right"}} 
            />  
            <Box className="market-place" direction="row" align="start">
                { skills.map( ({ id, thumbnail, heading, description, link, marketSize, price, ratio  }) => (
                    <Card 
                        className="skill-card"
                        thumbnail={thumbnail}
                        heading={heading}
                        description={description}
                        link={<Anchor href={`/skill-details/${id}`}><LinkNextIcon /></Anchor>}
                    >
                        <div className="flex-row"><label className="flex-label">Market Size:</label><span className="flex-data">{marketSize}</span></div>
                        <div className="flex-row"><label className="flex-label">Price:</label><span className="flex-data">{price}</span></div>
                        <div className="flex-row"><label className="flex-label">% Ratio:</label><span className="flex-data">{ratio}</span></div>
                    </Card>
                )) }
            </Box>
         </Section>
      );
    }
}

export default SkillsMarketPlace;
