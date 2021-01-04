setInterval(()=>{
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    console.log(h+" "+m+" "+s);
    hr=30*h+m/2;
    mr=6*m;
    sr=6*s;
    document.querySelector(".hour").style.transform="rotate("+hr+"deg)";
    document.querySelector(".minute").style.transform="rotate("+mr+"deg)";
    document.querySelector(".second").style.transform="rotate("+sr+"deg)";
},1000);