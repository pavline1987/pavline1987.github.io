// api url
const api_url =
	"https://api.cronoscan.com/api?module=account&action=balance&address=0xCeb02a59807Cb272ce76a843857877BaB2821352&apikey=G5M7R3YXI95C3J6UVI443X61B2RMHFUB4K";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>status</th>
		<th>message</th>
		<th>result</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${status} </td>
	<td>${message}</td>
	<td>${result}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
