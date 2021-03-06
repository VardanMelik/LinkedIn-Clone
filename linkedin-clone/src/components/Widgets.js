import React from 'react';
import './Widgets.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoOutlinedIcon />
            </div>
            {newsArticle('React LinkedIn Clone', 'Top news 1056')}
            {newsArticle('Coronavirus: Armenia updates', 'Top news 987')}
            {newsArticle('Coronavirus: UK updates', 'Top news 8964')}
            {newsArticle('Coronavirus: Russia updates', 'Top news 15630')}
            {newsArticle('Coronavirus: Armenia updates', 'Top news 987')}
            {newsArticle('Coronavirus: Armenia updates', 'Top news 987')}
            {newsArticle('Coronavirus: Armenia updates', 'Top news 987')}
            {newsArticle('Coronavirus: Armenia updates', 'Top news 987')}
            {newsArticle('Coronavirus: Armenia updates', 'Top news 987')}
        </div>
    )
}

export default Widgets
