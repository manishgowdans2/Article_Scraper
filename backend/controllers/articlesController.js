const db = require("../models");

module.exports = {
  //to find all the articles stored in database
  findAll: async (req, res) => {
    try {
      res.json(await db.Article.find(req.query).sort({ date: -1 }));
    } catch(err) {
      res.status(422).json(err);
    }
  },

  //to store and create a article in database
  create: async (req, res) => {
    try {
      res.json(await db.Article.create(req.body));
    } catch(err) {  
      res.status(422).json(err);
    }
  },
  remove: async (req, res) => {
    try {
      const matchedArticle = await db.Article.findById({ _id: req.params.id });
      res.json(await matchedArticle.remove()); 
    } catch(err) {
      res.status(422).json(err);
    }
  }
}
