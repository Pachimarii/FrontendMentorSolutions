import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {StyledHomePage} from '../styles/StyledHomePage';
import { GlobalStyle, lightTheme, darkTheme} from '../styles/Theme';
import Header from '../elements/Header';
import Attribution from '../elements/Attribution';
import FollowerTrackingCards from '../components/FollowerTrackingCards';
import OverviewTrackingCards from '../components/OverviewTrackingCards';




const HomePage = () => {
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    const followerData = [
        {
            "social_media": "facebook",
            "username": "@nathanf",
            "total": "1987",
            "changes_today": 12,
        },
        {
            "social_media": "twitter",
            "username": "@nathanf",
            "total": "1044",
            "changes_today": 99,
        },
        {
            "social_media": "instagram",
            "username": "@realnathanf",
            "total": "11k",
            "changes_today": 1099
        },
        {
            "social_media": "youtube",
            "username": "Nathan F.",
            "total": "8239",
            "changes_today": -144
        }
    ];

    const overviewData = [
        {
            "social_media":"facebook",
            "type": "Page Views",
            "count": "87",
            "trend": "up",
            "rate": "3%"
        },
        {
            "social_media":"facebook",
            "type": "Likes",
            "count": "52",
            "trend": "down",
            "rate": "2%"
        },
        {
            "social_media":"instagram",
            "type": "Likes",
            "count": "5462",
            "trend": "up",
            "rate": "2257%"
        },
        {
            "social_media":"instagram",
            "type": "Profile Views",
            "count": "52k",
            "trend": "up",
            "rate": "1375%"
        },
        {
            "social_media": "twitter",
            "type": "Retweets",
            "count": "117",
            "trend": "up",
            "rate": "303%"
        },
        {
            "social_media": "twitter",
            "type": "Likes",
            "count": "507",
            "trend": "up",
            "rate": "553%"
        },
        {
            "social_media": "youtube",
            "type": "Likes",
            "count": "107",
            "trend": "down",
            "rate": "19%"
        },
        {
            "social_media": "youtube",
            "type": "Total Views",
            "count": "1407",
            "trend": "down",
            "rate": "12%"
        }
    ]

    return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <StyledHomePage>
            <Header toggle={switchTheme} />
            <FollowerTrackingCards data={followerData} />
            <OverviewTrackingCards data={overviewData} />
            <Attribution />
        </StyledHomePage>
    </ThemeProvider>);
};

export default HomePage;