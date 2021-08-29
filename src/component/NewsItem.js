import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageURL, newsURL, author, date, source } = this.props
        return (
            <div>
                <div className="card" style={{ height: "45rem" }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "50%", zIndex: "1" }}>
                        {source}
                    </span>
                    <img src={imageURL} className="card-img-top" alt="..." width="200" height="200" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsURL} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
