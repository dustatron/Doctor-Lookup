export class GetDoctor {
  constructor() {
    // this.renterList = [];
    this.link = "https://api.betterdoctor.com/2016-03-01/doctors";
    this.miles = "50";
    this.location = "45.512230%2C-122.658722";
    this.limit = "10";
    this.keyword = "";
    this.name = "";
  }

  async byName(name) {
    let queryString = `?name=${name}&location=${this.location}%2C${this.miles}&user_location=${this
      .location}&skip=0&limit=${this.limit}&user_key=${process.env.API_KEY}`;
    let url = this.link + queryString;

    try {
      // API call
      let reponce = await fetch(url);
      if (reponce.status != 200) {
        return false;
      }
      const jsonBody = await reponce.json();
      return this.simplify(jsonBody);
      // console.log("name search", makeJson);
    } catch (error) {
      console.error(error);
      return false;
    }
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
      const jsonBody = await reponce.json();
      //create simple objects from json
      return this.simplify(jsonBody);
      // console.log("keyword search", makeJson);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  simplify(body) {
    let renterList = [];
    body.data.forEach((doc) => {
      const { accepts_new_patients, name, website, visit_address, phones } = doc.practices[0];
      const { first_name, middle_name, last_name, title, image_url, gender, bio } = doc.profile;
      const tempObj = {
        accepts_new_patients,
        name,
        website,
        visit_address,
        phones,
        first_name,
        middle_name,
        last_name,
        title,
        image_url,
        gender,
        bio
      };
      renterList.push(tempObj);
    });

    return renterList;
  }
}
