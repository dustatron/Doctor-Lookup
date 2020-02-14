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
    let inputCity = $("#city").val();
    //Show loading gif
    $(".output").html("");
    $(".loading").show();

    location.getLatLong(inputCity);

    //Check what input has data, if no data: return error, if data in both: return error
    if (inputKeyWord && inputDocName) {
      $(".loading").hide();
      $(".output").html("<div class='error'>Please search for one query at a time</div>");
      ui.clearInputs();
    } else if (inputKeyWord !== "") {
      runQuery("keyWord");
      ui.clearInputs();
    } else if (inputDocName !== "") {
      runQuery("name");
      ui.clearInputs();
    } else {
      $(".loading").hide();
      $(".output").html("<div class='error'>Both search terms are empty</div>");
    }

    async function runQuery(option) {
      //run query for Doctor Name
      if (option === "name") {
        const docList = await getDoctor.byName(inputDocName);
        $(".loading").hide();
        if (docList.length > 0) {
          ui.renderList(docList);
        } else {
          $(".loading").hide();
          $(".output").html("<div class='error'>Zero search results</div>");
        }
        //run query for Keyword
      } else if (option === "keyWord") {
        const docList = await getDoctor.byKeyWord(inputKeyWord);
        if (docList.length > 0) {
          $(".loading").hide();
          ui.renderList(docList);
          //report issue
        } else {
          $(".loading").hide();
          $(".output").html("<div class='error'>Zero search results</div>");
        }
      }
    }
  });
});
