const pictureInnerContainer = document.querySelector('.picture-inner-container');
let imgs = ['galery1', 'galery2', 'galery3', 'galery4', 'galery5', 'galery6', 'galery7', 'galery8', 'galery9', 'galery10', 'galery11', 'galery12', 'galery13', 'galery14', 'galery15'];
function shuffleGallery() {
    imgs.sort(() => Math.random() - 0.5);
    imgs.map(function(name) {
        let img = document.createElement('img');
        img.classList.add('gallery-img')
        img.src = `./assets/img/galery/${name}.jpg`;
        img.alt = `galery${name}`;
        pictureInnerContainer.append(img);
    })
}
shuffleGallery();