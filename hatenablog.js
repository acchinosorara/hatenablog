const pageName = ['oberonia']
let isClass
for (let i = 0; i < pageName.length; i++) {
    isClass = document.body.classList.contains(`static-page-${pageName[i]}`)
}

if (!isClass) {
    console.log('このページではありません')
} else {
    console.log('このページです')
}