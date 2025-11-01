'use strict';

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const CreateImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.appendChild(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;
// part 1

// CreateImage('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('Image 1 loaded');
//         return wait(2)
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return CreateImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return CreateImage('img/img-3.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 3 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => {
//         console.error(err);
//     });

// part2
const loadNpause = async function() {
    try {
        // load image 1
        let img = await CreateImage('img/img-1.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';
        // load image 2
        img = await CreateImage('img/img-2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';
        // load image 3
        img = await CreateImage('img/img-3.jpg');
        console.log('Image 3 loaded');
        await wait(2);
        img.style.display = 'none';
    }
    catch (err) {
        console.error(err);
    }
}
loadNpause();