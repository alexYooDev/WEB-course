var body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
        //$('body').css('color', color);
    },

    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
        //$('body').css('backgroundColor', color);
    }

}

var links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;    //모든 링크 색을 변경
            i = i + 1;

        }
       // $('a').css('color', color);
    }
}


function nightDayHandler(self) {
    //var target = document.querySelector('body');
    if (self.value === 'night') {
        body.setBackgroundColor('#151515');   //바탕은 검은색
        body.setColor('#f4eee8'); //글은 베이지색
        self.value = 'day';

        // 하이퍼링크 색 변환
        links.setColor('powderblue');

    } else {
        body.setBackgroundColor('#f4eee8');   //배경 베이지색
        body.setColor('black');   //글 검정색
        self.value = 'night'    //버튼 night로 변경

        links.setColor('blue');
    }
}