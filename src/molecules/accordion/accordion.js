document.querySelectorAll('.accordion .accordion__header').forEach(header =>
    header.addEventListener('click', function(event) {
        const tabIsClosed = event.currentTarget.nextElementSibling.classList.contains('accordion__contents--hidden');

        // collapse all open accordion tabs
        event.currentTarget.parentNode.parentNode.querySelectorAll('.accordion__header-chevron').forEach(elem => 
            elem.classList.remove('-rotate-180')
        );
        event.currentTarget.parentNode.parentNode.querySelectorAll('.accordion__contents').forEach(elem =>
            elem.classList.add('accordion__contents--hidden')
        );
        
        // open or close this accordion tab
        if (tabIsClosed) {
            event.currentTarget.querySelector('.accordion__header-chevron').classList.add('-rotate-180');
            event.currentTarget.nextElementSibling.classList.remove('accordion__contents--hidden');    
        }
        else {
            event.currentTarget.querySelector('.accordion__header-chevron').classList.remove('-rotate-180');
            event.currentTarget.nextElementSibling.classList.add('accordion__contents--hidden');    
        }
    })
);
