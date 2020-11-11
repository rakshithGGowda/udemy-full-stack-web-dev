const firstName = document.querySelector('.firstname');
const secondName = document.querySelector('.secondname');
const submitButton = document.querySelector('.submit');
const result = document.querySelector('.result');



submitButton.addEventListener('click', e =>{
    if(firstName.value == "" || secondName.value == ""){
        alert(" Please fill both the names")
        return
    }
    let resultwq = (Math.ceil(Math.random()*100)).toString();
    result.textContent = resultwq+"%";
});
