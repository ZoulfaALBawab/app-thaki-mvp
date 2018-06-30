const electron = require("electron");
const { ipcRenderer } = electron;

const myBar = document.getElementById("myBar");
const dwnBtn = document.querySelector('button');
const active = document.getElementById('active');
myBar.hidden = true;
dwnBtn.addEventListener('click', () => {
    dwnBtn.hidden = true;
    myBar.hidden = false;
    
    ipcRenderer.on('dwn', (e, info) => {
    move(info.prog);

    function move(val) {
            myBar.style.width = val + '%'; 
            myBar.innerHTML = val + '%';
            if (val === 100) {
                myBar.hidden = true;
                active.removeAttribute("style");
                active.style.cursor = 'auto';
                active.setAttribute('href', info.path);
            };
      };
    });
});
    


