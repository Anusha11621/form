let form = document.querySelector('.form')


let namee = document.querySelector('#name')
let email = document.querySelector('#email')
let dropdown = document.querySelector('#dropdown')
let color = document.querySelector('#color')
let range = document.querySelector('#range')
let radiobtn = document.querySelector('.radiobtn')

let nameErr = document.querySelector('.nameErr')
let emailErr = document.querySelector('.emailErr')

let checkBox = document.querySelector('#checkBox')


let model = document.querySelector('.model')
model.style.display = "none"

let closebtn = document.querySelector('.closebtn')

let nameValue =  document.createElement('h3')
let emailValue = document.createElement('p')
let dropdownValue = document.createElement('p')
let colorValue = document.createElement('p')
let rangeValue = document.createElement('p')
let radiobtnValue = document.createElement('p')
let terms = document.createElement('p')

model.append(nameValue)
model.append(emailValue)
model.append(dropdownValue)
model.append(colorValue)
model.append(rangeValue)
model.append(radiobtnValue)
model.append(terms)


let values = [namee,email]

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    form.style.display = "none"
    model.style.display = "block"

    for(let data of values){
        if(data.value == ""){
            alert('All mandatory fields should be filled')   
        }
    }

    let gener = ""
    Array.from(radiobtn.children).forEach((data)=>{
        if(data.firstElementChild.checked){
            gener = data.lastElementChild.textContent
        }
    })

    nameValue.textContent = `Hello ${namee.value}`
    emailValue.textContent = `Email: ${email.value}`
    dropdownValue.textContent = `You Love: ${dropdown.value}`
    colorValue.textContent = `Color: ${color.value}`
    rangeValue.textContent = `Rating: ${range.value/10}`
    radiobtnValue.textContent = `Book Genre: ${gener}  ${color.value}`
    terms.textContent = "👉You agree to Terms and Condition"
    terms.style.textDecoration = "underline"

    closebtn.addEventListener('click',()=>{
        form.style.display = "flex"
        model.style.display = "none"
    })
    form.reset();
    if(checkBox.checked == true){
        console.log('hii');
    }
    else{
        console.log("not working");
    }
})


namee.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErr.textContent = "Required*";
    } else {
        nameErr.textContent = "";
    }
  });

  email.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErr.textContent = "Required*";
    }else if(!(event.target.value.includes('@')&&(event.target.value.includes('.')))){
        emailErr.textContent = "Enter valid E-mail";
    }
    else {
        emailErr.textContent = "";
    }
  });