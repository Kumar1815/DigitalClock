var rotatesec;
var rotatemin;
var rotatehr;
var togglestat=true;

function grandcalender() {
    var calender = new Date();
    var time = document.getElementById("time");
    var cal = document.getElementById("cal");
    var date = calender.getDate();
    var month = calender.getMonth();
    var year = calender.getFullYear();
    var hr = calender.getHours();
    var min = calender.getMinutes();
    var sec = calender.getSeconds();
    var day=calender.getDay();
    rotatesec=sec;
    rotatemin=min;

    var allmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var allday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var allwallpapers=["1.jpg","3.png","2.png","4.png","5.png","6.png","7.png"];
    document.body.style.backgroundImage=`url(./clock-wallPapers/${allwallpapers[day]})`;
    day=allday[day];
    month = allmonth[month];
    var am_pm = "AM";

    if (hr >= 12) {
        am_pm = "PM";

        if (hr > 12) {
            if(togglestat){
            hr -= 12;
            
            }
            document.getElementById("darkmodeBackground").style.backgroundColor=`rgba(0, 0, 0, 0.553)`;
            
        }
        
    }
 
    if (hr <= 9) {
        hr = "0" + hr;

    }
    if (min <= 9) {
        min = "0" + min;

    }
    if (sec <= 9) {
        sec = "0" + sec;
    }
    if (hr == 0) {
        hr = 12;

    }
    
  
    document.getElementById("hrneedle").innerHTML=hr;

    document.getElementById("minneedle").innerHTML=min;

    rotatehr=hr;
    time.innerHTML = `${hr} : ${min}  ${am_pm}`;
    document.getElementById("sec").innerHTML=`${sec}`
    cal.innerHTML = `${date} / ${month} / ${year} ${day}`;
    fun();
}
setInterval(grandcalender, 1000);
var rotate=0;
var rotateminhand=0;
var rotatehrhand=0;

function fun(){
    rotate =rotatesec*6;
    rotateminhand=rotatemin*6;  
    rotatehrhand=(rotatehr * 30) + (rotatemin * 0.5);

    document.getElementById("secClock").style.transform=`rotate(${rotate}deg)`;
    document.getElementById("minClock").style.transform=`rotate(${rotateminhand}deg)`;
    document.getElementById("hrClock").style.transform=`rotate(${rotatehrhand}deg)`;

}

var togglethumb=document.getElementById("toggleButton");

function toggle24(){

    if (togglestat == true) {
        togglethumb.style.left = "25px";
        togglestat = false;
        console.log("Switched to 24-hour format");
    } else {
        togglethumb.style.left = "0"; 
        togglestat = true;
        console.log("Switched to 12-hour format");
    }

}


