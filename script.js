    //Initialize max lenth
    const maxLength = 30
    const warningLength = 20
    //Get the values from field
    var textfield = document.getElementById("textField")
    var charcount = document.getElementById("charCount")
    var warning = document.getElementById("warning")
    //function declare
     textfield.addEventListener("input",function(event) 
     {
        var totalCount = textField.value.length;
        charCount.innerHTML = `${maxLength - totalCount}/${maxLength}`
        if (totalCount > maxLength) {
            textField.value = textField.value.substring(0, maxLength)
            warning.textContent = "Max limt reach!!!"
        }
        if (totalCount > 20) {
            charCount.style.color = "red"
            warning.style.color = "red"
        }
    })
    
   