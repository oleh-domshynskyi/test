let button = document.getElementsByClassName('button-filter');
let filterInformation = document.getElementsByClassName('filter-information');
let counter =1;
button[0].addEventListener('click', () => {
    if (counter%2!=0) {
        filterInformation[0].style.display = "flex";
        button[0].innerHTML = "- FILTER";
        button[0].style.border = '1px solid #E5E5E5';
        button[0].style.borderRadius = '18px 18px 0 0';
        counter++;
    }else {
        filterInformation[0].style.display = "none";
        button[0].innerHTML = "+ FILTER";
        button[0].style.border = '1px solid rgb(99, 236, 219)';
        button[0].style.borderRadius = '18px';
        counter++;
    }
    
})