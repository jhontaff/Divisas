let inputs = document.querySelectorAll(".valor");

inputs.forEach(input => {
  input.value = input.dataset.cambio;   
});
function valorModificado(input){
  let factor = input.value / input.dataset.cambio;

  inputs.forEach(input => {
    input.value = (input.dataset.cambio * factor).toFixed(2);   
  });
}

