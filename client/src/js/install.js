const installBtn = document.getElementById('buttonInstall');
let deferedPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installBtn.style.visibility = 'visible';
    deferedPrompt = event;
});

installBtn.addEventListener('click', async () => {
    deferedPrompt.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';
});

window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled', event);
});
