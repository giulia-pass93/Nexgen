
function mostraDiv(divDaMostrare){
    document.getElementById('slider').innerHTML='';

    switch (divDaMostrare){
        case 'btn1': 
            generaDiv(
                'classDiv1',
                'btn1',
                'We Share ', 
                'Good Idea',  
                'Escape the comfort zone and achieve better results with the help of experts whounderstand the subject.',
                'left center');

        break;

        case 'btn2': 
            generaDiv(
                'classDiv2',
                'btn2',
                'Ready ', 
                'Team',
                'No matter what your company needs, we will be ready to assist you in the best possible way.',
                'center');
                
        break;

        case 'btn3': 
            generaDiv(
                'classDiv3',
                'btn3',
                'Talk to a ', 
                'Consultant',
                'Do not miss the opportunity to achieve better results and solidity in the market.',
                'right center');
               
        break;
    }
}


