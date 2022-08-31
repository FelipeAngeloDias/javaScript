const form = document.getElementById('form-valor');

const campoA = document.getElementById('numbera');
const campoB = document.getElementById('numberb');
const mensagemCerto = `O valor: ${campoB.value} do campo B esta maior que o valor : ${campoA.value} do campo A, Sucesso!`;
const e = "Errado";

    form.addEventListener('submit', function (a){
        a.preventDefault();
            if (campoA < campoB){
                alert(mensagemCerto);
            }  else {
                alert(e);
            }
        
        })
   
   

console.log(form);
