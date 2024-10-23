const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if(dividend.length > 0 && divider.length > 0){
    if(divider == 0){
      result.innerText = "Division not performed. Invalid number provided. Try again"
    }else{ 
      if(isNaN(dividend) && isNaN(divider)) {
        document.write("Something critical went wrong. Please reload the page")
      }else{
        result.innerText = Math.floor(dividend/divider)
      }  
    }
  }else{
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
  }

});

