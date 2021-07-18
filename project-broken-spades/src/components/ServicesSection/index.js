import React from 'react'
import Icon1 from '../../images/coding.svg'
import Icon2 from '../../images/openingdoor.svg'
import Icon3 from '../../images/spacesearch.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
	return (
		<ServicesContainer id="what-we-do">
			<ServicesH1>What We Do</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1}/>
					<ServicesH2>Write Things</ServicesH2>
					<ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2}/>
					<ServicesH2>Virtual Offices</ServicesH2>
					<ServicesP>You can access our platform online anywhere in the world.</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3}/>
					<ServicesH2>Explore Art</ServicesH2>
					<ServicesP>Get inspired with unique art from all over the world.</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services;