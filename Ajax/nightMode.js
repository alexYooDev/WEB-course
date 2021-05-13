var links = {
  setColor: function (color) {
      var alist = document.querySelectorAll("a");
      var i = 0;
      while (i < alist.length) {
          alist[i].style.color = color;
          i = i + 1;
      }
  }
  
};


let nightMode = localStorage.getItem('nightMode'); 
const nightModeToggle = document.querySelector('#night-mode-toggle');
  
  //Check if dark mode is enabled: if it's enabled turn it off, if IT'S DISABLED turn it on
  const enableNightMode = () => {
    document.body.classList.add("nightMode");   //body태크에 class를 추가 "nightMode"
    links.setColor("pink");
    localStorage.setItem("nightMode", "enabled");  //localStorage의 "nightMode" 아이템을 "enabled"로 설정
  };

  const disableNightMode = () => {
    document.body.classList.remove("nightMode");  //body태크에 class를 제거 "nightMode"
    links.setColor("blue");
    localStorage.setItem("nightMode", null); //localStorage의 "nightMode" 아이템을 "disabled"로 설정
  };


  if(nightMode === "enabled") {    //nightMode가 활성화 되있는지 체크하고 되있으면 다크모드 활성화 상태로 유지
    enableNightMode();
  }
  
  nightModeToggle.addEventListener("click", () => {  
    
    nightMode = localStorage.getItem("nightMode");//click 이벤트 발생 시 
    if(nightMode !== "enabled") {   //nightMode가 활성화 되있지 않으면  ==!이 아니라 !== 다 멍충아
    enableNightMode();
    console.log("enabled");          //활성화
    } else {                      //그렇지 않다면
      disableNightMode();    
      console.log(null);     //비활성화
    }
  }); 
