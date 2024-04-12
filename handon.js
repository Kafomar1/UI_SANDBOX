window.addEventListener('scrool',function(){
    var topnav=document.getElementById('topnav');
    if (window.scrollY>=300){
        topnav.classList.add('navbar-fixed');
    }else{
        topnav.classList.remove('navbar-fixed');
    }
    }
);