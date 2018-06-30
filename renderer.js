const electron = require("electron");
const { ipcRenderer } = electron;

const myBar = document.getElementById("myBar");
const dwnBtn = document.querySelector('button');
const active = document.getElementById('active');
myBar.hidden = true;
dwnBtn.addEventListener('click', () => {
    dwnBtn.hidden = true;
    myBar.hidden = false;
    active.removeAttribute("style")
    active.style.cursor = 'auto';
    ipcRenderer.on('dwn', (e, prog) => {
    move(prog);

    function move(val) {
            myBar.style.width = val + '%'; 
            myBar.innerHTML = val + '%';
            if (val === 100) {
                myBar.hidden = true;
            };
      };
    });
});
    


