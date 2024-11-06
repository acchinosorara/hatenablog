// ハンバーガーメニュー切替時のclass付与
const toggleClassElement = document.getElementById('toggle_wrapper').children
toggleClassElement[2].addEventListener('click', () => {
    for (let i = 0; i < toggleClassElement.length; i++) {
        if (i !== 0) {
            toggleClassElement[i].classList.toggle('active')
        }
    }
})

const entryHeaderMove = () => {
    
    // キャラクターページか判定する
    const pageName = ['oberonia']
    let isClass
    for (let i = 0; i < pageName.length; i++) {
        isClass = document.body.classList.contains(`static-page-${pageName[i]}`)
    }

    // キャラクターページの場合、キャラ名を移動
    if (!isClass) {
        return
    } else {
        const entryHeader = document.querySelector('.entry-header')
        const characterProfileName = document.querySelector('.character-profile-name')
        characterProfileName.appendChild(entryHeader)
    }
}
entryHeaderMove()