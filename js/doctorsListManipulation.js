// to load the contents to the webpage
var modal = document.getElementById('myModal');
let row = '<h1>Doctors List</h1>';
row += '<table id="doctors_list">'
row += '<th>List of Doctors in San Francisco</th>';
for (let i = 0; i < doctorsDetailsList.length; i++) {
  row += `<tr><td><a class="doctors" onclick="doctor_detail(${i})">${doctorsDetailsList[i]["name"]} </a></td></tr>`;
}
row += '</table>'
document.getElementById('root').innerHTML = row;