import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=f960f87324774e189d71a9366c7f3b85&page=1"
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({articles: parseData.articles})
    }

    handleNextClick = async ()=>{
        console.log("Next")
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f960f87324774e189d71a9366c7f3b85&page=${this.state.page + 1}`
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({
            articles: parseData.articles,
            page: this.state.page + 1
        })
    }
    handlePrevClick = async ()=>{
        console.log("Previous")
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f960f87324774e189d71a9366c7f3b85&page=${this.state.page - 1}`
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Top Headline</h2>
                <div className="row">
                    {
                        this.state.articles.map(
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
                <button type="button" className="btn btn-info" onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        )
    }
}

export default News
