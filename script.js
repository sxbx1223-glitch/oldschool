// انتظر حتى تحميل المحتوى
document.addEventListener("DOMContentLoaded", function () {
    // تحديد حقل البحث
    const searchInput = document.getElementById("searchInput");
    // تحديد كل الفصول
    const chapters = document.querySelectorAll(".law-card");

    // عند الكتابة في حقل البحث
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();

        chapters.forEach(function (chapter) {
            // نص الفصل بالكامل
            const chapterText = chapter.innerText.toLowerCase();
            // إظهار أو إخفاء الفصل بناءً على البحث
            if (chapterText.includes(searchValue)) {
                chapter.style.display = "block";
            } else {
                chapter.style.display = "none";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput"); // تأكد أن لديك input بهذا المعرف
    const chapters = document.querySelectorAll(".law-card"); // الفصول هي عناصر بداخلها المواد

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();

        chapters.forEach(function (chapter) {
            const chapterText = chapter.innerText.toLowerCase();
            if (chapterText.includes(searchValue)) {
                chapter.style.display = "block";
            } else {
                chapter.style.display = "none";
            }
        });
    });
});
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
    accordion.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let filter =
searchInput.value.toLowerCase();

let content =
document.getElementById("constitutionContent");

let text =
content.innerText.toLowerCase();

if(text.includes(filter)){
content.style.display = "block";
}else{
content.style.display = "none";
}

});

}// فتح وإغلاق الفصول

const btns = document.querySelectorAll(".accordion-btn");

btns.forEach(btn => {

btn.addEventListener("click", () => {

const content = btn.nextElementSibling;

if(content.style.display === "block"){

content.style.display = "none";

}else{

content.style.display = "block";

}

});

});

// البحث

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("input", function(){

const value = this.value.trim().toLowerCase();

document.querySelectorAll(
".accordion-btn,.accordion-content"
).forEach(item => {

item.innerHTML = item.innerHTML
.replace(/<span class="highlight">/g,"")
.replace(/<\/span>/g,"");

if(value !== ""){

const regex = new RegExp(value,"gi");

item.innerHTML = item.innerHTML.replace(
regex,
match => `<span class="highlight">${match}</span>`
);

}

});

});

}