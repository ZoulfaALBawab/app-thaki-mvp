const electron = require("electron");
const { ipcRenderer, shell } = electron;


const myBar = document.getElementById("myBar");
const dwnBtn = document.querySelector('button');
const active2 = document.getElementById('active2');
const active3 = document.getElementById('active3');
myBar.hidden = true;
dwnBtn.addEventListener('click', () => {
    dwnBtn.hidden = true;
    myBar.hidden = false;
    
    ipcRenderer.on('dwn', (e, info) => {
    move(info.prog);
active2.addEventListener('click', () => {
    shell.openItem('/home/atheer/Downloads/thaki.mp4');
})
active3.addEventListener('click', () => {
    shell.openItem(info.path);
})
    function move(val) {
            myBar.style.width = val + '%'; 
            myBar.innerHTML = val + '%';
            if (val === 100) {
                myBar.hidden = true;
                active3.removeAttribute("style");
                active3.style.cursor = 'auto';
            };
      };
    });
});


    


