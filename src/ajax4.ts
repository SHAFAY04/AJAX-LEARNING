
let buttonget=document.getElementById('button')as HTMLElement
buttonget.addEventListener('click',getName)

function getName(){

    let xhr= new XMLHttpRequest()
    xhr.open('GET','../src/process.php?name=shafay',true)
    xhr.onload=function(){

        if(this.status==200){
            console.log(xhr.responseText)
        }
    }
    xhr.send()

}