setInterval(ShowTime, 1000);
function ShowTime() {
    let date = new Date();
    let d = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let arr = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    let day = arr[d];
    Am_Pm = "AM IST";
    if (hour > 12) {
        hour -= 12;
        Am_Pm = "PM IST";
    }
    if (hour == 0) {
        hour = 12;
        Am_Pm = "AM IST";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    let time = hour + ' : ' + minute + ' : ' + second;
    document.getElementById("h3").innerHTML = "Current Time <br>" + day + "," + time + "<br>" + Am_Pm;
}
ShowTime();/// Why the hell i add this here , so that it will look continues, from the starting.

document.querySelector('.div2extra').addEventListener("click", () => {
    if (document.querySelector('.div2').classList.contains("div2go")) {
        document.querySelector('.div2').classList.toggle("div2back");
        document.querySelector('.div1').classList.toggle("div1back");
    }
    else {
        document.querySelector('.div1').classList.toggle("div1go");
        document.querySelector('.div2').classList.toggle("div2go");
    }
    // document.getElementById("div2").style.animation = "animate_div2 0s ease 1 forwards";
});
document.querySelector('.leftdiv2').addEventListener("click", () => {
    if (document.querySelector('.div2').classList.contains("div2go")) {
        document.querySelector('.div2').classList.toggle("div2back");
        document.querySelector('.div1').classList.toggle("div1back");

    }
    else {
        document.querySelector('.div1').classList.toggle("div1go");
        document.querySelector('.div2').classList.toggle("div2go");
    }
});

document.querySelector('.div3extra').addEventListener("click", () => {
    if (document.querySelector('.div3').classList.contains("div3go")) {
        document.querySelector('.div3').classList.toggle("div3back");
        document.querySelector('.div1').classList.toggle("div1back");
    }
    else {
        document.querySelector('.div1').classList.toggle("div1go");
        document.querySelector('.div3').classList.toggle("div3go");
    }
});
document.querySelector('.leftdiv3').addEventListener("click", () => {
    if (document.querySelector('.div3').classList.contains("div3go")) {
        document.querySelector('.div3').classList.toggle("div3back");
        document.querySelector('.div1').classList.toggle("div1back");

    }
    else {
        document.querySelector('.div1').classList.toggle("div1go");
        document.querySelector('.div3').classList.toggle("div3go");
    }
});

//-------------  Timer Butons {start}  ----------------
//01
btn_25.addEventListener('click',()=> {
    var minutes_25 = 24,sec = 60;
    function stop() {
        clearInterval(myvar);
        return "00 : 00";
    }
    function minutes_25andseconds() {
        if (minutes_25 == 0 && sec == 0) {
            return stop();
        } else if (sec != 0) {
            sec--;
        }
        if (sec == 0 && minutes_25 > 0) {
            minutes_25--;
            sec = 59;
        }
        sec = (sec < 10) ? "0" + sec : sec;
        if (minutes_25 < 10) {
            return "0" + minutes_25 + " : " + sec ;
        }
        return minutes_25 + " : " + sec ;
    }
    var myvar = setInterval(() => {
        let ans = minutes_25andseconds();
        if (ans == "00 : 00") {
            document.querySelector('.div2h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">00 : 00</h3>';
            var i = 1;
            while (i <= 3) {
                const mysound_for_break = document.getElementById('sound');
                mysound_for_break.play();
                i++;
            }
        } else {
            document.querySelector('.div2h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">'+ans+'</h3>';
            document.querySelector('.forbuttons').className ="forbuttons_extra";
        }
    }, 1100);
    resetfornormal.addEventListener("click", ()=>{
        clearInterval(myvar);
        document.querySelector('.div2h3').innerHTML = '<h3 class="div2h3 div2h3old">Choose Timer accordingly</h3>';
        document.querySelector('.forbuttons_extra').className ="forbuttons";
    });
});
//02
btn_30.addEventListener('click', ()=> {
    var minutes_30 = 29,sec = 60;
    function stop() {
        clearInterval(myvar);
        return "00 : 00";
    }
    function minutes_30andseconds() {
        if (minutes_30 == 0 && sec == 0) {
            return stop();
        } else if (sec != 0) {
            sec--;
        }
        if (sec == 0 && minutes_30 > 0) {
            minutes_30--;
            sec = 59;
        }
        sec = (sec < 10) ? "0" + sec : sec;
        if (minutes_30 < 10) {
            return "0" + minutes_30 + " : " + sec ;
        }
        return minutes_30 + " : " + sec ;
    }
    var myvar = setInterval(() => {
        let ans = minutes_30andseconds();
        if (ans == "00 : 00") {
            document.querySelector('.div2h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">00 : 00</h3>';
            var i = 1;
            while (i <= 3) {
                const mysound_for_break = document.getElementById('sound');
                mysound_for_break.play();
                i++;
            }
        } else {
            document.querySelector('.div2h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">'+ans+'</h3>';
            document.querySelector('.forbuttons').className ="forbuttons_extra";
        }
    }, 1100);
    resetfornormal.addEventListener("click", ()=>{
        clearInterval(myvar);
        document.querySelector('.div2h3').innerHTML = '<h3 class="div2h3 div2h3old">Choose Timer accordingly</h3>';
        document.querySelector('.forbuttons_extra').className ="forbuttons";
    });
});
//03
btn_60.addEventListener('click', ()=> {
    var minutes_60 = 59,sec = 60;
    function stop() {
        clearInterval(myvar);
        return "00 : 00";
    }
    function minutes_60andseconds() {
        if (minutes_60 == 0 && sec == 0) {
            return stop();
        } else if (sec != 0) {
            sec--;
        }
        if (sec == 0 && minutes_60 > 0) {
            minutes_60--;
            sec = 59;
        }
        sec = (sec < 10) ? "0" + sec : sec;
        if (minutes_60 < 10) {
            return "0" + minutes_60 + " : " + sec ;
        }
        return minutes_60 + " : " + sec ;
    }
    var myvar = setInterval(() => {
        let ans = minutes_60andseconds();
        if (ans == "00 : 00") {
            document.querySelector('.div2h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">00 : 00</h3>';
            var i = 1;
            while (i <= 3) {
                const mysound_for_break = document.getElementById('sound');
                mysound_for_break.play();
                i++;
            }
        } else {
            document.querySelector('.div2h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">'+ans+'</h3>';
            document.querySelector('.forbuttons').className ="forbuttons_extra";
        }
    }, 1100);
    resetfornormal.addEventListener("click", ()=>{
        clearInterval(myvar);
        document.querySelector('.div2h3').innerHTML = '<h3 class="div2h3 div2h3old">Choose Timer accordingly</h3>';
        document.querySelector('.forbuttons_extra').className ="forbuttons";
    });
});
//04
breakbtn_30.addEventListener('click', ()=> {
    var minutes_30 = 29,sec = 60;
    // button25(false);
    function stop() {
        clearInterval(myvar);
        return "00 : 00";
    }
    function minutes_30andseconds() {
        if (minutes_30 == 0 && sec == 0) {
            return stop();
        } else if (sec != 0) {
            sec--;
        }
        if (sec == 0 && minutes_30 > 0) {
            minutes_30--;
            sec = 59;
        }
        sec = (sec < 10) ? "0" + sec : sec;
        if (minutes_30 < 10) {
            return "0" + minutes_30 + " : " + sec ;
        }
        return minutes_30 + " : " + sec ;
    }
    var myvar = setInterval(() => {
        let ans = minutes_30andseconds();
        if (ans == "00 : 00") {
            document.querySelector('.div3h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">00 : 00</h3>';
            var i = 1;
            while (i <= 3) {
                const mysound_for_break = document.getElementById('sound');
                mysound_for_break.play();
                i++;
            }
            // setTimeout(() => {
            //     location.reload();
            // }, 20000);
        } else {
            document.querySelector('.div3h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">'+ans+'</h3>';
            document.querySelector('.forbuttonsofbreak').className ="forbuttonsofbreak_extra";
        }
    }, 1100);
    reset.addEventListener("click", ()=>{
        clearInterval(myvar);
        document.querySelector('.div3h3').innerHTML = '<h3 class="div3h3">'+"Let's Take a Break"+'<svg style="color: gold;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">'+
        '<path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg></h3>';
        document.querySelector('.forbuttonsofbreak_extra').className ="forbuttonsofbreak";
    });
});
//05
breakbtn_5.addEventListener('click', ()=> {
    var minutes_5 = 4,sec = 60;
    // button25(false);
    function stop() {
        clearInterval(myvar);
        return "00 : 00";
    }
    function minutes_5andseconds() {
        if (minutes_5 == 0 && sec == 0) {
            return stop();
        } else if (sec != 0) {
            sec--;
        }
        if (sec == 0 && minutes_5 > 0) {
            minutes_5--;
            sec = 59;
        }
        sec = (sec < 10) ? "0" + sec : sec;
        if (minutes_5 < 10) {
            return "0" + minutes_5 + " : " + sec ;
        }
        return minutes_5 + " : " + sec ;
    }
    var myvar = setInterval(() => {
        let ans = minutes_5andseconds();
        if (ans == "00 : 00") {
            document.querySelector('.div3h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">00 : 00</h3>';
            var i = 1;
            while (i <= 3) {
                const mysound_for_break = document.getElementById('sound');
                mysound_for_break.play();
                i++;
            }
            // setTimeout(() => {
            //     location.reload();
            // }, 20000);
        } else {
            document.querySelector('.div3h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">'+ans+'</h3>';
            document.querySelector('.forbuttonsofbreak').className ="forbuttonsofbreak_extra";
        }
    }, 1100);
    reset.addEventListener("click", ()=>{
        clearInterval(myvar);
        document.querySelector('.div3h3').innerHTML = '<h3 class="div3h3">'+"Let's Take a Break"+'<svg style="color: gold;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">'+
        '<path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg></h3>';
        document.querySelector('.forbuttonsofbreak_extra').className ="forbuttonsofbreak";
    });
});
//06
breakbtn_60.addEventListener('click', ()=> {
    var minutes_60 = 59,sec = 60;
    // button25(false);
    function stop() {
        clearInterval(myvar);
        return "00 : 00";
    }
    function minutes_60andseconds() {
        if (minutes_60 == 0 && sec == 0) {
            return stop();
        } else if (sec != 0) {
            sec--;
        }
        if (sec == 0 && minutes_60 > 0) {
            minutes_60--;
            sec = 59;
        }
        sec = (sec < 10) ? "0" + sec : sec;
        if (minutes_60 < 10) {
            return "0" + minutes_60 + " : " + sec ;
        }
        return minutes_60 + " : " + sec ;
    }
    var myvar = setInterval(() => {
        let ans = minutes_60andseconds();
        if (ans == "00 : 00") {
            document.querySelector('.div3h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">00 : 00</h3>';
            var i = 1;
            while (i <= 3) {
                const mysound_for_break = document.getElementById('sound');
                mysound_for_break.play();
                i++;
            }
            // setTimeout(() => {
            //     location.reload();
            // }, 20000);
        } else {
            document.querySelector('.div3h3').innerHTML = '<h3 style="text-align:center;font-size:5rem;">'+ans+'</h3>';
            document.querySelector('.forbuttonsofbreak').className ="forbuttonsofbreak_extra";
        }
    }, 1100);
    reset.addEventListener("click", ()=>{
        clearInterval(myvar);
        document.querySelector('.div3h3').innerHTML = '<h3 class="div3h3">'+"Let's Take a Break"+'<svg style="color: gold;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">'+
        '<path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg></h3>';
        document.querySelector('.forbuttonsofbreak_extra').className ="forbuttonsofbreak";
    });
});
//-------------  Timer Butons {End}  ----------------


// ---------------- Buttons on the first display box -- i.e from  box1 -> box2  {for start }-----------//
         // ---------- returning from box 2 -> box 1 -------------------//
        //  document.getElementById('return_div2').addEventListener("click",function (){
        //      document.getElementById('div1').style.animation = "animdiv1_return 0s ease 1 forwards";
        //      document.getElementById('div2').style.animation = "animdiv2_return 0s ease 1 forwards";
        //      document.getElementById('div3').style.animation = "animdiv3_return 0s ease 1 forwards";
        //      document.getElementById('return_div2').style.animation = "animrtn_return 0s ease 1 forwards"; // pos for return btn in div 2
        //      document.getElementById('fullscreen_div2').style.animation = "anifs_return 0s ease 1 forwards";//pos of fs btn in div 2   
        //      document.getElementById('h3_2').style.animation = "anih3_2 0s ease 1 forwards";// adjusting h3_2 in div 2 after returning
        //     setTimeout(() => {
        //         location.reload();
        //     }, 0);
        //  });

// ------- Buttons on the first display box -- i.e box1 -> box3 {for break} ------------ //
// document.getElementById('break').addEventListener("click",function (){
//     document.getElementById('div1').style.animation = "anim_break_div1 0s ease 1 forwards"; // anim for div 1 
//     document.getElementById('div2').style.animation = "anim_break_div2 0s ease 1 forwards"; 
//     document.getElementById('div3').style.animation = "anim_break_div3 0s ease 1 forwards";// for z-index = 3
// });

          //  ----------- returning from box 3 -> box1 ---------------------//
        //   document.getElementById('return_div3').addEventListener("click",function (){
        //     document.getElementById('div1').style.animation = "anim_div1_return 0s ease 1 forwards";
        //     document.getElementById('div2').style.animation = "anim_div2_return 0s ease 1 forwards";
        //     document.getElementById('div3').style.animation = "anim_div3_return 0s ease 1 forwards";
        //     });

//     -----------------  Fullscreen button in div 2  i.e  expanding div2 -------------------------------------//          
// document.getElementById('fullscreen_div2').addEventListener("click",function (){
//     document.getElementById('div2').style.animation = "expand_div2 0s ease 1 forwards";
//     document.getElementById('fullscreen_div2').style.animation = "fsbtnpos 0s ease 1 forwards"; // fixing position of fullscreen btn 
//     document.getElementById('return_div2').style.animation = "rtnbtnpos 0s ease 1 forwards";//fixing position of return btn in div2
//     document.getElementById('h3_2').style.animation = "expand_h3 0s ease 1 forwards";// adjusting the size of h3 in div2
//     document.getElementById('fullscreen_div2').innerHTML = "—";//adjusting the fullscreen button after expanding
//                      document.getElementById('fullscreen_div2').addEventListener("click",function (){
//                          document.getElementById('div2').style.animation = "minimize_div2 0s ease 1 forwards";
//                          document.getElementById('return_div2').style.animation = "animrtn_return 0s ease 1 forwards"; // pos for return btn in div 2
//                          document.getElementById('fullscreen_div2').style.animation = "anifs_return 0s ease 1 forwards";//pos of fs btn in div 2   
//                          document.getElementById('h3_2').style.animation = "anih3_2 0s ease 1 forwards";// adjusting h3_2 in div 2 after returning
//                      });
// });

// var min = 30;var sec = 60;
// for(var i=min;i>=1;i--){
//     document.getElementById('h3_2').innerHTML = +" : "+sec;
// }