(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

function transaction(amount,type,category){
  this.amount=amount;
  this.type=type;
  this.category=category;
}

const transactionArray=[]
const count=0;
  addTransaction = ()=>{
    let amount = document.getElementById("validationCustom01").innerHTML
    let type = document.getElementById("validationCustom02").innerHTML
    let category = document.getElementById("validationCustom03").innerHTML

    
  }
  document.getElementById("submit").addEventListener("click",addTransaction)
