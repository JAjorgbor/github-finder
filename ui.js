const Ui= function(){
    this.profile=document.querySelector(".profile-info-container");
    this.clicked=true;

}
Ui.prototype.themeSwitcher=function(themeToggle){
    themeToggle.classList.toggle("theme-toggle-pressed");
    if(this.clicked){
    document.getElementById("themes").href="./css/lightTheme.css";
    this.clicked=false;
}
else{
        document.getElementById("themes").href="./css/darkTheme.css";
this.clicked=true;
    }
}
Ui.prototype.showProfile=function(userInfo){
    let errorMessage=document.querySelector(".error-message")
    if(userInfo==null){
         
        errorMessage.classList.add("error-message-pop-up");
        setTimeout(()=>{
            document.querySelector(".error-message").classList.remove("error-message-pop-up");
        },3000);

        return;
    }
    else if(userInfo==true){
         errorMessage.textContent="There seems to be a problem with your connection, please try again later..."
        errorMessage.classList.add("error-message-pop-up");
        setTimeout(()=>{
            document.querySelector(".error-message").classList.remove("error-message-pop-up");
        },5000);

        return;
    }
    document.querySelector(".profile-info-container").innerHTML=`
    <div class="profile-pic-container">
    <img src="${userInfo.avatar_url}" alt="profile-avatar">
<button type="button"><a href="${userInfo.html_url}" target="_blank">View Profile</a></button>
</div>
<div class="profile-details">
<h2 class="name">${userInfo.name}</h2>
<p class="user-login">Username:<span>${userInfo.login}</span></p>
<div class="extra-info">
<span class="detail">Public Repos:${userInfo.public_repos}</span>
<span class="detail">Public Gist:${userInfo.public_gists}</span>
<span class="detail">Followers:${userInfo.followers}</span>
<span class="detail">Following:${userInfo.following}</span>
</div>
<p>company: ${userInfo.company}</p>
<p>website/blog: ${userInfo.blog}</p>
<p>Location: ${userInfo.location}</p>
<p>Member since: ${userInfo.created_at}</p>
</div>`
}

Ui.prototype.showRepos=(repos)=>{
    if(repos==null||repos==undefined){
        return;
    }
    let output="";
repos.forEach((repo)=>{
    output+=` 
    <div class="repo">
    <div class="repo-name"><a href="${repo.html_url} "target="_blank">
    ${repo.name}
 </a> 
</div>
    <div class="points"><span class="detail-stars">Stars: ${repo.stargazers_count}</span> <span class="detail-watchers">Watchers: ${repo.watchers_count}</span><span class="detail-forks">Forks: ${repo.forks_count}</span></div> 
    </div>
 </div>`
})
document.querySelector(".repos-container").innerHTML=output;
}