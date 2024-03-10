// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++,"akristisingh","2197933761","./301/akristisingh2197933761/1.bmp","./301/akristisingh2197933761/2.bmp","./301/akristisingh2197933761/3.bmp","./301/akristisingh2197933761/4.bmp","./301/akristisingh2197933761/5.bmp"],
[i++,"ankita","2197932329","./301/ankita2197932329/1.bmp","./301/ankita2197932329/2.bmp","./301/ankita2197932329/3.bmp","./301/ankita2197932329/4.bmp","./301/ankita2197932329/5.bmp"],
[i++,"antima","2197932979","./301/antima2197932979/1.bmp","./301/antima2197932979/2.bmp","./301/antima2197932979/3.bmp","./301/antima2197932979/4.bmp","./301/antima2197932979/5.bmp"],
[i++,"anupama","2197948052","./301/anupama2197948052/1.bmp","./301/anupama2197948052/2.bmp","./301/anupama2197948052/3.bmp","./301/anupama2197948052/4.bmp","./301/anupama2197948052/5.bmp"],
[i++,"archana","2197931913","./301/archana2197931913/1.bmp","./301/archana2197931913/2.bmp","./301/archana2197931913/3.bmp","./301/archana2197931913/4.bmp","./301/archana2197931913/5.bmp"],
[i++,"ashu","2197949119","./301/ashu2197949119/1.bmp","./301/ashu2197949119/2.bmp","./301/ashu2197949119/3.bmp","./301/ashu2197949119/4.bmp","./301/ashu2197949119/5.bmp"],
[i++,"divya","2197936176","./301/divya2197936176/1.bmp","./301/divya2197936176/2.bmp","./301/divya2197936176/3.bmp","./301/divya2197936176/4.bmp","./301/divya2197936176/5.bmp"],
[i++,"mahaksharma","2197955121","./301/mahaksharma2197955121/1.bmp","./301/mahaksharma2197955121/2.bmp","./301/mahaksharma2197955121/3.bmp","./301/mahaksharma2197955121/4.bmp","./301/mahaksharma2197955121/5.bmp"],
[i++,"neelu","2197931974","./301/neelu2197931974/1.bmp","./301/neelu2197931974/2.bmp","./301/neelu2197931974/3.bmp","./301/neelu2197931974/4.bmp","./301/neelu2197931974/5.bmp"],
[i++,"poonam","2197934644","./301/poonam2197934644/1.bmp","./301/poonam2197934644/2.bmp","./301/poonam2197934644/3.bmp","./301/poonam2197934644/4.bmp","./301/poonam2197934644/5.bmp"],
[i++,"kajal","2197936424","./301/kajal2197936424/1.bmp","./301/kajal2197936424/2.bmp","./301/kajal2197936424/3.bmp","./301/kajal2197936424/4.bmp","./301/kajal2197936424/5.bmp"],
[i++,"mahekbano","2197914810","./301/mahekbano2197914810/1.bmp","./301/mahekbano2197914810/2.bmp","./301/mahekbano2197914810/3.bmp","./301/mahekbano2197914810/4.bmp","./301/mahekbano2197914810/5.bmp"],
[i++,"asthasingh","2197932476","./301/asthasingh2197932476/1.bmp","./301/asthasingh2197932476/2.bmp","./301/asthasingh2197932476/3.bmp","./301/asthasingh2197932476/4.bmp","./301/asthasingh2197932476/5.bmp"],
[i++,"kalpana","2197917318","./301/kalpana 2197917318n/1.bmp","./301/kalpana 2197917318n/2.bmp","./301/kalpana 2197917318n/3.bmp","./301/kalpana 2197917318n/4.bmp","./301/kalpana 2197917318n/5.bmp"],
[i++,"chandani","2197915082","./301/chandani2197915082/1.bmp","./301/chandani2197915082/2.bmp","./301/chandani2197915082/3.bmp","./301/chandani2197915082/4.bmp","./301/chandani2197915082/5.bmp"],
[i++,"khushbujaiswal","2197946724","./301/khushbujaiswal2197946724/1.bmp","./301/khushbujaiswal2197946724/2.bmp","./301/khushbujaiswal2197946724/3.bmp","./301/khushbujaiswal2197946724/4.bmp","./301/khushbujaiswal2197946724/5.bmp"],
[i++,"muskanmaurya","2197933840","./301/muskanmaurya2197933840/1.bmp","./301/muskanmaurya2197933840/2.bmp","./301/muskanmaurya2197933840/3.bmp","./301/muskanmaurya2197933840/4.bmp","./301/muskanmaurya2197933840/5.bmp"],
[i++,"nandani","2197949059","./301/nandani2197949059/1.bmp","./301/nandani2197949059/2.bmp","./301/nandani2197949059/3.bmp","./301/nandani2197949059/4.bmp","./301/nandani2197949059/5.bmp"],
[i++,"nehakumari","2197947887","./301/nehakumari2197947887/1.bmp","./301/nehakumari2197947887/2.bmp","./301/nehakumari2197947887/3.bmp","./301/nehakumari2197947887/4.bmp","./301/nehakumari2197947887/5.bmp"],
[i++,"nidhi","2197949714","./301/nidhi2197949714/1.bmp","./301/nidhi2197949714/2.bmp","./301/nidhi2197949714/3.bmp","./301/nidhi2197949714/4.bmp","./301/nidhi2197949714/5.bmp"],
[i++,"priyakumari","2197934406","./301/priyakumari2197934406/1.bmp","./301/priyakumari2197934406/2.bmp","./301/priyakumari2197934406/3.bmp","./301/priyakumari2197934406/4.bmp","./301/priyakumari2197934406/5.bmp"],
[i++,"rinki","2197946803","./301/rinki2197946803/1.bmp","./301/rinki2197946803/2.bmp","./301/rinki2197946803/3.bmp","./301/rinki2197946803/4.bmp","./301/rinki2197946803/5.bmp"],
[i++,"ruchi","2197914749","./301/ruchi2197914749/1.bmp","./301/ruchi2197914749/2.bmp","./301/ruchi2197914749/3.bmp","./301/ruchi2197914749/4.bmp","./301/ruchi2197914749/5.bmp"],
[i++,"ruchi","2197917520","./301/ruchi2197917520/1.bmp","./301/ruchi2197917520/2.bmp","./301/ruchi2197917520/3.bmp","./301/ruchi2197917520/4.bmp","./301/ruchi2197917520/5.bmp"],
[i++,"sabinabano","2197914872","./301/sabinabano2197914872/1.bmp","./301/sabinabano2197914872/2.bmp","./301/sabinabano2197914872/3.bmp","./301/sabinabano2197914872/4.bmp","./301/sabinabano2197914872/5.bmp"],
[i++,"shashi","2197946629","./301/shashi2197946629/1.bmp","./301/shashi2197946629/2.bmp","./301/shashi2197946629/3.bmp","./301/shashi2197946629/4.bmp","./301/shashi2197946629/5.bmp"],
[i++,"shastri","2197953172","./301/shastri2197953172/1.bmp","./301/shastri2197953172/2.bmp","./301/shastri2197953172/3.bmp","./301/shastri2197953172/4.bmp","./301/shastri2197953172/5.bmp"],
[i++,"shivanisaroj","2197934282","./301/shivanisaroj2197934282/1.bmp","./301/shivanisaroj2197934282/2.bmp","./301/shivanisaroj2197934282/3.bmp","./301/shivanisaroj2197934282/4.bmp","./301/shivanisaroj2197934282/5.bmp"],
[i++,"nidhirajak","2197946340","./301/nidhirajak2197946340/1.bmp","./301/nidhirajak2197946340/2.bmp","./301/nidhirajak2197946340/3.bmp","./301/nidhirajak2197946340/4.bmp","./301/nidhirajak2197946340/5.bmp"],
[i++,"roshani","2197917708","./301/roshani2197917708/1.bmp","./301/roshani2197917708/2.bmp","./301/roshani2197917708/3.bmp","./301/roshani2197917708/4.bmp","./301/roshani2197917708/5.bmp"],
[i++,"sameena","2197914710","./301/sameena2197914710/1.bmp","./301/sameena2197914710/2.bmp","./301/sameena2197914710/3.bmp","./301/sameena2197914710/4.bmp","./301/sameena2197914710/5.bmp"],

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
                img.style.filter = 'invert(100%)'; // Color invert
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
