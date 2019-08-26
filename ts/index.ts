const Initialize = () => {
    typewriter('nom','Elian Bourdil');
    modal();
    displayTitleIcon();
}

const modal = () => {
    document.querySelector('#comp_link').addEventListener('click', function (event) {
        event.preventDefault();
        var modal: any = document.querySelector('.modal');  // assuming you have only 1
        var html: any = document.querySelector('html');
        modal.classList.add('is-active');
        html.classList.add('is-clipped');

        modal.querySelector('.modal-background').addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        });

        modal.querySelector('.delete').addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        });
    });
}

const changeTitle = (id: any) => {
    const elementid: any = document.getElementById(id);
    const elementvalue: any = elementid.id;
    const title: any = document.getElementById('displayIcon');
    title.innerHTML = elementvalue;
}

const clearDisplay = () => {
    const title: any = document.getElementById('displayIcon');
    title.innerHTML = "...";
}

const displayTitleIcon = () => {
    const icon: any = document.getElementsByClassName("icon");
    for (let i: number = 0; i < icon.length; i++) {
        icon[i].addEventListener('mouseover', () => {
            changeTitle(icon[i].id);
        })
        icon[i].addEventListener('mouseleave', () => {
            clearDisplay();
        })
    }
}

const typewriter = (id : string , value : string) => {
    let element  = document.getElementById(id);
    let typewriter = new Typewriter(element);

    typewriter.typeString(value)
        .start()
}

window.addEventListener('load',Initialize);