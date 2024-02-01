const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const booklist = document.getElementById("booklist");
const btn = document.getElementById("btn");

btn.addEventListener("click",function(e){
    e.preventDefault();

    if(title.value =="" && author.value =="" && year.value== ""){
        alert("please write something")
    }else{
        const newEle = document.createElement("div");


        const newitle = document.createElement("div");
        newTitle.innerHTML = title.value;
        newEle.appendChild(newTitle);


        const newauthor = document.createElement("div");
        newAuthor.innerHTML = author.value;
        newEle.appendChild(newAuthor);


        const newYear = document.createElement("div");
        newYear.innerHTML = Year.value;
        newEle.appendChild(newYear);

        booklist.appendChild(newEle);


    }
})