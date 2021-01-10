document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
})(), true);