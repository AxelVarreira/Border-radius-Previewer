const box = document.querySelector('.container .box')
const input = document.querySelector('.container .input')
const btnAction = document.querySelector('.container .btnAction')

function changeBorderStatus(){
    btnAction.addEventListener('click', () => {
        box.style.borderRadius = input.value;
    })
}

function clipboard(){
    btnAction.addEventListener('click', () => {
        input.select();
        input.setSelectionRange(0, 99999);

        document.execCommand("copy");

        alert('Copiado para a área de transfêrencia!')
    })
}
changeBorderStatus();
clipboard();