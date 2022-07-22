const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const output = document.querySelector('.output');


let comments = [];

function formatDate(date){
let options = { day: '2-digit',  month: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric' };
let finalDate = new Intl.DateTimeFormat('en-GB', options).format(date);
return finalDate.replaceAll('/', '.').replace(',', ' ');
}

function getComment() {
    let comment = input.value.replace(/viagra|xxx/ig, "***");
    comments.push(comment);
    for (let i = 0; i < comments.length; i++) {
        i = output.insertAdjacentHTML("afterbegin",
    `<div class="commentContainer">
    <img class="photo" src="/images/icon.png">
    <div class="commentText">${comment}</div>
    <div class="date">${formatDate()}</div>
    </div>`
        );
    }
    input.value = '';
}

btn.addEventListener('click', () => {
    if (input.value !== '') {
        getComment();
    }
});
