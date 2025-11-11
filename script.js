

let table = document.getElementById("sampleTable");

	let count=3;
function insert_Row() {

let tr=document.createElement("tr")
let td1=document.createElement("td")
td1.innerText=`Row${count} Cell1`

let td2=document.createElement("td")
td2.innerText=`Row${count} Cell2`
tr.append(td1,td2)

table.append(tr)
	count++;
}


