import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Magdalena Petrova",
          "title": "The International Space Station will soon be retired, but a replacement likely won't come from NASA - CNBC",
          "description": "The International Space Station will likely be retired within the decade. NASA hopes to save money by having commercial companies build the next space outpost.",
          "url": "https://www.cnbc.com/2021/08/26/heres-why-the-next-space-station-will-be-commercial.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/106933045-1629902815272-51382291327_518a3dbfe2_o.jpg?v=1629902994",
          "publishedAt": "2021-08-26T12:00:01Z",
          "content": "The International Space Station got its start in 1998 when its first segments were launched, and it's now starting to show its age.\r\nSince 2000, the ISS has continuously housed a rotating group of as… [+1109 chars]"
        },
        {
          "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
          },
          "author": "Yang Jie, Stephanie Yang, Yoko Kubota",
          "title": "World’s Largest Chip Maker to Raise Prices, Threatening Costlier Electronics - The Wall Street Journal",
          "description": "TSMC to increase prices of most advanced chips by roughly 10%; less advanced chips will cost about 20% more",
          "url": "https://www.wsj.com/articles/worlds-largest-chip-maker-to-raise-prices-threatening-costlier-electronics-11629978308",
          "urlToImage": "https://images.wsj.net/im-391586/social",
          "publishedAt": "2021-08-26T11:45:00Z",
          "content": "The worlds largest contract chip maker is raising prices by as much as 20%, according to people familiar with the matter, a move that could result in consumers paying more for electronics. \r\n Taiwan … [+1015 chars]"
        },
        {
          "source": {
            "id": "cbs-news",
            "name": "CBS News"
          },
          "author": "Zoe Zoe",
          "title": "ESPN takes Rachel Nichols off NBA coverage and cancels her show - CBS News",
          "description": "The decision follows backlash over leaked comments she made about her former colleague Maria Taylor.",
          "url": "https://www.cbsnews.com/news/rachel-nichols-espn-nba-coverage-the-jump/",
          "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2021/07/06/0352871d-80b0-4f8d-85c9-d4333104c31e/thumbnail/1200x630/241e1a216055a5c5320855935f978bee/gettyimages-1091906438.jpg",
          "publishedAt": "2021-08-26T11:41:11Z",
          "content": "ESPN is pulling reporter Rachel Nichols from its NBA coverage and canceling her show \"The Jump,\" the network confirmed Wednesday. The decision follows backlash over leaked comments she made about her… [+1625 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Maeve Reston, CNN",
          "title": "Recall candidates target California Gov. Gavin Newsom and his top GOP rival Larry Elder in debate - CNN",
          "description": "As polls have tightened dramatically in recent weeks in the effort to recall Gavin Newsom, the Democratic California governor and his allies have been warning of doomsday scenarios if he is ousted on September 14 and replaced by a conservative Republican bent…",
          "url": "https://www.cnn.com/2021/08/26/politics/california-recall-debate/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210823013853-01-gavin-newsom-0817-super-tease.jpg",
          "publishedAt": "2021-08-26T11:27:00Z",
          "content": "(CNN)As polls have tightened dramatically in recent weeks in the effort to recall Gavin Newsom, the Democratic California governor and his allies have been warning of doomsday scenarios if he is oust… [+8887 chars]"
        },
        {
          "source": {
            "id": "the-verge",
            "name": "The Verge"
          },
          "author": "James Vincent",
          "title": "Celebrate Jeff Bezos’ big day out to space with a $69 miniature dick rocket - The Verge",
          "description": "Jeff Bezos had a Very Nice Day in space on his Blue Origin, New Shephard rocket. You will never have a Very Nice Day in space, but you can buy a 1/66th scale model of Jeff’s rocket for just $69.99. That’s capitalism, baby.",
          "url": "https://www.theverge.com/tldr/2021/8/26/22642560/blue-origins-new-shephard-model-rocket-estes",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/xvzWWoFiB-KfSA7IRLYQukVvg9M=/0x134:1400x867/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22806524/blue_origin_new_shepherd_rocket_model.jpg",
          "publishedAt": "2021-08-26T11:11:30Z",
          "content": "Filed under:\r\nA working, 1/66th replica of Blue Origins New Shephard rocket"
        }
      ]
    constructor(){
        super();
        console.log("hello bitch")
        this.state = {
            articles: this.articles
        }
    }

    render() {
        return (
            <div className="container my-3">
                <div className="row">
                    <h2>Top Headline</h2>
                    <div className="col-md-4">
                        <NewsItem title="my title" description="my title always op" imageURL="https://image.cnbcfm.com/api/v1/image/106933045-1629902815272-51382291327_518a3dbfe2_o.jpg?v=1629902994"/>
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
