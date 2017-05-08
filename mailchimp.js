window.onload = function() {
    var closePopupBtn = document.getElementsByClassName("mc-closeModal")[0];

    closePopupBtn.onclick = function(e) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'MailChimp Popup',
            eventAction: 'closed popup',
            transport: 'beacon'
        });
    }    
}