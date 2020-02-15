export class Location {
  async getLatLong(city) {
    try {
      const url = `https://api.opencagedata.com/geocode/v1/json?key=${process.env
        .GEO_API_KEY}&q=${city}&pretty=1&no_annotations=1`;

      let responce = await fetch(url);
      if (responce.status != 200) {
        return false;
      }
      const geoData = await responce.json();
      return geoData.results;
    } catch (error) {
      console.error(error);
    }
  }
}
