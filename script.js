const parent=document.getElementById("parentElement");
const input=document.getElementById("input");
const ToDoList=[];
input.addEventListener("keydown",(e)=>{
    if(e.keyCode==13){
    if(input.value.length!=0){
        let newElement=document.createElement("p");
        newElement.innerHTML=input.value;
        ToDoList.push(newElement);
        newElement.id='q'+ToDoList.length;
        let newDiv=document.createElement("div");
        newDiv.id="newDiv"+ToDoList.length;
        newDiv.className="newDiv";
        parent.append(newDiv);
        const item=document.getElementById("newDiv"+ToDoList.length);
        let checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.id=ToDoList.length;
        item.append(checkbox);
        item.append(newElement);
        input.value="";
    }
}})

parent.addEventListener("click",()=>{
    const subString=document.getElementById('q'+event.target.id);
    if(subString.style.textDecoration=="line-through"){
        subString.style.textDecoration="";
    }else{
        subString.style.textDecoration="line-through";
    }
})
