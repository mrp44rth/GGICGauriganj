// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++,"Amita","2197963429","./302/Amita(2197963429)/1.bmp","./302/Amita(2197963429)/2.bmp","./302/Amita(2197963429)/3.bmp","./302/Amita(2197963429)/4.bmp","./302/Amita(2197963429)/5.bmp"],
[i++,"Anjali","2197970102","./302/Anjali(2197970102)/1.bmp","./302/Anjali(2197970102)/2.bmp","./302/Anjali(2197970102)/3.bmp","./302/Anjali(2197970102)/4.bmp","./302/Anjali(2197970102)/5.bmp"],
[i++,"Chandni","2197962762","./302/Chandni(2197962762)/1.bmp","./302/Chandni(2197962762)/2.bmp","./302/Chandni(2197962762)/3.bmp","./302/Chandni(2197962762)/4.bmp","./302/Chandni(2197962762)/5.bmp"],
[i++,"DepanshiKumari","2197936125","./302/DepanshiKumari(2197936125)/1.bmp","./302/DepanshiKumari(2197936125)/2.bmp","./302/DepanshiKumari(2197936125)/3.bmp","./302/DepanshiKumari(2197936125)/4.bmp","./302/DepanshiKumari(2197936125)/5.bmp"],
[i++,"Jyoti","2197970208","./302/Jyoti(2197970208)/1.bmp","./302/Jyoti(2197970208)/2.bmp","./302/Jyoti(2197970208)/3.bmp","./302/Jyoti(2197970208)/4.bmp","./302/Jyoti(2197970208)/5.bmp"],
[i++,"KajalChauhan","2197977479","./302/KajalChauhan(2197977479)/1.bmp","./302/KajalChauhan(2197977479)/2.bmp","./302/KajalChauhan(2197977479)/3.bmp","./302/KajalChauhan(2197977479)/4.bmp","./302/KajalChauhan(2197977479)/5.bmp"],
[i++,"Kashish","2197969356","./302/Kashish(2197969356)/1.bmp","./302/Kashish(2197969356)/2.bmp","./302/Kashish(2197969356)/3.bmp","./302/Kashish(2197969356)/4.bmp","./302/Kashish(2197969356)/5.bmp"],
[i++,"Khushabu","2197963215","./302/Khushabu(2197963215)/1.bmp","./302/Khushabu(2197963215)/2.bmp","./302/Khushabu(2197963215)/3.bmp","./302/Khushabu(2197963215)/4.bmp","./302/Khushabu(2197963215)/5.bmp"],
[i++,"Khushbu","2197963286","./302/Khushbu(2197963286)/1.bmp","./302/Khushbu(2197963286)/2.bmp","./302/Khushbu(2197963286)/3.bmp","./302/Khushbu(2197963286)/4.bmp","./302/Khushbu(2197963286)/5.bmp"],
[i++,"KHUSHI","2197969782","./302/KHUSHI(2197969782)/1.bmp","./302/KHUSHI(2197969782)/2.bmp","./302/KHUSHI(2197969782)/3.bmp","./302/KHUSHI(2197969782)/4.bmp","./302/KHUSHI(2197969782)/5.bmp"],
[i++,"KhushiGupta","2197969598","./302/KhushiGupta(2197969598)/1.bmp","./302/KhushiGupta(2197969598)/2.bmp","./302/KhushiGupta(2197969598)/3.bmp","./302/KhushiGupta(2197969598)/4.bmp","./302/KhushiGupta(2197969598)/5.bmp"],
[i++,"KhushiJaiswal","2197975510","./302/KhushiJaiswal(2197975510)/1.bmp","./302/KhushiJaiswal(2197975510)/2.bmp","./302/KhushiJaiswal(2197975510)/3.bmp","./302/KhushiJaiswal(2197975510)/4.bmp","./302/KhushiJaiswal(2197975510)/5.bmp"],
[i++,"Lalita","2197967242","./302/Lalita(2197967242)/1.bmp","./302/Lalita(2197967242)/2.bmp","./302/Lalita(2197967242)/3.bmp","./302/Lalita(2197967242)/4.bmp","./302/Lalita(2197967242)/5.bmp"],
[i++,"Madhu","2197963538","./302/Madhu(2197963538)/1.bmp","./302/Madhu(2197963538)/2.bmp","./302/Madhu(2197963538)/3.bmp","./302/Madhu(2197963538)/4.bmp","./302/Madhu(2197963538)/5.bmp"],
[i++,"Malti","2197975539","./302/Malti(2197975539)/1.bmp","./302/Malti(2197975539)/2.bmp","./302/Malti(2197975539)/3.bmp","./302/Malti(2197975539)/4.bmp","./302/Malti(2197975539)/5.bmp"],
[i++,"Mamta","2197963455","./302/Mamta(2197963455)/1.bmp","./302/Mamta(2197963455)/2.bmp","./302/Mamta(2197963455)/3.bmp","./302/Mamta(2197963455)/4.bmp","./302/Mamta(2197963455)/5.bmp"],
[i++,"Manisha","2197978963","./302/Manisha(2197978963)/1.bmp","./302/Manisha(2197978963)/2.bmp","./302/Manisha(2197978963)/3.bmp","./302/Manisha(2197978963)/4.bmp","./302/Manisha(2197978963)/5.bmp"],
[i++,"Poonam","2197936211","./302/Poonam(2197936211)/1.bmp","./302/Poonam(2197936211)/2.bmp","./302/Poonam(2197936211)/3.bmp","./302/Poonam(2197936211)/4.bmp","./302/Poonam(2197936211)/5.bmp"],
[i++,"Priya","2197975692","./302/Priya(2197975692)/1.bmp","./302/Priya(2197975692)/2.bmp","./302/Priya(2197975692)/3.bmp","./302/Priya(2197975692)/4.bmp","./302/Priya(2197975692)/5.bmp"],
[i++,"Rinki","2197963599","./302/Rinki(2197963599)/1.bmp","./302/Rinki(2197963599)/2.bmp","./302/Rinki(2197963599)/3.bmp","./302/Rinki(2197963599)/4.bmp","./302/Rinki(2197963599)/5.bmp"],
[i++,"RubiSahu","2197966649","./302/RubiSahu(2197966649)/1.bmp","./302/RubiSahu(2197966649)/2.bmp","./302/RubiSahu(2197966649)/3.bmp","./302/RubiSahu(2197966649)/4.bmp","./302/RubiSahu(2197966649)/5.bmp"],
[i++,"SandhyaSaroj","2197981749","./302/SandhyaSaroj(2197981749)/1.bmp","./302/SandhyaSaroj(2197981749)/2.bmp","./302/SandhyaSaroj(2197981749)/3.bmp","./302/SandhyaSaroj(2197981749)/4.bmp","./302/SandhyaSaroj(2197981749)/5.bmp"],
[i++,"Shashi","2197963520","./302/Shashi(2197963520)/1.bmp","./302/Shashi(2197963520)/2.bmp","./302/Shashi(2197963520)/3.bmp","./302/Shashi(2197963520)/4.bmp","./302/Shashi(2197963520)/5.bmp"],
[i++,"Shivani Tiwari","2197915123","./302/ShivaniTiwari(2197915123)/1.bmp","./302/ShivaniTiwari(2197915123)/2.bmp","./302/ShivaniTiwari(2197915123)/3.bmp","./302/ShivaniTiwari(2197915123)/4.bmp","./302/ShivaniTiwari(2197915123)/5.bmp"],
[i++,"Shobhi","2197931441","./302/Shobhi(2197931441)/1.bmp","./302/Shobhi(2197931441)/2.bmp","./302/Shobhi(2197931441)/3.bmp","./302/Shobhi(2197931441)/4.bmp","./302/Shobhi(2197931441)/5.bmp"],
[i++,"Sneha","2197931418","./302/Sneha(2197931418)/1.bmp","./302/Sneha(2197931418)/2.bmp","./302/Sneha(2197931418)/3.bmp","./302/Sneha(2197931418)/4.bmp","./302/Sneha(2197931418)/5.bmp"],
[i++,"Sejal","2197967519","./302/Sejal(2197967519)/1.bmp","./302/Sejal(2197967519)/2.bmp","./302/Sejal(2197967519)/3.bmp","./302/Sejal(2197967519)/4.bmp","./302/Sejal(2197967519)/5.bmp"],
[i++,"ShakeenaKhatoon","2197975964","./302/ShakeenaKhatoon(2197975964)/1.bmp","./302/ShakeenaKhatoon(2197975964)/2.bmp","./302/ShakeenaKhatoon(2197975964)/3.bmp","./302/ShakeenaKhatoon(2197975964)/4.bmp","./302/ShakeenaKhatoon(2197975964)/5.bmp"],
[i++,"Shiwani","2197932248","./302/Shiwani(2197932248)/1.bmp","./302/Shiwani(2197932248)/2.bmp","./302/Shiwani(2197932248)/3.bmp","./302/Shiwani(2197932248)/4.bmp","./302/Shiwani(2197932248)/5.bmp"],
[i++,"Shiwani","2197933652","./302/Shiwani(2197933652)/1.bmp","./302/Shiwani(2197933652)/2.bmp","./302/Shiwani(2197933652)/3.bmp","./302/Shiwani(2197933652)/4.bmp","./302/Shiwani(2197933652)/5.bmp"],
[i++,"SonaliSharma","2197977592","./302/SonaliSharma(2197977592)/1.bmp","./302/SonaliSharma(2197977592)/2.bmp","./302/SonaliSharma(2197977592)/3.bmp","./302/SonaliSharma(2197977592)/4.bmp","./302/SonaliSharma(2197977592)/5.bmp"],
[i++,"Sristi","2197914511","./302/Sristi(2197914511)/1.bmp","./302/Sristi(2197914511)/2.bmp","./302/Sristi(2197914511)/3.bmp","./302/Sristi(2197914511)/4.bmp","./302/Sristi(2197914511)/5.bmp"],
[i++,"Vaishnavi","2197931251","./302/Vaishnavi(2197931251)/1.bmp","./302/Vaishnavi(2197931251)/2.bmp","./302/Vaishnavi(2197931251)/3.bmp","./302/Vaishnavi(2197931251)/4.bmp","./302/Vaishnavi(2197931251)/5.bmp"],
[i++,"VanshikaVinodkumar Vishwakarma","2197933867","./302/VanshikaVinodkumarVishwakarma(2197933867)/1.bmp","./302/VanshikaVinodkumarVishwakarma(2197933867)/2.bmp","./302/VanshikaVinodkumarVishwakarma(2197933867)/3.bmp","./302/VanshikaVinodkumarVishwakarma(2197933867)/4.bmp","./302/VanshikaVinodkumarVishwakarma(2197933867)/5.bmp"],
[i++,"Varsha Upadhyay","2197933182","./302/VarshaUpadhyay(2197933182)/1.bmp","./302/VarshaUpadhyay(2197933182)/2.bmp","./302/VarshaUpadhyay(2197933182)/3.bmp","./302/VarshaUpadhyay(2197933182)/4.bmp","./302/VarshaUpadhyay(2197933182)/5.bmp"],

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
    img.style.filter = 'contrast(120%) invert(100%)'; // Contrast and color invert
    td.appendChild(img);
}
   else {
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
