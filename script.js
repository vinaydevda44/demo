let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "="){
            try{
                let temp = string.replace(/x/g, "*").replace(/\^/g, "**");
                string = eval(temp);
                document.querySelector(".output").value = string;
            }
            catch(error){
                document.querySelector(".output").value = "Error";
            }
        }

        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector(".output").value = string;
        }

        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector(".output").value = string;
        }
        
    })
})