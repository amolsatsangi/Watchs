setInterval(function(){
    var d = new Date();
    var date=d.getDate();
    if(date<10)
    {
        date='0'+date;
    }
    var month=d.getMonth()+1;
    if(month<10)
    {
        month='0'+month;
    }
    var year=d.getFullYear();
    var hour=d.getHours();
    if(hour<10)
    {
        hour='0'+hour;
    }
    var minute=d.getMinutes();
    if(minute<10)
    {
        minute='0'+minute;
    }
    var second=d.getSeconds();
    if(second<10)
    {
        second='0'+second;
    }
    var msg='<h1 class="display-3 text-center" id="date">'+date+'</h1>';
    document.getElementById("date").innerHTML=msg;
    msg='<h1 id="month" class="display-3 text-center">'+(month)+'</h1>';
    document.getElementById("month").innerHTML=msg;
    msg='<h1 id="year" class="display-3 text-center">'+(year-2000)+'</h1>';
    document.getElementById("year").innerHTML=msg;
    msg='<h1 id="hour" class="display-2 text-center">'+hour+'</h1>';
    document.getElementById("hour").innerHTML=msg;
    msg='<h1 id="minute" class="display-2 text-center">'+minute+'</h1>';
    document.getElementById("minute").innerHTML=msg;
    msg='<h1 id="second" class="display-2 text-center">'+second+'</h1>';
    document.getElementById("second").innerHTML=msg;

},1000)