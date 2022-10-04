// initialize objects
const github=new Github();
const ui=new Ui();
let textField=document.getElementById("search-input");

document.querySelector("form").addEventListener("submit",(e)=>{
e.preventDefault();
})
window.addEventListener("load",()=>{
    textField.value=""    ;
    let user=undefined;
    github.getUser(null,user,ui.showProfile,false);
    github.getUserRepos(null,user).then(data=>ui.showRepos(data));
})
let toggle=document.querySelector(".theme-toggle");
toggle.addEventListener("click",()=>{
    ui.themeSwitcher(toggle);

})




textField.addEventListener("keyup",()=>{
let user=textField.value;    
github.getUser(null,user,ui.showProfile,false);
    github.getUserRepos(null,user).then(data=>ui.showRepos(data));
})