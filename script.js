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
