'use strict'

const swtcher = document.querySelector('.btn');

swtcher.addEventListener('click', function() {
     document.body.classList.toggle('dark-theme')

     var className = document.body.className;
     if (className == "light-theme") {
        this.textContent = "dark";
     }
     else { 
        this.textContent= "light";
     }
     console.log('current class name:'+ className);
});