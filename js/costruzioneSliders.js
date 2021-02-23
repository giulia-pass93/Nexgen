function generateTitleParagraphButtons(testo, titolo1, titolo2, paragrafo){

    const divTest = document.createElement('div');
    divTest.classList.add('divTest');
    const divImg = document.createElement('div');
    divImg.classList.add('divImg');

    const titolo=document.createElement('h1');
    const spanLeftDiv1=document.createElement('span');
    spanLeftDiv1.innerHTML=titolo1;
    spanLeftDiv1.id='spanLeftDiv1';
    titolo.appendChild(spanLeftDiv1);
    const spanRightDiv1=document.createElement('span');
    spanRightDiv1.innerHTML=titolo2;
    spanRightDiv1.id='spanRightDiv1';
    titolo.appendChild(spanRightDiv1);

    const sottoTitolo=document.createElement('h3');
    sottoTitolo.innerHTML=paragrafo;

    const divButtons = document.createElement('div');
    const btn1 = document.createElement('button');
    btn1.innerHTML='GET IN TOUCH';
    btn1.id='btn1';
    const btn2 = document.createElement('button');
    btn2.innerHTML='READ MORE';
    btn2.id='btn2';

    divTest.appendChild(titolo);
    divTest.appendChild(sottoTitolo);
    divButtons.appendChild(btn1);
    divButtons.appendChild(btn2);
    divTest.appendChild(divButtons);

    testo.appendChild(divTest);
    testo.appendChild(divImg);
}