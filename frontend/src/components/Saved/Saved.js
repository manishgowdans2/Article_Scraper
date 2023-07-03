import React, { Component } from "react";
import API from "../../utils/API";
import ArticleCard from "../search/ArticleCard/ArticleCard";
import Navbar from "../navbar/Navbar";

class Saved extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => 
    API.getSavedArticles()
      .then(res => this.setState({savedArticles: res.data}))
      .catch(err => console.log(err))

  deleteArticle = id => 
    API.deleteSavedArticle(id)
      .then(res => this.getSavedArticles())
      .catch(err => console.log(err));

  render() {
    return (
         <>
          <Navbar/>
      <div className="card-body">
       
      
            {this.state.savedArticles.map((article, i) => (
              <ArticleCard 
                title = {article.title}
                description = {article.description}
                img = {article.img}
                url = {article.url}
                delete = {() => this.deleteArticle(article._id)}
                alreadySaved = {true}
                key = {i}
              />
            ))}
        
      </div>
      </>
   
    );
  }
}

export default Saved;
