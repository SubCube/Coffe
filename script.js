console.log('Landing scripts, if needed');

const imgArray = document.querySelectorAll('.imgBox img')
console.log(imgArray)

async function changePhoto(index) {
    await imgArray.forEach(item=>item.classList.remove('active'))
    imgArray[index].classList.add('active')
}
