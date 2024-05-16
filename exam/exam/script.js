
const buttons = document.querySelectorAll("button");


let count = 0;


buttons.forEach(button => {
    button.addEventListener('click', function () {
        
        count++;

        
        document.getElementById('output').innerHTML = `${count}`;
    });
}); 