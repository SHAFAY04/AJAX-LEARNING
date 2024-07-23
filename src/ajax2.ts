//AJAX 2 LOCAL JSON!

let getuser=document.getElementById('button1')as HTMLElement
let getusers=document.getElementById('button2')as HTMLElement
getuser.onclick=loadUser
getusers.onclick=loadUsers


function loadUser(){
    let xhr= new XMLHttpRequest()
    xhr.open('GET','/src/user.json',true)
    xhr.onload=function(){
    
        if(this.status==200){
           let user= JSON.parse(this.responseText)
            let output=''
            output=output+`<ul><li>${user.id}</li><li>${user.name}</li><li>${user.email}</li></ul>`
        let userdiv= document.getElementById('user')as HTMLElement
           userdiv.innerHTML=output

        }    
    }
    xhr.send()
}
interface User {
    id: number;
    name: string;
    email: string;
  }

function loadUsers(){
    let xhr= new XMLHttpRequest()
    xhr.open('GET','/src/users.json',true)
    xhr.onload=function(){
    
        if(this.status==200){
            let output=''
           let users= JSON.parse(this.responseText)
           let usersArray:User[]=Array.from(users)
           console.log(usersArray)
          usersArray.forEach (user=> {
          output=output+`<ol><li>${user.id}</li><li>${user.name}</li><li>${user.email}</li></ol>`
           });
            
        let usersdiv= document.getElementById('users')as HTMLElement
           usersdiv.innerHTML=output

        }    
    }
    xhr.send()
}
