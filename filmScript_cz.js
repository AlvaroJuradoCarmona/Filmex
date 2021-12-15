window.addEventListener("scroll", (event) => {
    console.log(event);
    let d = document.documentElement;
    let offset = d.scrollTop + window.innerHeight;
    let height = d.offsetHeight;
    if (offset === height) {
        alert("Momentálně nemáme v kinech žádné další filmy. Zůstaňte naladěni na novinky!");
        console.log('At the bottom');
    }

    console.log('offset = ' + offset);
    console.log('height = ' + height);
    console.log(window.innerHeight + " " + window.scrollY + " " + document.height);
});