import {StyledGridContainer} from '../styles/StyledGridContainer';
import FollowerCard from '../elements/FollowerCard';

const FollowerTrackingCards = ({data}) => {
    return (<StyledGridContainer>
        {data.map(obj => (
            <FollowerCard data={obj} key={obj.social_media} />
        ))}
    </StyledGridContainer>);
};

export default FollowerTrackingCards;