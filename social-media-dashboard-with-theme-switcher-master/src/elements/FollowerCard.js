import {StyledFollowerCard} from '../styles/StyledFollowerCard';

const FollowerCard = ({data}) => {
    return (
        <StyledFollowerCard variation={data.social_media} negative={data.changes_today < 0 ? true : false}>
            <div className="top-border"></div>
            <div className="username-with-icon">
                <img className="follower-card-icon" 
                src={require("../imgs/icon-"+data.social_media+".svg").default} 
               
                alt={data.social_media+" icon"}/>
                {data.username}
            </div>
            <div className="follower-display">
                <p className="follower-number">{data.total}</p>
                followers
            </div>
            <div className="follower-variation">
                <img className="arrow" src={require("../imgs/icon-" + ((data.changes_today>0) ? "up":"down") + ".svg").default} alt={(data.changes_today>0) ? "up arrow" : "down arrow"}/>
                {Math.abs(data.changes_today)+" Today"}
            </div>
        </StyledFollowerCard>
    );
}

export default FollowerCard;