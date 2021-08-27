import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f960f87324774e189d71a9366c7f3b85&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({
            articles: parseData.articles, 
            totalResults: parseData.totalResults,
            loading: false
        })
    }

    handleNextClick = async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f960f87324774e189d71a9366c7f3b85&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({
            articles: parseData.articles,
            page: this.state.page + 1,
            loading: false
        })
    }
    handlePrevClick = async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f960f87324774e189d71a9366c7f3b85&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">Top Headline</h2>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {
                        !this.state.loading && this.state.articles.map(
                            (element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageURL={element.urlToImage?element.urlToImage:"https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"} newsURL={element.url}/>
                                </div>
                            }
                        )
                    }
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handlePrevClick}>Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-info" onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        )
    }
}

export default News
