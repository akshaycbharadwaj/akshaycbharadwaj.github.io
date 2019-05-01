//onclick event to lead the modal
const doctor_detail = (doctor_id) => {
  modal.style.display = "block";
  let similar_doctors_row = '';
  document.getElementsByClassName('modal_header')[0].innerHTML = `<h1>${doctorsDetailsList[doctor_id]['name']}</h1>`;
  similar_doctors_row += `<table id="doctors_details">`;
  similar_doctors_row += '<th>Doctors Names</th>';
  similar_doctors_row += `<tr><td><b> Hospital/Clinic </b></td><td>${doctorsDetailsList[doctor_id]['hospital']}</td></tr>`;
  similar_doctors_row += `<tr><td><b> Speciality </b></td><td>${doctorsDetailsList[doctor_id]['type']}</td></tr>`;
  similar_doctors_row += `<tr><td><b> Address </b></td><td>${doctorsDetailsList[doctor_id]['address']}</td></tr>`;
  similar_doctors_row += '</table>'
  similar_doctors_row += '<h2>Similar Doctors</h2>';
  similar_doctors_row += `<table id="similar_doctors">`;
  for (let i = 0; i < doctorsDetailsList.length; i++) {
    if (doctorsDetailsList[i]['type'] == doctorsDetailsList[doctor_id]['type'] && doctor_id != i) {
      similar_doctors_row += `<tr><td>${doctorsDetailsList[i]["name"]}</td></tr>`;
    }
  }
  similar_doctors_row += '</table>'
  document.getElementsByClassName('modal-body')[0].innerHTML = similar_doctors_row;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}