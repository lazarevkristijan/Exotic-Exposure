const navSpans = document.querySelectorAll('.navSpan')
const navSpanLogo = document.querySelector('#logo')

const dropDownButton = document.getElementById('dropDown')
const dropDownMenu = document.querySelector('.dropDownMenu')
const dropDownMenuButtons = document.querySelectorAll('.dropDownMenu button')

const resourcesAnchors = document.querySelectorAll('.resourcesContent a')

const resourcesPintrestLi = document.querySelector('.resourcesContent a:nth-child(1)')
const resourcesPinterestIcon = document.querySelector('.resourcesContent i:nth-child(1)')

const footerIcons = document.querySelectorAll('.footerItems .icons a')


navSpans.forEach((navSpan) => {
    navSpan.addEventListener('mouseenter', () => {
        navSpan.style.textDecoration = '1px rgb(248, 249, 250) underline'
        navSpan.style.scale = '1.1'
    })
})
navSpans.forEach((navSpan) => {
    navSpan.addEventListener('mouseleave', () => {
        navSpan.style.textDecoration = 'none'
        navSpan.style.scale = '1'
    })
})


navSpanLogo.addEventListener('mouseenter', () => {
    navSpanLogo.style.backgroundColor = 'rgb(248, 249, 250)'
    navSpanLogo.style.color = 'rgb(33, 37, 41)'
})
navSpanLogo.addEventListener('mouseleave', () => {
    navSpanLogo.style.backgroundColor = 'rgb(33, 37, 41)'
    navSpanLogo.style.color = 'rgb(248, 249, 250)'
})

let dropDownButtonColor = 'inActive'
dropDownButton.addEventListener('click', () => {
    if (dropDownButtonColor === 'inActive') {
        dropDownButton.style.color = '#999'
        dropDownButtonColor = 'active'
    } else {
        dropDownButton.style.color = 'rgb(248, 249, 250)'
        dropDownButtonColor = 'inActive'
    }
})


dropDownMenuButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'rgba(33, 37, 41, 0.8)'
        button.style.color = 'rgb(248, 249, 250)'
        button.style.border = '2px solid rgb(248, 249, 250)'
        button.style.transition = '0.3s ease'
        button.style.scale = '0.98'
    })
})

dropDownMenuButtons.forEach(button => {
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'rgba(33, 37, 41, 0.6'
        button.style.color = 'rgb(248, 249, 250)'
        button.style.border = '2px solid rgb(33, 37, 41)'
        button.style.transition = '0.3s ease'
        button.style.scale = '1'
    })
})

let dropDownDisplay = 0
dropDownButton.addEventListener('click', () => {
    if (dropDownDisplay === 0) {
        setTimeout(() => {
            dropDownMenu.style.transform = 'translateX(0vw) scale(1)'
        }, 100);
        dropDownDisplay = 1
        dropDownMenu.style.display = 'flex'
    } else {
        setTimeout(() => {
            dropDownMenu.style.display = 'none'
            dropDownDisplay = 0
        }, 300);
        dropDownMenu.style.transform = 'translateX(40vw) scale(0.1)'
    }
})


resourcesAnchors.forEach(icon => {
    let liInnerText = icon.innerHTML
    icon.addEventListener('mouseenter', () => {
        icon.style.fontWeight = '500'
        icon.innerHTML = liInnerText + ' <'
    })
})
resourcesAnchors.forEach(icon => {
    let liInnerText = icon.innerHTML
    icon.addEventListener('mouseleave', () => {
        icon.style.fontWeight = '400'
        icon.innerHTML = liInnerText
    })
})







footerIcons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        icon.style.fontSize = '1.15em'
    })
})
footerIcons.forEach((icon) => {
    icon.addEventListener('mouseleave', () => {
        icon.style.fontSize = '1em'
    })
})
