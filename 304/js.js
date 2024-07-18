let i=1;
const data = [
   [i++, "Anita", "2198036755", "./data/Anita 2198036755/1.bmp", "./data/Anita 2198036755/2.bmp", "./data/Anita 2198036755/3.bmp", "./data/Anita 2198036755/4.bmp", "./data/Anita 2198036755/5.bmp"],
    [i++, "garima", "2198041699", "./data/garima 2198041699/1.bmp", "./data/garima 2198041699/2.bmp", "./data/garima 2198041699/3.bmp", "./data/garima 2198041699/4.bmp", "./data/garima 2198041699/5.bmp"],
    [i++, "Pratibha", "2198039525", "./data/Pratibha 2198039525/1.bmp", "./data/Pratibha 2198039525/2.bmp", "./data/Pratibha 2198039525/3.bmp", "./data/Pratibha 2198039525/4.bmp", "./data/Pratibha 2198039525/5.bmp"],
    [i++, "Priya Sharma", "2197954962", "./data/Priya Sharma 2197954962/1.bmp", "./data/Priya Sharma 2197954962/2.bmp", "./data/Priya Sharma 2197954962/3.bmp", "./data/Priya Sharma 2197954962/4.bmp", "./data/Priya Sharma 2197954962/5.bmp"],
    [i++, "shivanshi pal", "2198038122", "./data/shivanshi pal 2198038122/1.bmp", "./data/shivanshi pal 2198038122/2.bmp", "./data/shivanshi pal 2198038122/3.bmp", "./data/shivanshi pal 2198038122/4.bmp", "./data/shivanshi pal 2198038122/5.bmp"],
    [i++, "tannu", "2198039134", "./data/tannu 2198039134/1.bmp", "./data/tannu 2198039134/2.bmp", "./data/tannu 2198039134/3.bmp", "./data/tannu 2198039134/4.bmp", "./data/tannu 2198039134/5.bmp"],
    [i++, "Ujma", "2198039218", "./data/Ujma 2198039218/1.bmp", "./data/Ujma 2198039218/2.bmp", "./data/Ujma 2198039218/3.bmp", "./data/Ujma 2198039218/4.bmp", "./data/Ujma 2198039218/5.bmp"],
];

let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toString().toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });

    const contrastRange = document.getElementById('contrast');
    contrastRange.addEventListener('input', function () {
        const contrastValue = this.value;
        document.querySelector('.contrast-value').textContent = `${contrastValue}%`;
        updateImageContrast(contrastValue);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 3 && index <= 7) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = `invert(100%) contrast(${document.getElementById('contrast').value}%)`; // Color invert and apply contrast
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateImageContrast(contrastValue) {
    const images = document.querySelectorAll('td img');
    images.forEach(img => {
        img.style.filter = `invert(100%) contrast(${contrastValue}%)`;
    });
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
