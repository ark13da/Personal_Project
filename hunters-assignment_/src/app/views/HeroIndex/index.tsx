import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';
import * as Typography from "../../components/Typography"
import { TopBar } from '../../components/TopBar';
import { Hero } from '../../components/Hero';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { HeroCard } from '../../components/HeroCard';

const HEROES_QUERY = gql`
	query {
		heroes {
			name
			imgUrl
			description
			backStory
			attributes {
				strength
				intelligence
				stamina
				healthpoints
				mana
				agility
				speed
				resistance
				weakness
			}
			skills {
				name
				damage
				element
			}
		}
	}
`;

interface IHeroIndexProps {}

const HeroCardContainer = styled.div`
	
	width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;



const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
	const { data, error, loading } = useQuery(HEROES_QUERY);
	
	if (error) {
		return handleError(error.message);
	}

	if (loading) {
		return handleLoading();
	}
	
	return (
		<main>
			<TopBar />
			<Hero />
			<Section heading={'Our Heros'}/>
			<HeroCardContainer>
				{data.heroes.map((hero) => (
					<HeroCard key={hero.name} {...hero} />	
				))}
			</HeroCardContainer>
			<Typography.ParagraphTiny>-By Alireza Keshmiry 01032021</Typography.ParagraphTiny>
			<Footer />
		</main>
	);
};
