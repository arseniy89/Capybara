let CopiedPage = "";
let PreviousText = "";

function Repl(string) {
    string = string.replace(/^\s+/g, '');
    return string.replace(/\s+$/g, '');
}

function FindOnPage(ID) {

    let CurrentText;
    let element = window.document.getElementById(ID);

    CurrentText = Repl(element.value)

    if (CurrentText == "") {alert("Поле ввода пусто"); return}
    if (document.body.innerHTML.indexOf(CurrentText) == "-1") {alert("Введенной фразы на странице нет"); return}

    if (CopiedPage.length > 0) {document.body.innerHTML = CopiedPage}
    else {CopiedPage = document.body.innerHTML}

    document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + PreviousText + "/gi"), " ");
    document.body.innerHTML = document.body.innerHTML.replace(eval("/" + CurrentText + "/gi"), "<a name=" + CurrentText + " style='background:#4caf50 67%;'>" + CurrentText + "</a>");

    PreviousText = CurrentText;
    window.location = '#' + CurrentText;
}


function openMenu(){
    document.getElementById("navigate").classList.toggle('active');
}


const btnUp = {
    el: document.querySelector('.btn-up'),

    show() {this.el.classList.remove('btn-up_hide')},

    hide() {this.el.classList.add('btn-up_hide')},

    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });

        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();
