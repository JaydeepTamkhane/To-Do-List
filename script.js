const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")
const button=document.querySelector('button');




button.addEventListener('click',function(){
    if(inputBox.value===''){
        alert("You must write something !")
    }else{
        // creating an element li
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;

        // creatinf a span inside li for cross X symbol
        let span=document.createElement('span');
        span.innerHTML="\u00d7";

        //appending the span to the li
        li.appendChild(span);
        
        // finally appending the child to the listContainer
        listContainer.appendChild(li);

        // making the input field empty 
        inputBox.value='';
    }
    saveData();
},false)

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        // the classList is property used to access
        // the element by classname
        // if  element with the class name is not present 
        // then the li with the class checked it automatically created
        e.target.classList.toggle("checked");
        
    }else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
},false)


function saveData(){
    // it save the data on the browser that is client side server
    // the data is just a keyname it can be whatever
    // setitem and getitemis method on related  to localstorage
    localStorage.setItem("data",listContainer.innerHTML)
}


function showTask(){
    // this function executes whenever the website in refreshed
    // and fetched the data back
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();



