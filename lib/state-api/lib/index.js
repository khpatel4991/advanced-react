class DataApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors)
    };
    this.lookupAuthor = this.lookupAuthor.bind(this);
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getState() {
    return this.data;
  }

  lookupAuthor(authorId) {
    return this.data.authors[authorId];
  }
}

module.exports = DataApi;
