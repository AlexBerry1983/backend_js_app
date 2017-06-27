var MongoClient = require('mongodb').MongoClient;

var BookQuery = function(){
  this.url = 'mongodb://localhost:27017/ratings_site';
}

BookQuery.prototype = {
  all: function(onQueryFinsished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('books');
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        })
      }
    })
  }

};

module.exports = BookQuery;
