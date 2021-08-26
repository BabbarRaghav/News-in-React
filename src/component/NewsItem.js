import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://image.cnbcfm.com/api/v1/image/106933045-1629902815272-51382291327_518a3dbfe2_o.jpg?v=1629902994" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
