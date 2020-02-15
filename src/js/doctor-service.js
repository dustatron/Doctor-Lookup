export class GetDoctor {
  constructor() {
    // this.renterList = [];
    this.link = "https://api.betterdoctor.com/2016-03-01/doctors";
    this.miles = "50";
    this.location = "45.512230%2C-122.658722";
    this.limit = "10";
    this.keyword = "";
    this.name = "";
    this.city = "city";
    this.state = "state";
  }

  addInput(keyword, name) {
    this.keyword = keyword;
    this.name = name;
  }

  setLocaiton(arr, city, state) {
    this.location = arr.lat + "%2C" + arr.lng;
    this.city = city;
    this.state = state;
  }

  returnList() {
    if (this.keyword && this.name) {
      return this.byKeyWord(this.keyword);
    } else if (this.keyword) {
      return this.byKeyWord(this.keyword);
    } else if (this.name) {
      return this.byName(this.byName);
    } else {
      return "Both seach feilds are empty place try again";
    }
  }

  async byName() {
    let queryString = `?name=${this.name}&location=${this.location}%2C${this.miles}&user_location=${this
      .location}&skip=0&limit=${this.limit}&user_key=${process.env.API_KEY}`;
    let url = this.link + queryString;

    try {
      // API call
      let responce = await fetch(url);
      if (responce.status != 200) {
        return false;
      }
      const jsonBody = await responce.json();
      return this.simplify(jsonBody);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async byKeyWord() {
    let queryString = `?name=${this.name}&query=${this.keyword}&location=${this.location}%2C${this
      .miles}&user_location=${this.location}&skip=0&limit=${this.limit}&user_key=${process.env.API_KEY}`;
    let url = this.link + queryString;

    try {
      // API call
      let responce = await fetch(url);
      if (responce.status != 200) {
        return false;
      }
      const jsonBody = await responce.json();
      //create simple objects from json
      return this.simplify(jsonBody);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async byBoth() {
    let queryString = `?query=${this.keyword}&location=${this.location}%2C${this.miles}&user_location=${this
      .location}&skip=0&limit=${this.limit}&user_key=${process.env.API_KEY}`;
    let url = this.link + queryString;

    try {
      // API call
      let responce = await fetch(url);
      if (responce.status != 200) {
        return false;
      }
      const jsonBody = await responce.json();
      //create simple objects from json
      return this.simplify(jsonBody);
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
