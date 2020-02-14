import { GetDoctor } from "./../js/doctor-service";
import "./../scss/main.scss";
import $ from "jquery";

$(document).ready(function() {
  let getDoctor = new GetDoctor();
  //get form submit button
  $("form").submit((event) => {
    event.preventDefault();
    let keyWord = $("#key-word").val();
    let docName = $("#doctor-name").val();

    //print to DOM
    if (keyWord === "") {
      getDoctor.byName(docName);
    } else if (docName === "") {
      getDoctor.byKeyWord(keyWord);
    }
    $(".output").html(keyWord + " " + docName);
  });
});
