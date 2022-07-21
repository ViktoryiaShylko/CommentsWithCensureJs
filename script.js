let btn = document.querySelector("#btn");
let loadedComments = document.querySelector("#loadedComments");
loadedComments = "";
let comment = document.querySelector("#comment").value;
    let comments = [];
    let badValues =["viagra", "XXX"];
    let censure = "***";


btn.addEventListener('click', () => {
checkSpam();
});


function checkSpam(){
    for (let badValue of badValues){
        if (comment.search("badValue")){
            comment.replace("badValue", censure);
            comments.push(`${comment}`);
        }
        else{
            comments.push(`${comment}`); 
        }
    }
    loadedComments.innerHTML += comments;
};

 