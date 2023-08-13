var input = document.getElementById("title");
var content = document.getElementById("content");
var saveBtn = document.querySelector(".save-btn");
var journalPages = document.querySelector(".journal-pages");
var titleContent = "";
var journalContent ="";
var key = 0;
localStorage.setItem(key, key);


input.addEventListener("change", event => {
    titleContent = event.target.value;
});

content.addEventListener("change", event => {
    journalContent = event.target.value;
})

saveBtn.addEventListener("click", () => {
    localStorage.setItem(key, parseInt(localStorage.getItem(key))+1);
    console.log(localStorage.getItem(key));

    localStorage.setItem(key+"TC", titleContent);
    input.value = "";

    localStorage.setItem(key+"C", journalContent);
    content.value = "";

    createNewPage();
    
    var delItems = document.querySelectorAll(".delete");
    var jPages = document.querySelectorAll(".page");
    delItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            jPages[index].remove();
        });
    });

    var readMe = document.createElement("div");
    readMe.classList.add("read-me-display");
    //console.log(localStorage.getItem(key+"C").substring(0,3));
    var x = localStorage.getItem(key+"C").substring(0,3);
    console.log(x);
    readMe.innerHTML = `
    <div class="read-me-container">
        <span class="close"><i class="fa-solid fa-x"></i></span>
        <h2>${localStorage.getItem(key+"TC")}</h2>
        <p>${localStorage.getItem(key+"C")}</p>
    </div>
    `;
    document.body.appendChild(readMe);

    var closeBtns = document.querySelectorAll(".close");
    var readDisplay = document.querySelectorAll(".read-me-display");
    closeBtns.forEach((closeBtn, index) => {
        closeBtn.addEventListener("click", () => {
            readDisplay[index].style.display = "none";
        });
    });

    var readElements = document.querySelectorAll(".read-me");
    readElements.forEach((readElement, index) => {
        readElement.addEventListener("click", () => {
            readDisplay[index].style.display = "block";
        });
    });
}); 

function createNewPage(){
    var newPage = document.createElement("div");
    newPage.classList.add("page");
    newPage.innerHTML = `
    <span class="read-me">Read</span>
            <span class="delete">Delete</span>
            <h3>${localStorage.getItem(key+"TC")}</h3>
            <p>${localStorage.getItem(key+"C").substring(0,14) + "..."}</p>
    `;
    journalPages.appendChild(newPage);
}