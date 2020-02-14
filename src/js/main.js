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
    getDoctor.byKeyWord(keyWord);
    getDoctor.byName(docName);
    $(".output").html(keyWord + " " + docName);
  });
});
