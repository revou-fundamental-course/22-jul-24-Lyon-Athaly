
// Script Package
var slideIndex = 1
showDivs (slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i
    var imgList = document.getElementsByClassName('satu');
    if (n >imgList.length) slideIndex = 1
    else if(n < 1) slideIndex = imgList.length

    for(i=0; i<imgList.length; i++) {
        imgList[i].style.display = 'none'
    }
    
    imgList[slideIndex - 1].style.display = 'block'
}

setInterval(() => {plusDivs(1)}, 4000);



// Form Validation Script
function formValidation() {
    let userName = document.getElementById('user').value;
    console.log (userName);
    if (userName == ''){
        alert('Username cannot be blank')
    }

    let Email = document.getElementById('email').value;
    console.log (Email);
    if (Email == ''){
        alert('Email cannot be blank')
    }

    let Password = document.getElementById('pass').value;
    console.log (Password);
    if (Password == ''){
        alert('Password cannot be blank')
    }

    let Confirm = document.getElementById('confirm').value;
    console.log (Confirm);
    if (Confirm == ''){
        alert('Confirm Your Password')
    }
    if (Confirm !== Password){
        alert('Password must be same')
    }
}


// Auto Banner Script

let indexSlide = 1;
showSlide(1);

function nextSlide(x){
    showSlide(indexSlide += x)
}

function showSlide(x){
    let bnrList =document.getElementsByClassName('banner-konten');
    console.log(bnrList)

    if (x > bnrList.length) indexSlide = 1;

    let index = 0
    while (index < bnrList.length) {
        bnrList[index].style.display ='none';
        index++;
    }

    bnrList[indexSlide - 1].style.display = ''
}

setInterval(() => nextSlide(1), 3000);