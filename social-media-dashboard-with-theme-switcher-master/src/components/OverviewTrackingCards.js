import { StyledGridContainer } from '../styles/StyledGridContainer';
import { StyledOverviewTrackingSection } from '../styles/StyledOverviewTrackingSection';
import OverviewCard from '../elements/OverviewCard';

const OverviewTrackingCards = ({data}) => {
    return (
        <StyledOverviewTrackingSection> 
            <h3 className = "overview-header"> Overview - Today </h3>
            <StyledGridContainer>
                {data.map(obj => (
                    <OverviewCard data={obj} key={obj.social_media+"_"+obj.type}/>
                ))}
            </StyledGridContainer>
        </StyledOverviewTrackingSection>
    );
};

export default OverviewTrackingCards;
