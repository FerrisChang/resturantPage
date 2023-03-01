import local from '../assets/local.png';
import '../styles/contactUs.css';

function contact() {
    const container = document.getElementById('homePageImage');

    const aboutDiv = document.createElement('div');
        aboutDiv.id = 'contactUs';

    const top = document.createElement('div');
        top.className = 'top';
        top.textContent = 'CONTACT US';

    const pictureFrame = document.createElement('div');
        pictureFrame.className = 'pictureFrame'
    const location = document.createElement('img');
        location.src = local;
        location.id = 'location';

    

    const contactInfoBox = document.createElement('div');
        contactInfoBox.className = 'information';
    const address = document.createElement('p');
        address.className = 'bold';
        address.textContent = 'ADDRESS';
    const addressInfo = document.createElement('p');
        addressInfo.className = 'italic';
        addressInfo.textContent = '888 Random Rd'
    const phone = document.createElement('p');
        phone.className = 'bold';
        phone.textContent = 'PHONE NUMBER';
    const phoneInfo = document.createElement('p');
        phoneInfo.className = 'italic';
        phoneInfo.textContent = '1(000) 999-8888'
    const store = document.createElement('p');
        store.className = 'bold';
        store.textContent = 'BUSINESS HOURS';
    const storeInfo = document.createElement('p');
        storeInfo.className = 'italic';
        storeInfo.textContent = 'MONDAY - SUNDAY: 09:30AM - 11:00PM';

    contactInfoBox.appendChild(address);
    contactInfoBox.appendChild(addressInfo);
    contactInfoBox.appendChild(phone);
    contactInfoBox.appendChild(phoneInfo);
    contactInfoBox.appendChild(store);
    contactInfoBox.appendChild(storeInfo);
    
    pictureFrame.appendChild(location);

    aboutDiv.appendChild(top);
    aboutDiv.appendChild(pictureFrame);
    aboutDiv.appendChild(contactInfoBox);

    container.appendChild(aboutDiv);

}

export default contact;