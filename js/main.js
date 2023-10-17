var list = document.querySelector('.list')
var count = 0

function fnNext()  {
    if (count < 3) {
        count = count +1
    } else {
        count = 0
    }
    list.style.transform = `translateX(-${700 * count}px)`
}

function fnPrev() {
    if ( count > 0)  {
        count = count - 1
    } else {
        count = 3
    }
    list.style.transform = `translateX(-${700 * count}px)`
    
}