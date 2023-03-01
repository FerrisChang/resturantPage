import dumpling from "../assets/dumplings.jpg";
import bao from "../assets/bao.jpg";
import beefNoodle from "../assets/beefNoodle.jpg";
import '../styles/menu.css';

const menuDisplay = () => {
    const container = document.getElementById('homePageImage');

    const menu = document.createElement('div');
        menu.classList = 'menuList';

    const title = document.createElement('p');
        title.id = 'menu';
        title.textContent = 'Menu';
        menu.appendChild(title);
    
    const dumplings = document.createElement('div');
        dumplings.classList = 'dumplings';
    const dumplingImg = document.createElement("img");
        dumplingImg.src=dumpling;
        dumplingImg.id="dumpling-food";
    const descBoxOne = document.createElement('div');
        descBoxOne.classList = 'descriptionBox'
    const dumplingTitle = document.createElement('p')
        dumplingTitle.textContent = 'Steamed Pork Dumplings';
        dumplingTitle.classList = 'dumplingsTitle';
    const dumplingDesc = document.createElement('p')
        dumplingDesc.textContent = 'Tasty steamed pork dumplings Serve with hoisin sauce, hot Chinese-style mustard, and toasted sesame seeds';
        dumplingDesc.classList = 'dumplingDesc';

        descBoxOne.appendChild(dumplingTitle);
        descBoxOne.appendChild(dumplingDesc);
        dumplings.appendChild(dumplingImg);
        dumplings.appendChild(descBoxOne);


    const beefBao = document.createElement('div');
        beefBao.classList = 'bao';
    const baoImg = document.createElement("img");
        baoImg.src=bao;
        baoImg.id="bao-food";
    const descBoxTwo = document.createElement('div');
        descBoxTwo.classList = 'descriptionBox'
    const baoTitle = document.createElement('p')
        baoTitle.textContent = 'Beef Bao Bun';
        baoTitle.classList = 'BaoTitle';
    const baoDesc = document.createElement('p')
        baoDesc.textContent = 'Heat shredded Pot Roast, stir in spinach and hoisin sauce, wrapped in soft bread that has been steamed';
        baoDesc.classList = 'baoDesc';

        descBoxTwo.appendChild(baoTitle);
        descBoxTwo.appendChild(baoDesc);
        beefBao.appendChild(baoImg);
        beefBao.appendChild(descBoxTwo);


    const noodles = document.createElement('div');
        noodles.classList = 'noodle';
    const noodleImg = document.createElement("img");
        noodleImg.src=beefNoodle;
        noodleImg.id="noodle-food";
    const descBoxThree = document.createElement('div');
        descBoxThree.classList = 'descriptionBox'
    const noodleTitle = document.createElement('p')
        noodleTitle.textContent = 'Beef Noodle Soup';
        noodleTitle.classList = 'noodleTitle';
    const noodleDesc = document.createElement('p')
        noodleDesc.textContent = 'Tender beef stewed for hours in the accompanying savory, full-bodied broth';
        noodleDesc.classList = 'noodleDesc';

        descBoxThree.appendChild(noodleTitle);
        descBoxThree.appendChild(noodleDesc);
        noodles.appendChild(noodleImg);
        noodles.appendChild(descBoxThree);




    menu.appendChild(dumplings);
    menu.appendChild(beefBao);
    menu.appendChild(noodles);
    container.appendChild(menu);
}

export default menuDisplay;