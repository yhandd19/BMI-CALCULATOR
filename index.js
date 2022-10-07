let btn = document.getElementById('btn')
let input = document.querySelector(".input").value



btn.addEventListener("click", function(event){
    event.preventDefault()
    let userWeight = parseInt(document.getElementById("input-weight").value)
    let userHeight = parseInt(document.getElementById("input-height").value)
    
    let bmi = document.getElementById("bmi")
    let categories = document.getElementById("categories")
    
    let hsl = userWeight / ( userHeight / 100) ^ 2;
    
    let summary = document.getElementById("summary")
    summary.style.display = "block";

    if(hsl < 18.5 ){
        bmi.innerText = hsl;
        categories.innerText = "you are underweight";
    }else if (hsl >= 18.5 && hsl <= 24.9){
        bmi.innerText = hsl;
        categories.innerText = "you are normal weight";
    }else if(hsl >= 25 && hsl <= 29.9){
        bmi.innerText = hsl;
        categories.innerText = "you are overweight";
    }else{
        bmi.innerText = hsl;
        categories.innerText = "you are obesity";
    }

})

