export class GetDoctor {
  constructor() {
    this.listString = [];
    this.link = "https://api.betterdoctor.com/2016-03-01/doctors";
    this.miles = "50";
    this.location = "45.512230%2C-122.658722";
    this.limit = "10";
  }

  byName(name) {
    console.log(name);
    //take name and run async funtion
    //have if statement for status 200
    //push array of objects to this.listString
  }

  async byKeyWord(keyWord) {
    let queryString = `?query=${keyWord}&location=${this.location}%2C${this.miles}&user_location=${this
      .location}&skip=0&limit=${this.limit}&user_key=${process.env.API_KEY}`;
    let url = this.link + queryString;

    try {
      // API call
      let reponce = await fetch(url);
      if (reponce.status != 200) {
        return false;
      }
      let makeJson = await reponce.json();
      console.log(makeJson);
    } catch (error) {
      console.error(error);
      return false;
    }
    //take keyWord and run async funtion
    //have if statement for status 200
    //push array of objects to this.listString
  }
}
