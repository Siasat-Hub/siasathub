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

//********************************************************************************* */
// Script for whatsapp community
function redirectToWhatsApp() {
    // Replace the below URL with your actual WhatsApp Channel link
    window.location.href = "https://whatsapp.com/channel/your-channel-id";
}