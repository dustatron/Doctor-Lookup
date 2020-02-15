import { GetDoctor } from "./../js/doctor-service";
import { UI } from "./../js/ui";
import { Location } from "./../js/location-service";

import "./../scss/main.scss";
import $ from "jquery";

const location = new Location();
let getDoctor = new GetDoctor();

//////////////////////////////////////
////////  Document Starts  //////////
$(document).ready(function() {
  $(".container").fadeIn();
  let ui = new UI(getDoctor);

  ///////////////////////////////////////
  ///////// submit button  /////////////
  $("form").submit((event) => {
    event.preventDefault();
    let inputKeyWord = $("#key-word").val();
    let inputDocName = $("#doctor-name").val();
    let inputCity = $("#city").val();

    //send inputs to objects
    getDoctor.addInput(inputKeyWord, inputDocName);
    ui.clearInputs();

    //Show loading view
    $(".output").html("");
    $(".loading").show();
    $(".city-box").hide();

    //check if city is empty
    if (inputCity) {
      //Check that a search term have been entered
      if (inputKeyWord || inputDocName) {
        //Search Terms found, run Search
        renderDoctorList();
      } else {
        $(".loading").hide();
        $(".output").html("<div class='text-center'><strong>No search terms were provided</strong></div>");
      }
    } else {
      $(".loading").hide();
      $(".output").html("<div class='text-center'><strong>No entered</strong></div>");
    }

    //quest querys from APIs
    async function renderDoctorList() {
      const locationData = await location.getLatLong(inputCity);
      if (!locationData[0].components.city) {
        $(".loading").hide();
        $(".output").html("<div class='text-center'><strong>Could not find that city Please try again</strong></div>");
      } else {
        await getDoctor.setLocaiton(
          locationData[0].geometry,
          locationData[0].components.city,
          locationData[0].components.state
        ); //send locaiton data to doctor object

        const docList = await getDoctor.returnList(); //make doctor query
        $(".loading").hide(); // Turn off loading animation

        //check that doctor list has data
        if (docList.length === 0) {
          $(".output").html("<div class='text-center'><strong>Zero Results Please try again</strong></div>");
        } else {
          ui.printCity(); //show city above list
          ui.renderList(docList); //print linst to screen
        }
      }
    }
  });
});
