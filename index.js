let btn = document.getElementById('btn')

btn.addEventListener("click", function(event){
    event.preventDefault()
    let userWeight = Number(document.getElementById("input-weight").value)
    let userHeight = Number(document.getElementById("input-height").value)

    let bmi = document.getElementById("bmi")
    let categories = document.getElementById("categories")
    let err = document.getElementById("summary-error")
 
    
    
    let hsl = (userWeight / ( userHeight / 100) ** 2).toFixed(2)
    
    let summary = document.getElementById("summary")

    if(userHeight === " " || height <= 0 || userWeight === " " || userWeight <= 0){

            summary.style.display = "none";
            err.style.display = "block"; 
    }else if(hsl < 18.5 ){ 

            err.style.display = "none"
            summary.style.display = "block";
            bmi.innerText = hsl;
            categories.innerText = "you are underweight";
        }else if (hsl >= 18.5 && hsl < 24.9){ 
            
            err.style.display = "none"
            summary.style.display = "block";
            bmi.innerText = hsl;
            categories.innerText = "you are normal weight";
        }else if(hsl >= 25 && hsl <= 29.9){

            err.style.display = "none"
            summary.style.display = "block";
            bmi.innerText = hsl;
            categories.innerText = "you are overweight";
        }else{
            err.style.display = "none"
            summary.style.display = "block";
            bmi.innerText = hsl;
            categories.innerText = "you are obesity";
        }
    
})