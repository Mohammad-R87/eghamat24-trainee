// LocalStorage Array
let data = (localStorage.getItem('Arrivals_And_Departures')) ? JSON.parse(localStorage.getItem('Arrivals_And_Departures')) : {
    Arrivals_And_Departures: [],
};
// Variables
let Record = [];
let submit = document.getElementById('add');
let removeIcon = `<i class="fas fa-trash"></i>`;

// for (let i = 0; i <= 1000; i++) {
//     let value = data.Arrivals_And_Departures.push(i);
//     addRecordToDOM(value);
// }

// Function Render Record
renderRecord();

// Events
submit.addEventListener('click', e => {
    let entryDate = document.getElementById('entry-date').value;
    let exitDate = document.getElementById('exit-date').value;

    if (entryDate == "" || exitDate == "") {
        alert('لطفا تمامی فیلد های مورد نظر رو پر کنید');
        return;
    }
    Record.push(entryDate, exitDate);
    data.Arrivals_And_Departures.push(Record);
    addRecordToDOM(Record);
    dataObjectUpdated();
    Record = [];

    entryDate.value = "";
    exitDate.value = "";
})

// Logical Program
function renderRecord() {
    if (!data.Arrivals_And_Departures.length) return;

    for (let i = 0; i < data.Arrivals_And_Departures.length; i++) {
        let value = data.Arrivals_And_Departures[i];
        addRecordToDOM(value);
    }
}

function dataObjectUpdated() {
    localStorage.setItem('Arrivals_And_Departures', JSON.stringify(data));
}

function addRecordToDOM(text) {
    let tbody = document.getElementById('tbody');
    let row = document.createElement('tr');

    let entryDate = document.createElement('td');
    entryDate.innerText = text[0]
    let exitDate = document.createElement('td');
    exitDate.innerText = text[1]

    let action = document.createElement('td');
    let remove = document.createElement('button');
    remove.classList.add('btn-danger');
    remove.innerHTML = removeIcon;
    remove.addEventListener('click', removeRecord)

    row.appendChild(entryDate);
    row.appendChild(exitDate);

    row.appendChild(action);
    action.appendChild(remove);

    tbody.insertBefore(row, tbody.childNodes[0])
}

function removeRecord() {
    let record = this.parentNode.parentNode;
    let parent = record.parentNode;
    let id = parent.id;
    let value = record.innerText;

    if (id === 'tbody') {
        data.Arrivals_And_Departures.splice(data.Arrivals_And_Departures.indexOf(value), 1);
    }
    dataObjectUpdated();
    parent.removeChild(record);
}

