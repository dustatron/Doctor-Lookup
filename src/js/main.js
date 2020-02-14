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

    //Check what input has data, if no data: return error, if data in both: return error
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
      //run query for Doctor Name
      if (option === "name") {
        const responce = await getDoctor.byName(inputDocName);
        if (responce.length > 0) {
          console.log(responce);
        } else {
          console.log("name bad");
          $(".output").html("sorry there was an issue getting your search");
        }
        //run query for Keyword
      } else if (option === "keyWord") {
        const responce = await getDoctor.byKeyWord(inputKeyWord);
        if (responce.length > 0) {
          console.log(responce);
          //report issue
        } else {
          console.log("keyword bad");
          $(".output").html("sorry there was an issue getting your search");
        }
      }
    }
    // $(".output").html(inputKeyWord + " " + inputDocName);
  });
});
