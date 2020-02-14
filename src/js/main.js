import { GetDoctor } from "./../js/doctor-service";
import "./../scss/main.scss";
import $ from "jquery";

$(document).ready(function() {
  let getDoctor = new GetDoctor();
  //get form submit button
  $("form").submit((event) => {
    event.preventDefault();
    let inputKeyWord = $("#key-word").val();
    let inputDocName = $("#doctor-name").val();

    //Check what input has data
    if (inputKeyWord && inputDocName) {
      $(".output").html("only use one search field at a time");
      $("#key-word").val("");
      $("#doctor-name").val("");
    } else if (inputKeyWord !== "") {
      runQuery("keyWord");
      $("#key-word").val("");
    } else if (inputDocName !== "") {
      runQuery("name");
      $("#doctor-name").val("");
    } else {
      $(".output").html("both search terms are empty");
    }

    async function runQuery(option) {
      if (option === "name") {
        console.log("name");
        // const responce = await getDoctor.byName(inputDocName);
      } else if (option === "keyWord") {
        console.log("keyword");
        // const responce = await getDoctor.byKeyWord(inputKeyWord);
      }
    }
    // $(".output").html(inputKeyWord + " " + inputDocName);
  });
});
