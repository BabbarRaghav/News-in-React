import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResult, settotalResult] = useState(0)

    const UpdateNews = async ()=> {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f960f87324774e189d71a9366c7f3b85&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parseData = await data.json()
        props.setProgress(70)
        console.log(parseData)
        setArticles(parseData.articles)
        settotalResult(parseData.totalResult)
        setLoading(false)
        props.setProgress(100)
    }
    useEffect(() => {
        UpdateNews()
    }, [])

    const handleNextClick = async () => {
        // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f960f87324774e189d71a9366c7f3b85&page=${this.state.page + 1}&pageSize=${props.pageSize}`
        // this.setState({loading: true})
        // let data = await fetch(url)
        // let parseData = await data.json()
        // console.log(parseData)
        // this.setState({
        //     articles: parseData.articles,
        //     page: this.state.page + 1,
        //     loading: false
        // })
        setPage(page+1)
        UpdateNews()
    }
    const handlePrevClick = async () => {
        // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f960f87324774e189d71a9366c7f3b85&page=${this.state.page - 1}&pageSize=${props.pageSize}`
        // this.setState({loading: true})
        // let data = await fetch(url)
        // let parseData = await data.json()
        // console.log(parseData)
        // this.setState({
        //     articles: parseData.articles,
        //     page: this.state.page - 1,
        //     loading: false
        // })
        setPage(page-1)
        UpdateNews()
    }

    const fetchMoreData = async () => {
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f960f87324774e189d71a9366c7f3b85&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        setArticles(articles.concat(parseData.articles))
        settotalResult(parseData.totalResult)
        setLoading(false)
    };

        return (
            <div className="container my-3">
                <h2 className="text-center">Top Headline</h2>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResult}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {
                                articles.map(
                                    (element) => {
                                        return <div className="col-md-4 my-3" key={element.url}>
                                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage ? element.urlToImage : "https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </InfiniteScroll>
                <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-info" onClick={handlePrevClick}>Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResult / props.pageSize)} type="button" className="btn btn-info" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        )
}

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: ""
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
