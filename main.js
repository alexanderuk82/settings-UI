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
const toggle6 = document.querySelectorAll('.buttonTap6')
const toggle7 = document.querySelectorAll('.buttonTap7')
const toggle8 = document.querySelectorAll('.buttonTap8')
const toggle9 = document.querySelectorAll('.buttonTap9')
const toggle10 = document.querySelectorAll('.buttonTap10')
const toggle11 = document.querySelectorAll('.buttonTap11')
const toggle12 = document.querySelectorAll('.buttonTap12')
const toggle13 = document.querySelectorAll('.buttonTap13')

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
// !Toggle 6 Make reference mandatory
toggle6.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle6()
        button.classList.add('checked')
    })
})
function removeToogle6() {
    toggle6.forEach((btns) => {
        btns.classList.remove('checked')
    })
}
// !Toggle 7 Make reference mandatory
toggle7.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle7()
        button.classList.add('checked')
    })
})
function removeToogle7() {
    toggle7.forEach((btns) => {
        btns.classList.remove('checked')
    })
}
// !Toggle 8 Make reference mandatory
toggle8.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle8()
        button.classList.add('checked')
    })
})
function removeToogle8() {
    toggle8.forEach((btns) => {
        btns.classList.remove('checked')
    })
}
// !Toggle 9 Make reference mandatory
toggle9.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle9()
        button.classList.add('checked')
    })
})
function removeToogle9() {
    toggle9.forEach((btns) => {
        btns.classList.remove('checked')
    })
}
// !Toggle 10 Make reference mandatory
toggle10.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle10()
        button.classList.add('checked')
    })
})
function removeToogle10() {
    toggle10.forEach((btns) => {
        btns.classList.remove('checked')
    })
}
// !Toggle 11 Make reference mandatory
toggle11.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle11()
        button.classList.add('checked')
    })
})
function removeToogle11() {
    toggle11.forEach((btns) => {
        btns.classList.remove('checked')
    })
}
// !Toggle 12 Make reference mandatory
toggle12.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle12()
        button.classList.add('checked')
    })
})
function removeToogle12() {
    toggle12.forEach((btns) => {
        btns.classList.remove('checked')
    })
}
// !Toggle 13 Make reference mandatory
toggle13.forEach((button) => {
    button.addEventListener('click', () => {
        removeToogle13()
        button.classList.add('checked')
    })
})
function removeToogle13() {
    toggle13.forEach((btns) => {
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

// !Calling the dropbox number per page ***entries***

const menuNumber = document.querySelectorAll('.entries__number')

const number = document.querySelector('.dropdown__item')

const carret = document.querySelector('.carret')

menuNumber.forEach((entries) => {
    entries.addEventListener('click', () => {
        number.classList.remove('hidden')

        carret.style.transform = ' rotate(225deg) translateY(52%)'
        carret.style.right = ' -0.8rem'
    })
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

// !Customer signature ***entries***

const menuNumbers = document.querySelector('.entries__customer')

const numbers = document.querySelector('.dropdown__items')

const carrets = document.querySelector('.carret-down')

menuNumbers.addEventListener('click', () => {
    numbers.classList.toggle('hidden')

    carrets.style.transform = ' rotate(225deg) translateY(52%)'
    carrets.style.right = ' -0.8rem'
})

numbers.addEventListener('click', (e) => {
    e.preventDefault()
    numbers.classList.add('hidden')
    carrets.style.transform = ' rotate(45deg) translateY(-50%)'
    carrets.style.right = ' -1.2rem'
})

// !Profile settings toggles and btns

const btnProfile = document.querySelectorAll('.btn-profile')
const easyBtn = document.querySelector('#easy-ship')
const singleBtn = document.querySelector('#single-ship')
const batchBtn = document.querySelector('#batch-ship')
const boundInter = document.querySelector('#international')
const boundDomes = document.querySelector('#domestic')
const contentDoc = document.querySelector('#documents')
const contentPack = document.querySelector('#packages')
const standard = document.querySelector('#standard')
const thermal = document.querySelector('#thermal')
const addresShip = document.querySelector('#address-ship')
const globalSearch = document.querySelector('#global-search')
const invoiceComer = document.querySelector('#invoice-comercial')
const invoiceProfor = document.querySelector('#invoice-proforma')

//
// !FIRST ROW FOR DEFAULT PAGES
//

btnProfile.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        if (btns === easyBtn) {
            easyBtn.classList.add('active')
            singleBtn.classList.remove('active')
            batchBtn.classList.remove('active')
        } else if (btns === singleBtn) {
            easyBtn.classList.remove('active')
            singleBtn.classList.add('active')
            batchBtn.classList.remove('active')
        } else if (btns === batchBtn) {
            easyBtn.classList.remove('active')
            singleBtn.classList.remove('active')
            batchBtn.classList.add('active')
        } else if (btns === boundInter) {
            boundInter.classList.add('active')
            boundDomes.classList.remove('active')
        } else if (btns === boundDomes) {
            boundInter.classList.remove('active')
            boundDomes.classList.add('active')
        } else if (btns === contentPack) {
            contentDoc.classList.remove('active')
            contentPack.classList.add('active')
        } else if (btns === contentDoc) {
            contentDoc.classList.add('active')
            contentPack.classList.remove('active')
        } else if (btns === standard) {
            standard.classList.add('active')
            thermal.classList.remove('active')
        } else if (btns === thermal) {
            standard.classList.remove('active')
            thermal.classList.add('active')
        } else if (btns === addresShip) {
            globalSearch.classList.remove('active')
            addresShip.classList.add('active')
        } else if (btns === globalSearch) {
            globalSearch.classList.add('active')
            addresShip.classList.remove('active')
        } else if (btns === invoiceComer) {
            invoiceComer.classList.add('active')
            invoiceProfor.classList.remove('active')
        } else if (btns === invoiceProfor) {
            invoiceComer.classList.remove('active')
            invoiceProfor.classList.add('active')
        }
    })
})

// !Navigation page entries bottom navigation

const dropBox = document.querySelectorAll('.pages__entries__show__list')
const list = document.querySelector('#list-box')
const btnEntries = document
    .querySelectorAll('.pages__entries__show button')
    .forEach((el) => {
        el.addEventListener('click', toggleBtn)
    })

function toggleBtn() {
    dropBox.forEach((box) => {
        box.classList.toggle('visible')
    })
}
