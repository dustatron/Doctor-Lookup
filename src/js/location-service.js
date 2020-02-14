export class Location {
  async getLatLong(city) {
    try {
      const url = `https://api.opencagedata.com/geocode/v1/json?key=${process.env
        .GEO_API_KEY}&q=${city}&pretty=1&no_annotations=1`;
      console.log(url);
      let responce = await fetch(url);

      const geoData = await responce.json();
      console.log(geoData);
    } catch (error) {
      console.error(error);
    }
  }
}
