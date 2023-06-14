import React, { Component } from "react";
import { Col, Row, Container } from "./Grid";
import { Input, FormBtn } from "./Form";
import Jumbotron from "./Jumbotron";
import API from "../../utils/API";
import ArticleCard from "./ArticleCard"
import Navbar from "../navbar/Navbar";

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
      .then(res => this.setState({savedArticles: res.data}))
      .catch(err => console.log(err))

  handleInputChange = event => {
  	const { name,value } = event.target;
  	this.setState({
  		[name]: value
  	});
  };

  handleFormSubmit = event => {
  	event.preventDefault();

  	if (this.state.topic && this.state.start && this.state.end) {
  		let {topic, start, end} = this.state;
  		start = start.replace(/-/g,"");
  		end = end.replace(/-/g,"");

  		API.searchArticles(topic, start, end)
  		.then(res => {
        let articles = res.data;
        let emptySearch = false;
        if (articles.length <= 0) {
          emptySearch = true;
        }
        this.setState({articles, emptySearch, topic:"", start:"", end:""})
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
      <Navbar/>
      <Container> 
	      <Jumbotron 
	      	title = "News Article Scraper"
	      	lead = "Search for any News Article and Save Them 😊"
	      	// fontawesome = "fas fa-search"
	      />
	      <Row className="justify-content-center">
	      <Col size="10">
	      	<div>
	      	

	      	<div className="card-body">
	  		<form>
	  		<label>Topic</label>
	  		<Input
		  		 value = {this.state.topic}
		  		 onChange = {this.handleInputChange}
		  		 name = "topic"
		  		 placeholder = "Enter a topic"
	  		 />
	  		 <label>Start Date</label>
	  		 <Input
	  		 	value ={this.state.start}
	  		 	onChange = {this.handleInputChange}
	  		 	name = "start"
	  		 	type = "date"
	  		 />
	  		 <label>End Date</label>
	  		 <Input
	  		 	value ={this.state.end}
	  		 	onChange = {this.handleInputChange}
	  		 	name = "end"
	  		 	type = "date"
	  		 />

	  		 <FormBtn
		  		 disabled = {!(this.state.topic && this.state.start && this.state.end)}
		  		 onClick = {this.handleFormSubmit}
	  		  >
	  		  Submit
	  		 </FormBtn>

	  		</form>
	  		</div>
	  		</div>
	  	 </Col>
	  	</Row>

        <Row className="justify-content-center">
          <Col size="10">
            {this.state.emptySearch
            ?
            <h3 className="text-center mt-2">No results found. Please try another query.</h3>
            :
              this.state.articles.map((article, i) => (
              <ArticleCard 
                title = {article.title}
                description = {article.description}
                img = {article.img}
                url = {article.url}
                save = {() => this.saveArticle(i)}
                alreadySaved = {this.checkSaved(article)}
                key = {i}
              />))
            }
          </Col>
        </Row>

        
      </Container>
      </>
    );
  }
}

export default Search;
