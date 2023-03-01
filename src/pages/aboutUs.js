import profilePicture from '../assets/profilePicture.jpg'
import '../styles/aboutUs.css'


function profile() {
    const container = document.getElementById('homePageImage');

    const aboutDiv = document.createElement('div');
    aboutDiv.id = 'aboutUs';

    const picture = document.createElement('img');
    picture.src = profilePicture;
    picture.id = 'picture';

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = 'Our History';

    const information = document.createElement('div');
    information.className = 'information';
    information.textContent = "The city of Beijing has a long and rich history that dates back over 3,000 years. Prior to the unification of China by the First Emperor in 221 BC, Beijing had been for centuries the capital of the ancient states of Ji and Yan. It was a provincial center in the earliest unified empires of China, Qin and Han."

    container.appendChild(aboutDiv);
    aboutDiv.appendChild(picture);
    aboutDiv.appendChild(title);
    aboutDiv.appendChild(information);
}

export default profile;