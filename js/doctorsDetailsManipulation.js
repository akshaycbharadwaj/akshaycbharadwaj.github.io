let doctor_id = window.location.href.split('?')[1];
let doctor_det = '';
let similar_doctors_row = '<th>Doctors Names</th>';
document.getElementById('doctor_name').innerHTML = doctorsDetailsList[doctor_id]['name'];
doctor_det += `<tr><td><b> Hospital/Clinic </b></td><td>${doctorsDetailsList[doctor_id]['hospital']}</td></tr>`;
doctor_det += `<tr><td><b> Speciality </b></td><td>${doctorsDetailsList[doctor_id]['type']}</td></tr>`;
doctor_det += `<tr><td><b> Address </b></td><td>${doctorsDetailsList[doctor_id]['address']}</td></tr>`;
document.getElementById('doctors_details').innerHTML = doctor_det;

for (let i = 0; i < doctorsDetailsList.length; i++) {
  if (doctorsDetailsList[i]['type'] == doctorsDetailsList[doctor_id]['type'] && doctor_id != i) {
    similar_doctors_row += `<tr><td><a target="__blank" href="doctors_details.html?${i}">${doctorsDetailsList[i]["name"]} </a></td></tr>`;
  }
}
document.getElementById('similar_doctors').innerHTML = similar_doctors_row;