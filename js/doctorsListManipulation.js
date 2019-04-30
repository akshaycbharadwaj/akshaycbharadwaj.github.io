let row = '<th>List of Doctors in San Francisco</th>';
for (let i = 0; i < doctorsDetailsList.length; i++) {
  row += `<tr><td><a target="__blank" href="html/doctors_details.html?${i}">${doctorsDetailsList[i]["name"]} </a></td></tr>`;
}
document.getElementById('doctors_list').innerHTML = row;