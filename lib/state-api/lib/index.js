class DataApi {
  constructor(rawData) {
    this.data = {
      timestamp: new Date(),
      searchTerm: '',
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors)
    };
    this.lastSubscriptionId = 0;
    this.subscriptions = {};
    this.notifySubscribers = this.notifySubscribers.bind(this);
    this.lookupAuthor = this.lookupAuthor.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.startClock = this.startClock.bind(this);
    this.updateTimestamp = this.updateTimestamp.bind(this);
  }

  startClock() {
    setInterval(this.updateTimestamp, 1000);
  }

  updateTimestamp() {
    this.data.timestamp = new Date();
    this.notifySubscribers();
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

  subscribe(cb) {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  unsubscribe(subscriptionId) {
    delete this.subscriptions[subscriptionId];
  }

  notifySubscribers() {
    Object.values(this.subscriptions).forEach((cb) => cb());
  }

  setSearchTerm(searchTerm) {
    this.data.searchTerm = searchTerm;
    this.notifySubscribers();
  }

  lookupAuthor(authorId) {
    return this.data.authors[authorId];
  }
}

module.exports = DataApi;
