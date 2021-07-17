import React, {useState} from 'react'
import Video from '../../videos/rockybeach.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover)
	};

	return (
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' /> 
			</HeroBg>
			<HeroContent>
				<HeroH1>Broken Spades</HeroH1>
				<HeroP>
					Welcome to the Broken Spades Homepage!
				</HeroP>
				<HeroButtonWrapper>
					<Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
						Get started {hover ? <ArrowForward/> : <ArrowRight/>}
					</Button>
				</HeroButtonWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection