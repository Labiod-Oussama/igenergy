const about_home = document.getElementById('about-page');
function about() {
    about_home.scrollIntoView({
        behavior:"smooth"
    })
}
const locate = window.location.origin;
function goabout() {
    window.location.href=locate+"/about.html";
}
function go_blog() {
    window.location.href=locate+"/blog.html";
}
function go_sub_blog1(){
    window.location.href=locate+"/B1.html";
}
function go_sub_blog2(){
    window.location.href=locate+"/B2.html";
}
function go_sub_blog3(){
    window.location.href=locate+"/B3.html";
}
//-------blog page--------//
const myTitle = document.querySelector('#blog-page h1');
var ok = document.querySelector('.DES_BLOG h2');
const Array_title_blog =['Our Blogs'];
myTitle.textContent='';
let index =0;
setInterval(() => {
   for (let i = 0; i < Array_title_blog.length; i++) {
       myTitle.textContent= Array_title_blog[i].slice(0,index++);
   }
}, 200);
var goblog = document.querySelectorAll('.BL div .go_blog');
goblog.forEach(element => {
     element.addEventListener("click",(e)=>{
        window.location.href=locate+e.target.dataset.blog;
     })
 });