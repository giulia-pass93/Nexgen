function generaDiv(classe, id, titolo1, titolo2, paragrafo, position){

    const testo=document.createElement('div');
    testo.classList.add(classe);
 
    document.getElementById('sfondo').style.background="url('app/assets/img.jpg')";
    document.getElementById('sfondo').style.backgroundRepeat="no-repeat";
    document.getElementById('sfondo').style.backgroundSize="cover";
    document.getElementById('sfondo').style.backgroundAttachment="scroll";
    document.getElementById('sfondo').style.backgroundPosition=position;

    const divTest = document.createElement('div');
    divTest.classList.add('divTest');

    const titolo=document.createElement('h1');
    titolo.classList.add('titolo');
    const spanLeft=document.createElement('span');
    spanLeft.innerHTML=titolo1;
    spanLeft.id='spanLeft';
    titolo.appendChild(spanLeft);
    const spanRight=document.createElement('span');
    spanRight.innerHTML=titolo2;
    spanRight.id='spanRight';
    titolo.appendChild(spanRight);

    const sottoTitolo=document.createElement('p');
    sottoTitolo.innerHTML=paragrafo;
    sottoTitolo.classList.add('sottoTitolo');

    if(id==='btn2'){
        sottoTitolo.style.padding="0px 70px 0px 70px";
    }
    
    const divButtons = document.createElement('div');
    divButtons.classList.add('divButtons');
    const btnSlider1 = document.createElement('button');
    btnSlider1.innerHTML='GET IN TOUCH';
    btnSlider1.classList.add('btnSlider1');
    const btnSlider2 = document.createElement('button');
    btnSlider2.innerHTML='READ MORE';
    btnSlider2.classList.add('btnSlider2');

    divTest.appendChild(titolo);
    divTest.appendChild(sottoTitolo);
    divButtons.appendChild(btnSlider1);
    divButtons.appendChild(btnSlider2);
    divTest.appendChild(divButtons);


    testo.appendChild(divTest);

    document.getElementById('slider').appendChild(testo);
}