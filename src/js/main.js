import { GetDoctor } from "./../js/doctor-service";
import { UI } from "./../js/ui";
import "./../scss/main.scss";
import $ from "jquery";

$(document).ready(function() {
  let getDoctor = new GetDoctor();
  let ui = new UI();
  //get form submit button
  $("form").submit((event) => {
    event.preventDefault();
    let inputKeyWord = $("#key-word").val();
    let inputDocName = $("#doctor-name").val();
    $(".output").html("");
    $(".loading").show();

    //Check what input has data, if no data: return error, if data in both: return error
    if (inputKeyWord && inputDocName) {
      $(".output").html("only use one search field at a time");
      ui.clearInputs();
    } else if (inputKeyWord !== "") {
      runQuery("keyWord");
      ui.clearInputs();
    } else if (inputDocName !== "") {
      runQuery("name");
      ui.clearInputs();
    } else {
      $(".output").html("both search terms are empty");
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
          $(".output").html("Zero search results");
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
          $(".output").html("Zero search results");
        }
      }
    }
  });
});
