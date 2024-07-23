let button = document.getElementById('button') as HTMLElement

let buttonevent = () => {
    document.body.style.backgroundColor = 'orange'

    //Create XHR Object
    var xhr = new XMLHttpRequest()
    //OPEN -type,url/file,async(bool)
    console.log(xhr)
    xhr.open('GET', '../sample.txt', true)

    //ReadyState
    //Holds the status of the XMLHttpRequest.
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    //using Onreadystatechange, the old way
    xhr.onreadystatechange = function () {

        console.log('onreadystatechange!')
        //onreadystatechange goes from 1 to 4
        //it keeps calling the function until
        //readystate is at 4
        console.log('READY STATE: ' + xhr.readyState)
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
        }
    }
    //using onload, the better way
    xhr.onload = function () {
 
        console.log('ONLOAD!')
        //onload is not gonna work unless ready
        //means that unless ready state is 4
        console.log('READY STATE: ' + xhr.readyState)
        if (this.status == 200) {
            (document.getElementById('text')as HTMLElement).innerText=this.responseText
        }
        else if (this.status == 404) {
            (document.getElementById('text')as HTMLElement).innerText='FILE NOT FOUND'
        }
    }

    //onprogress- used for loaders while a request
    //is processing!
    xhr.onprogress = function () {

        console.log('onprogress!')
        //the state here is processing request!
        console.log('READYSTATE: ' + this.readyState)
    }

    //onerror
    xhr.onerror=function(){

        console.log('Request Error!')
    }

    xhr.send()
}

button.addEventListener('click', buttonevent)
