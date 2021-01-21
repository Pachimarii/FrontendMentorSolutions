import {StyledOverviewCard} from '../styles/StyledOverviewCard';

const OverviewCard = ({data}) => (
    <StyledOverviewCard trend={data.trend}>
        <div className="overview-row1">
            <p className="type">{data.type}</p>
            <img className="overview-icon" 
                alt={data.social_media+' icon'} 
                src={require('../imgs/icon-'+data.social_media+'.svg').default}/>
        </div>

        <div className="overview-row2">
            <p className="count">{data.count}</p>
            <div className="trend-rate">
                <img className="trend" 
                alt={'trend '+data.trend+' icon'} 
                src={require('../imgs/icon-'+data.trend+'.svg').default}/>
                {data.rate}
            </div>
        </div>
    </StyledOverviewCard>
);

export default OverviewCard;