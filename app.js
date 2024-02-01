(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal =  document.querySelector('.btn-equal');

    buttons.forEach((button)=>{
        button.addEventListener('click',function(e){
            //console.log(e.target);
            //console.log(e.target.dataset.num);

            let value = e.target.dataset.num;
            screen.value += value;
        })

        
    })

    equal.addEventListener('click', equalS);
    function equalS(){
        if(screen.value === ''){
            screen.value = "Please enter"
        }else{
            let answer = eval(screen.value);  // console.log(eval('2 + 2'))-> 4
            screen.value = answer;
        }
    }
     

    clear.addEventListener('click', (e)=>{
        screen.value = '';
    })
    
})()