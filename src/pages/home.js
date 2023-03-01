import '../styles/home.css'

const homePage = () => {
    const home = document.getElementById('content');
    const descBox = document.createElement('div');
    descBox.classList = 'description-box';
    const linkBox = document.createElement('div');
    linkBox.classList = 'option-bar'
    const list = document.createElement('div');
    list.classList = 'links'
    const homeImage = document.createElement('div')
    homeImage.id = 'homePageImage'
    
    const firstDesc = document.createElement('p');
    firstDesc.classList = 'firstDesc'
    firstDesc.textContent = 'Come discover the tastes of China';
    const secondDesc = document.createElement('h1');
    secondDesc.classList = 'secDesc'
    secondDesc.textContent = 'An authentic chinese experience';
    const thirdDesc = document.createElement('button');
    thirdDesc.id = 'menuBtn'
    thirdDesc.textContent = 'Menu';
    
    const logo = document.createElement('div');
    logo.classList = 'title'
    logo.textContent = 'Beijing Garden';
    const firstLink = document.createElement('button');
    firstLink.textContent = 'Home';
    firstLink.id = 'home';
    const secondLink = document.createElement('button');
    secondLink.textContent = 'Contact us';
    secondLink.id = 'contact';


    
    home.appendChild(descBox);
    home.appendChild(linkBox);
    linkBox.appendChild(list);
    linkBox.appendChild(logo);
    linkBox.appendChild(homeImage);
    descBox.appendChild(firstDesc);
    descBox.appendChild(secondDesc);
    descBox.appendChild(thirdDesc);
    list.appendChild(firstLink);
    list.appendChild(secondLink);
    }

    export default homePage;