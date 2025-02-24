document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U')) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C')) {
        event.preventDefault();
    }
    if (event.key === 'F12') {
        event.preventDefault();
    }
});
