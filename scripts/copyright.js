(function() {

    function updateCopyright() {
        const currentYear = new Date().getFullYear();
        
        const copyrightElement = document.querySelector('.copyright');
        if (copyrightElement) {
            copyrightElement.innerHTML = `©${currentYear} by jhausofbeauty.com`
        }
    }

    document.addEventListener("DOMContentLoaded", updateCopyright);
    
})()