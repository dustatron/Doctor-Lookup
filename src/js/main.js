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
  let ui = new UI();

  ///////////////////////////////////////
  ///////// submit button  /////////////
  $("form").submit((event) => {
    event.preventDefault();
    let inputKeyWord = $("#key-word").val();
    let inputDocName = $("#doctor-name").val();
    // let inputCity = $("#city").val();

    //Show loading gif
    $(".output").html("");
    $(".loading").show();

    getDoctor.addInput(inputKeyWord, inputDocName);
    ui.clearInputs();

    // location.getLatLong(inputCity);

    async function renderDoctorList() {
      console.log("render hans been run", getDoctor.keyword, getDoctor.name);
      const docList = await getDoctor.returnList();
      $(".loading").hide();
      ui.renderList(docList);
      await console.log("docList", docList);
    }

    renderDoctorList();
  });
});
