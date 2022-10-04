const Github= function(){
    this.clientId="bfbe27971990401d5f97";
    this.clientSecret="*****e84f8c4d"
    // this.http=new XMLHttpRequest();
    this.reposCount=5;
    this.reposSort="created:asc"    
}

Github.prototype.getUser=function(error,user,callback,forbidden){
    if(user==undefined){    
        user="joshuaAj003";
    }    
    const http=new XMLHttpRequest();
    const url=`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret${this.clientSecret}`
      http.open("GET",url,true);
      http.onload= ()=>{  
        if(user!=="" && !user.includes(" ")){

            if (http.status==200){


                let response=JSON.parse(http.responseText);
                callback(response);
            }   
            else if( http.status==404){
                callback(error);
            }
            else if( http.status==403){
                forbidden=true;
                callback(forbidden);
            }
        }
        
    }
    http.send()
}
Github.prototype.getUserRepos= (error,user)=>{
    const http= new XMLHttpRequest;
    if(user==undefined){    
    user="joshuaAj003";
}    
if(user!=="" && !user.includes(" ")){
    const Repourl=`https://api.github.com/users/${user}/repos?per_page=5&sort=${this.reposSort}&client_id=${this.clientId}&client_secret${this.clientSecret}`;
    
            return new Promise((resolve)=>{
                http.open("GET",Repourl,true);
                http.onload=()=>{
                    if(http.status==200){
                        
                        let response= JSON.parse(http.responseText);
                        resolve(response)
                    }
                    else if( http.status==404){
                resolve(error);
            }
        }
        http.send();
    });
}

}