// alert('O`yin boshlanvotti, ixtiyotini qvur!');

window.addEventListener('load', function () {
    infoChanger();
})

const startingMinutes = 1;
let timeBlock = document.querySelector('.time-block');
let modalBlock = document.querySelector('.modal-block');
let cardWrapper = document.querySelector('#card-wrapper');
let time = startingMinutes * 120;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000)

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (-1 == minutes) {
        timeBlock.style.visibility = 'hidden';
        modalBlock.classList.add('active');
    }

};


// let reloadBtn = document.querySelector('.ok__button');

// reloadBtn.addEventListener('click', function() {
//     location.reload();
// })





let card = document.querySelectorAll('.cards');
let imgHolder = document.querySelectorAll('.img-holder');


let logoList = [{
        src: '../images/aliexpress.png',
        title: 'Ali Express',
        id: 1
    },

    {
        src: '../images/artel.png',
        title: 'Artel',
        id: 2
    },

    {
        src: '../images/assassins.png',
        title: 'Assassin`s Creed',
        id: 3
    },

    {
        src: '../images/batman.jpg',
        title: 'Bat-Man',
        id: 4
    },

    {
        src: '../images/bbc.png',
        title: 'BBC',
        id: 5
    },

    {
        src: '../images/bmw.jpg',
        title: 'BMW',
        id: 6
    },

    {
        src: '../images/chanel.png',
        title: 'Chanel',
        id: 7
    },

    {
        src: '../images/citroen.png',
        title: 'Citroen',
        id: 8
    },

    {
        src: '../images/csgo.png',
        title: 'CS:GO',
        id: 9
    },

    {
        src: '../images/dell.png',
        title: 'Dell',
        id: 10
    },

    {
        src: '../images/figma.png',
        title: 'Figma',
        id: 11
    },

    {
        src: '../images/instagram.webp',
        title: 'Instagram',
        id: 12
    },

    {
        src: '../images/intel.jpg',
        title: 'Intel',
        id: 13
    },

    {
        src: '../images/lego.png',
        title: 'Lego',
        id: 14
    },

    {
        src: '../images/lg.png',
        title: 'LG',
        id: 15
    },

    {
        src: '../images/loius_vuitton.png',
        title: 'Loius Vuitton',
        id: 16
    },

    {
        src: '../images/mastercard.jpg',
        title: 'Master Card',
        id: 17
    },

    {
        src: '../images/netflix.jpg',
        title: 'Netflix',
        id: 18
    },

    {
        src: '../images/nike.jpg',
        title: 'Nike',
        id: 19
    },

    {
        src: '../images/photoshop.png',
        title: 'Photoshop',
        id: 20
    },

    {
        src: '../images/pixar.jpg',
        title: 'Pixar',
        id: 21
    },

    {
        src: '../images/play-station.jpg',
        title: 'Play Station',
        id: 22
    },

    {
        src: '../images/rolex.png',
        title: 'Rolex',
        id: 23
    },

    {
        src: '../images/safari.png',
        title: 'Safari',
        id: 24
    },

    {
        src: '../images/shell.png',
        title: 'Shell',
        id: 25
    },

    {
        src: '../images/skype.png',
        title: 'Skype',
        id: 26
    },

    {
        src: '../images/superdispatch.png',
        title: 'Super Dispatch',
        id: 27
    },

    {
        src: '../images/tesla.jpg',
        title: 'Tesla',
        id: 28
    },

    {
        src: '../images/ubisoft.jpg',
        title: 'Ubisoft',
        id: 29
    },

    {
        src: '../images/uefa.png',
        title: 'UEFA',
        id: 30
    },

    {
        src: '../images/amazon.jpg',
        title: 'Amazon',
        id: 31
    },

    {
        src: '../images/apple.jpg',
        title: 'Apple',
        id: 32
    },

    {
        src: '../images/c++.png',
        title: 'C++',
        id: 33
    },

    {
        src: '../images/mozilla.png',
        title: 'Mozilla',
        id: 34
    },

    {
        src: '../images/python.jpg',
        title: 'Python',
        id: 35
    },

    {
        src: '../images/react.webp',
        title: 'React',
        id: 36
    },

    {
        src: '../images/youtube.png',
        title: 'YouTube',
        id: 37
    },

    {
        src: '../images/vs_code.png',
        title: 'VS Code',
        id: 38
    },

    {
        src: '../images/twitter.png',
        title: 'Twitter',
        id: 39
    },

    {
        src: '../images/tiktok.png',
        title: 'TikTok',
        id: 40
    },

    {
        src: '../images/telegram.webp',
        title: 'Telegram',
        id: 41
    },

    {
        src: '../images/Microsoft_logo.jpg',
        title: 'Microsoft',
        id: 42
    },

    {
        src: '../images/messenger.jpg',
        title: 'Messenger',
        id: 43
    },

    {
        src: '../images/Linux_logo.jpg',
        title: 'Linux',
        id: 44
    },

    {
        src: '../images/linkedin.png',
        title: 'Linkedin',
        id: 45
    },

    {
        src: '../images/java.png',
        title: 'Java',
        id: 46
    },

    {
        src: '../images/hp.jpg',
        title: 'HP',
        id: 47
    },

    {
        src: '../images/google.png',
        title: 'Google',
        id: 48
    },

    {
        src: '../images/gmail.png',
        title: 'Gmail',
        id: 49
    },

    {
        src: '../images/Facebook.png',
        title: 'Facebook',
        id: 50
    }
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let winBlock = document.querySelector('.you-win-block')
let question = document.querySelector('.question');
let oldLogo = [];
let oldRandomNumbers = []; // [1, 2, 5, 7, 7, 10, 15, 2]

function infoChanger() {
    for (let i = 0; i < imgHolder.length; i++) {
        randomLogo = getRandomInt(50); // 4, 4
        if (!oldLogo.includes(logoList[randomLogo])) {
            oldLogo.push(logoList[randomLogo]);
            imgHolder[i].setAttribute('src', logoList[randomLogo].src)
            imgHolder[i].setAttribute('data-id', logoList[randomLogo].id)
            // card.forEach(index => {
            //     index.setAttribute('data-id', logoList[randomLogo].id)
            // })
        }
        if (oldRandomNumbers.includes(randomLogo)) {
            i--;
        }
        oldRandomNumbers.push(randomLogo);
    }

    function getQuestion(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    randomQuestion = getQuestion(50);
    question.textContent = (oldLogo[randomQuestion].title)
    question.setAttribute('data-id', oldLogo[randomQuestion].id)


};

imgHolder.forEach(item => {
    item.addEventListener('click', function () {
        if (item.dataset.id == question.dataset.id) {
            oldLogo = oldLogo.filter(sign => {
                if (sign !== undefined) {
                    return sign.id != question.dataset.id
                }
                
                
            })
            if (oldLogo.length === 0) {
                winBlock.classList.add('active');
                modalBlock.style.display = 'none'
                timeBlock.style.visibility = 'hidden';
            }
            console.log(oldLogo);
            item.classList.add('true');

            imgHolder.forEach(el => {
                el.classList.remove('false');
            })

            next();
        } else {
            item.classList.add('false')
            
            // alert('Noto\'g\'ri jabob! Ushbu javobdan qayta foydalanishingiz mumkin');
        }
    })
});

function queGenerator(e) {
    randomQuestion = getQuestion(50);
    question.textContent = (oldLogo[randomQuestion].title)
    question.setAttribute('data-id', oldLogo[randomQuestion].id)
}

let haveArr = [];

function next() { //savollarni qayta random qiladgan funksiya
    const randomTitle = Math.floor(Math.random() * oldLogo.length);
    question.textContent = oldLogo[randomTitle].title;
    question.setAttribute('data-id', oldLogo[randomTitle].id)

    if (!haveArr.includes(oldLogo[randomQuestion])) {
        oldLogo.push(haveArr[randomQuestion])
        item.setAttribute('src', logoList[randomQuestion].src);
        item.setAttribute('data-id', oldLogo[randomQuestion].id);
    } else {
        oldLogo.slice(haveArr[randomQuestion])
    }
};



// logoList dagi rasmlarni idisi savol ko'rinishida chiqishi kerak!
// Va unga tegishli bo'lgan src yani rasm click bo'lganda - opaciry kamayishi kerak, yoki visibility hidden bo'lishi kerak
// Agar unga tegishli bo'lmagan rasm click bo'lganda qizil border paydo bo'lishi kerak
// 1 daqiqa ichida hamma logolar to'g'ri topilsa "Siz yuttingiz" degan modal ochilishi kerak
// 1 daqiqa ichida 10tadan ko'p rasm to'g'ri topilsagina "Siz yuttingiz" modali ochilsin
// Imkoni bo'lsa ovozlar bilan ham ishlash kerak
// Eng asosiysi man bulani qiloliman! Onasini emsin bu imtixondanam otib ketaman