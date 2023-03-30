const input = document.querySelector("input");
const addbtn = document.querySelector(".btn-add")
const ul = document.querySelector("ul");
const empty = document.querySelector(".emty");

addbtn.addEventListener("click",(e)=>{

    e.preventDefault();

    const text = input.value;

    if(text !==""){
        const li = document.createElement("li");
        const p = document.createElement ("p");

        p.textContent = text;

        li.appendChild(p);
        ul.appendChild(li);

        li.appendChild(addDeletebtn());

        input.value = "";
        empty.style.display = "none";


    }

});

function addDeletebtn (){

    const deletebtn = document.createElement("button");

    deletebtn.textContent = "X"
    deletebtn.className = "btn-delete";

deletebtn.addEventListener ("click", (e)=>{
    
    const item = e.target.parentELement;

    ul.removeChild(item)

    const items = document.querySelectorAll("li");

    if(items.length === 0){
        empty.style.display = "block"
    }

});

    return deletebtn;

}