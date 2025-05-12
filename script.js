const item = document.querySelector("#item")
const toDo = document.querySelector("#to-do")

item.addEventListener(
    "keyup",
    function(event){
        if (event.key == "Enter"){
            console.log(this.value)
            add(this.value)
            this.value = ""
        }

    }
)


const add = (data) => {
    const listitem = document.createElement("li");
    listitem.innerHTML = `
    ${data}
    <i class="fa-solid fa-rectangle-xmark"></i>
                
    `;
    
 listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )

      listitem.querySelector("i").addEventListener(
        "click" ,
        function(){
            listitem.remove()
        }
    )
    toDo.appendChild(listitem)

}
