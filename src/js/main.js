// import { example } from './example';
import "./../scss/main.scss";
import $ from "jquery";

$(document).ready(function() {
  //get form submit button
  $("form").submit((event) => {
    event.preventDefault();
    let keyWord = $("#key-word").val();
    let docName = $("#doctor-name").val();

    //print to DOM
    $(".output").html(keyWord + " " + docName);
  });
});
