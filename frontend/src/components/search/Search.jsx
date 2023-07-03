import React, { Component } from "react";
import API from "../../utils/API";
import ArticleCard from "./ArticleCard/ArticleCard"
import Navbar from "../navbar/Navbar";
import "./search.css"

class Search extends Component {
  state = {
    articles: [],
    savedArticles: [],
    topic: "",
    start: "",
    end: "",
    emptySearch: false
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  checkSaved = article => {
    return this.state.savedArticles.filter(elem => elem.url === article.url).length > 0;
  }

  getSavedArticles = () =>
    API.getSavedArticles()
      .then(res => this.setState({ savedArticles: res.data }))
      .catch(err => console.log(err))

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.topic && this.state.start && this.state.end) {
      let { topic, start, end } = this.state;
      start = start.replace(/-/g, "");
      end = end.replace(/-/g, "");

      API.searchArticles(topic, start, end)
        .then(res => {
          let articles = res.data;
          let emptySearch = false;
          if (articles.length <= 0) {
            emptySearch = true;
          }
          this.setState({ articles, emptySearch, topic: "", start: "", end: "" })
        })
        .catch(err => console.log(err));

    };
  };

  saveArticle = index => {
    API.saveArticle(this.state.articles[index])
      .then(res => this.getSavedArticles())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <Navbar />

        <div className="title">
          <div className="sub_title">
            News Article Scraper</div>
          <div>Search for any News Article and Save Them 😊</div>
        </div>





        <div className="card-body">
          <form>
            <label>Topic</label>
            <input
              className="form-control"
              value={this.state.topic}
              onChange={this.handleInputChange}
              name="topic"
              placeholder="Enter a topic"
              required
            />
            <label>Start Date</label>
            <input
              className="form-control"
              value={this.state.start}
              onChange={this.handleInputChange}
              name="start"
              type="date"
              required
            />
            <label>End Date</label>
            <input
              className="form-control"
              value={this.state.end}
              onChange={this.handleInputChange}
              name="end"
              type="date"
              required
            />

            <div>

              <button
                className="btn2"
                onClick={this.handleFormSubmit}
              >
                Search
              </button>




            </div>

          </form>





          {this.state.emptySearch
            ?
            <h3 className="text-center mt-2">No results found. Please try another query.</h3>
            :
            this.state.articles.map((article, i) => (
              <ArticleCard
                title={article.title}
                description={article.description}
                img={article.img}
                url={article.url}
                save={() => this.saveArticle(i)}
                alreadySaved={this.checkSaved(article)}
                key={i}
              />))
          }


        </div>

      </>
    );
  }
}

export default Search;
