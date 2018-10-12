        const Http = new XMLHttpRequest();
        const url='https://jsbin.com/magelug/edit?html,js,output';
        Http.onreadystatechange=(e)=>{
        console.log(Http.responseText)
}