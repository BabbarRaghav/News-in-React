import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <div className="row">
                    <h2>Top Headline</h2>
                    <div className="col-md-4">
                        <NewsItem title="my title" description="my title always op" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="my title" description="my title always op" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="my title" description="my title always op" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
