const first = 'Uwielbiam Java Script';
const second = 'Jestem świetnym programistą';

function main(first, second){
    if(first.length > second.length){
        console.log(first);
    }else if(first.length < second.length){
        console.log(second);
    }else{
        console.log('Długości znaków są równe');
    }
}

console.log(main(first, second));