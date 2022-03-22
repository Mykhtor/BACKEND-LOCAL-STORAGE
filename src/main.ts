const saveName:  HTMLInputElement   = document.querySelector('#save_name')!
const saveValue: HTMLInputElement   = document.querySelector('#save_value')!
const saveBtn:   HTMLButtonElement  = document.querySelector('#save_btn')!

const readName: HTMLInputElement     = document.querySelector('#read_name')!
const data:     HTMLElement          = document.querySelector('#data')!
const readBtn:  HTMLButtonElement    = document.querySelector('#read_btn')!

saveBtn.onclick = () => {

    let name:  string = saveName.value.trim()
    let value: string = saveValue.value.trim()


    if ( name === '' || value === '') {
        alert(`Qator Bo'sh!`)
        return
    }

    // else if ( name === '') {
    //     alert(`Name qiymayti bo'sh`)
    // }
    // else if (value === '') {
    //     alert(`Value bosh`)
    // } else {
    //     return
    // }



    localStorage.setItem(name, value)
    alert(`saqlandi!`)


    //bo'shatamiz
    saveName.value  = ''
    saveValue.value = ''


}

readBtn.onclick = () => {

    let name = readName.value.trim()

    if ( name === '') {
        alert(`To'ldir`)
        return
    }

    let value = localStorage.getItem(name)!

    data.innerText = value

    if ( value === null) {
        alert(`malumot yoq!`)
        return
    }

    data.innerText = value

}