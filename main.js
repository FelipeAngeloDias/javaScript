const form = document.getElementById('form-valor');

const campoA = document.getElementById('numbera');
const campoB = document.getElementById('numberb');


    form.addEventListener('submit', function (a){

        const mensagemCerto = `Sucesso! o valor: ${campoB.value}  do campo B esta maior que o valor : ${campoA.value} do campo A.`;
        const e = `Errado, o valor: ${campoA.value} do campo A esta maior ou igual ao valor: ${campoB.value} do campo B`;
     

            if (campoA.value < campoB.value || campoA.value === campoB.value){
                alert(e);           
            }else {
                alert(mensagemCerto);
            }
        });
    
console.log(form);
a.preventDefault();


