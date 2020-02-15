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
    $(".city-box").hide();

    getDoctor.addInput(inputKeyWord, inputDocName);
    ui.clearInputs();

    if (inputCity) {
      //Check that a search term has been entered
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
        );

        const docList = await getDoctor.returnList();
        $(".loading").hide(); // Turn off loading animation

        if (docList.length === 0) {
          $(".output").html("<div class='text-center'><strong>Zero Results Please try again</strong></div>");
        } else {
          ui.printCity();
          ui.renderList(docList); //print linst to screen
        }
      }
    }
  });
});
