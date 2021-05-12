
var body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    },

    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }

}


var links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');

        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    },

    setBorder: function(border) {
        document.querySelector('#contact').style.border = border;
    }
}

function nightVision(self) {

    if (self.value === 'night') {
        body.setBackgroundColor('#151515');
        body.setColor('beige');
        links.setColor('yellow');
        links.setBorder('solid beige 0.1rem');
        self.value = 'day';
    } else {
        body.setBackgroundColor('beige');
        body.setColor('black');
        links.setColor('purple');
        links.setBorder('solid #151515 0.1rem');
        self.value = 'night';
    }

};

