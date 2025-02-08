import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: "us",
    category: "general",
    pageSize: 6
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  
  

  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }


  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2eabe1dbf6b04962bc58e9efb998b8a7&pageSize=6`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData); 
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2eabe1dbf6b04962bc58e9efb998b8a7&page=${this.state.page - 1}&pageSize=6`;
    this.setState({page: this.state.page - 1})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData); 
    this.setState({ articles: parsedData.articles })
  }
  

  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2eabe1dbf6b04962bc58e9efb998b8a7&page=${this.state.page + 1}&pageSize=6`;  
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData); 
    this.setState({ articles: parsedData.articles })
    this.setState({page: this.state.page + 1})
  }

  render() {
    return (
      <div className="container my-3" style={{color:'rgb(100, 100, 219)'}}>
        <h2 style={{"text-align": "center"}}>Top Headlines</h2>
        <div className="row" >
          {this.state.articles.map((element)=>{

          return <div className="col-md-4 my-3"  key={element.url} >
            <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
         </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
