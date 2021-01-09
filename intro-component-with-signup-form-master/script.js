document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
})(), true);

document.querySelector(".btn").addEventListener('click', function (){
  console.log("DUH");
  document.querySelector(".input-btn-grp").classList.add("validate");
  return false;
});

