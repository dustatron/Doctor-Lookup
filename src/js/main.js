import { GetDoctor } from "./../js/doctor-service";
import { UI } from "./../js/ui";
import { Location } from "./../js/location-service";
import "./../scss/main.scss";
import $ from "jquery";

const location = new Location();

//////////////////////////////////////
////////  Document Starts  //////////
$(document).ready(function() {
  $(".container").fadeIn();
  let getDoctor = new GetDoctor();
  let ui = new UI(getDoctor);

  ///////////////////////////////////////
  ///////// submit button  /////////////
  $("form").submit((event) => {
    event.preventDefault();
    let inputKeyWord = $("#key-word").val();
    let inputDocName = $("#doctor-name").val();
    let inputCity = $("#city").val();

    //Show loading gif
    $(".output").html("");
    $(".loading").show();

    getDoctor.addInput(inputKeyWord, inputDocName);
    ui.clearInputs();

    async function renderDoctorList() {
      const locationData = await location.getLatLong(inputCity);
      if (locationData === 0) {
        $(".output").html("That city was not found");
      }
      console.log("from geo api", locationData[0].components.city);
      await getDoctor.setLocaiton(
        locationData[0].geometry,
        locationData[0].components.city,
        locationData[0].components.state
      );

      console.log("from doc class", getDoctor.city);

      const docList = await getDoctor.returnList();
      $(".loading").hide(); // Turn off loading animation

      if (docList.length === 0) {
        $(".output").html("<div class='text-center'><strong>Zero Results</strong></div>");
      } else {
        ui.printCity();
        ui.renderList(docList); //print linst to screen
      }
    }

    renderDoctorList();
  });
});
