import $ from "jquery";

export class UI {
  constructor(doctor) {
    this.doctor = doctor;
  }

  //UI tools
  clearInputs() {
    $("#key-word").val("");
    $("#doctor-name").val("");
  }

  renderList(list) {
    let imageFemale = "https://img.icons8.com/cotton/64/000000/user-female--v4.png";
    let imageMale = "https://img.icons8.com/cotton/64/000000/user-male--v4.png";
    let renderList = "";
    list.forEach((i) => {
      let phone =
        i.phones[0].number.slice(0, 3) + "-" + i.phones[0].number.slice(3, 6) + "-" + i.phones[0].number.slice(6);

      if (i.image_url)
        renderList += `<div class="doc-box">
        <div class="doc-box--img"> 
          <img src="${i.gender === "female" ? imageFemale : imageMale}" alt="image of Dr. ${i.last_name} ">
        </div>
        <div class="doc-box--info">
          <div class="doc-box--info-top">
            Dr. ${i.first_name} ${i.middle_name} ${i.last_name}, ${i.title}
          </div>
          <div class="doc-box--info-middle">
          <ul> 
            <li> website : ${i.website
              ? "<a href=" + i.website + " target='_blank'>" + i.name + "</a>"
              : "No website provided"} </li>
            <li> Phone : ${phone} </li>
            <li> Accepts new patients : ${i.accepts_new_patients ? "Yes" : "No"} </li>
          </ul>
          </div>
          <div class="doc-box--info-bottom"> 
            ${i.visit_address.street} 
            ${i.visit_address.street2 ? "#" + i.visit_address.street2 : ""}, 
            ${i.visit_address.city},  
            ${i.visit_address.state}
          </div>
        </div>
      </div>`;
    });
    $(".output").html(renderList);
  }

  printCity() {
    $(".city-box").show().html("Showing results for " + this.doctor.city + " " + this.doctor.state);
  }
}
