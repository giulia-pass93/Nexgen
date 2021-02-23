
function mostraDiv(divDaMostrare){
    document.getElementById('slider').innerHTML='';

    switch (divDaMostrare){
        case 'btn1': 
            generaDiv1();
        break;

        case 'btn2': 
            generaDiv2();
        break;

        case 'btn3': 
            generaDiv3();
        break;
    }
}

function generaDiv1(){
    const testo=document.createElement('div');
    testo.classList.add('classDiv1');
    generateTitleParagraphButtons(
        testo, 
        'We Share ', 
        'Good Idea',  
        'Escape the comfort zone and achieve better results with the help of experts whounderstand the subject.');
    document.getElementById('slider').appendChild(testo);
}

function generaDiv2(){
    const testo=document.createElement('div');
    testo.classList.add('classDiv2');
    generateTitleParagraphButtons(
        testo, 
        'Ready ', 
        'Team',
        'No matter what your company needs, we will be ready to assist you in the best possible way.'  
        );
    document.getElementById('slider').appendChild(testo);  
}

function generaDiv3(){
    const testo=document.createElement('div');
    testo.classList.add('classDiv3');
    generateTitleParagraphButtons(
        testo, 
        'Talk to a ', 
        'Consultant',
        'Do not miss the opportunity to achieve better results and solidity in the market.' 
        );
    document.getElementById('slider').appendChild(testo);
}

