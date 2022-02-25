'use restrict'
/****===BTN OPTIONS FORM */

const btnOpt = document.querySelectorAll('.option-btn')

btnOpt.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
    })
})

// !Validation checkboxes for sender and receiver options

const checkboxes = document.querySelectorAll('.check')
const checkreceiver = document.querySelectorAll('.checkreceiver')
const option1 = document.querySelector('#cookies1')
const option2 = document.querySelector('#cookies2')
const option3 = document.querySelector('#cookies3')
const receiver1 = document.querySelector('#receiver1')
const receiver2 = document.querySelector('#receiver2')
const receiver3 = document.querySelector('#receiver3')

//  Sender checkboxes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => boxchange(e.target))
})

function boxchange(clicked) {
    if (option1.checked || option2.checked || option3.checked) {
        if (option1 === clicked) {
            option2.checked = false
            option3.checked = false
        }
        if (option2 === clicked) {
            option1.checked = false
            option3.checked = false
        }
        if (option3 === clicked) {
            option2.checked = false
            option1.checked = false
        }
    }
}
//  Receiver checkboxes
checkreceiver.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => boxreceiver(e.target))
})

function boxreceiver(clicked) {
    if (receiver1.checked || receiver2.checked || receiver3.checked) {
        if (receiver1 === clicked) {
            receiver2.checked = false
            receiver3.checked = false
        }
        if (receiver2 === clicked) {
            receiver1.checked = false
            receiver3.checked = false
        }
        if (receiver3 === clicked) {
            receiver2.checked = false
            receiver1.checked = false
        }
    }
}

// ?!Acton btn menu dropdown

const actionBtn = document.querySelectorAll('.action')
const actionBox = document.querySelectorAll('.action__box')

actionBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        actionBox[index].classList.toggle('hidden')
    })
})

// !validation for buttons email settings

const btn = document.querySelectorAll('.button-email')

btn.forEach((btns) => {
    btns.addEventListener('click', () => {
        remove()
        btns.classList.add('active-btn')
    })
})

function remove() {
    btn.forEach((btns) => {
        btns.classList.remove('active-btn')
    })
}

// !validation for buttons email settings (Enable message tabs)

const tab = document.querySelectorAll('.button-tab')

tab.forEach((tabs) => {
    tabs.addEventListener('click', () => {
        removeTab()
        tabs.classList.add('active-tab')
    })
})

function removeTab() {
    tab.forEach((tabs) => {
        tabs.classList.remove('active-tab')
    })
}

// !Calling popUps Package settings

const editBtn = document.querySelectorAll('.edit-package')
const mapPackage = document.querySelectorAll('.map-package')
const popUpPackage = document.getElementById('edit-package-popup')
const popUpMapping = document.getElementById('edit-mapping-popup')
const closeIcon = document.querySelector('.close-btn')
const closeIconMap = document.querySelector('.close-btn-map')
const cancelBTn = document.querySelector('.cancel-package')
const cancelMap = document.querySelector('.cancel-mapping')

///?Edit popUp Package

editBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        popUpPackage.classList.remove('hidden')
    })
})

closeIcon.addEventListener('click', (e) => {
    e.preventDefault()
    popUpPackage.classList.add('hidden')
})

cancelBTn.addEventListener('click', (e) => {
    e.preventDefault()
    popUpPackage.classList.add('hidden')
})

///?Map popUp Package

mapPackage.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        popUpMapping.classList.remove('hidden')
    })
})

closeIconMap.addEventListener('click', (e) => {
    e.preventDefault()
    popUpMapping.classList.add('hidden')
})
cancelMap.addEventListener('click', (e) => {
    e.preventDefault()
    popUpMapping.classList.add('hidden')
})

// !Validation of toogle buttons admin settings

const toggle = document.querySelectorAll('.buttonTap')
const toggle2 = document.querySelectorAll('.buttonTap2')
const toggle3 = document.querySelectorAll('.buttonTap3')
const toggle4 = document.querySelectorAll('.buttonTap4')
const toggle5 = document.querySelectorAll('.buttonTap5')

// !Toggle 1 Individual user
toggle.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle()
        button.classList.add('checked')
    })
})
function removeToogle() {
    toggle.forEach((btns) => {
        btns.classList.remove('checked')
    })
}

// !Toggle 1 Individual user History
toggle2.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle2()
        button.classList.add('checked')
    })
})
function removeToogle2() {
    toggle2.forEach((btns) => {
        btns.classList.remove('checked')
    })
}

// !Toggle 3 Make reference mandatory
toggle3.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle3()
        button.classList.add('checked')
    })
})
function removeToogle3() {
    toggle3.forEach((btns) => {
        btns.classList.remove('checked')
    })
}
// !Toggle 4 Make reference mandatory
toggle4.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle4()
        button.classList.add('checked')
    })
})
function removeToogle4() {
    toggle4.forEach((btns) => {
        btns.classList.remove('checked')
    })
}
// !Toggle 5 Make reference mandatory
toggle5.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle5()
        button.classList.add('checked')
    })
})
function removeToogle5() {
    toggle5.forEach((btns) => {
        btns.classList.remove('checked')
    })
}

// !Admin settings buttons logo where

const btnLogo = document.querySelectorAll('.option__where')

btnLogo.forEach((btns) => {
    btns.addEventListener('click', () => {
        btns.classList.toggle('active-btn')
    })
})

// !Calling the dropbox number per page

const menuNumber = document.querySelector('.entries__number')

const number = document.querySelector('.dropdown__item')

const carret = document.querySelector('.carret')

menuNumber.addEventListener('click', () => {
    number.classList.toggle('hidden')

    carret.style.transform = ' rotate(225deg) translateY(52%)'
    carret.style.right = ' -0.8rem'
})

number.addEventListener('click', (e) => {
    e.preventDefault()
    number.classList.add('hidden')
    carret.style.transform = ' rotate(45deg) translateY(-50%)'
    carret.style.right = ' -1.2rem'
})

// !Content description add content

const add = document.querySelector('.add-content')

const input = document.getElementById('content')

const task = document.querySelector('.form__task')

add.addEventListener('click', () => {
    if (input.value.length == 0) {
        alert('Please enter a content description')
    } else {
        task.innerHTML += `
           <div
        class="description d-flex justify-between pyB-2 border-bottom myT-2"
        >
            <p class="txtMd">${input.value}</p>
            <button
                class="delete-task border-0 outline-0 bg-white"
            >
                <img
                    src="images/icon-delete-red.svg"
                    alt="delete"
                    class="w-2 pointer"
                />
            </button>
        </div> 
        `
        const deleteTask = document.querySelectorAll('.delete-task')

        for (let i = 0; i < deleteTask.length; i++) {
            deleteTask[i].onclick = function () {
                this.parentNode.remove()
            }
        }

        input.value = ''
    }
})
