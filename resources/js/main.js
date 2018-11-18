
var allButtons = $('#buttons > button')

let index = 0;
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (e) {
        index = $(e.currentTarget).index()
        $(allButtons[index]).addClass('active').siblings().removeClass('active')
        var p = (index+1) * -320
        $('#images').css({
            'margin-left':  p + 'px'
        })
    })
}

function animate(offset){
    var newLeft = parseInt($('#images').css('margin-left')) + offset
    var time = 320 //位移总时间
    var interval = 10 //位移间隔时间
    var speed = offset / (time/interval) //每次位移量

    function go(){
        if ((speed < 0 && parseInt($('#images').css('margin-left')) > newLeft) || (speed > 0 && parseInt($('#images').css('margin-left')) < newLeft)){
        $('#images').css({
            'margin-left' : parseInt($('#images').css('margin-left')) + speed + 'px'
        })
        setTimeout(go, interval)
        }
        else {
            $('#images').css({
                'margin-left' : newLeft + 'px'
            })
            if(newLeft < -960){
                $('#images').css({'margin-left': '-320px'})
            }
            if(newLeft > -320){
                $('#images').css({'margin-left': '-960px'})
            }
        }
    }
    go()
}

let numberOfImages = allButtons.length
timer()

function timer() {
    id = setInterval(() => {
        $('#next').trigger('click')
    }, 3000)
}

function stop(){
    clearInterval(id)
}

function showButton(){
        $(allButtons[index]).addClass('active').siblings().removeClass('active')
}

$('#prev').on('click',function(e){
    if(index === 0){
        index = 2
    }else{
        index -= 1 
    }
    animate(320)
    showButton() 
    $(allButtons[index]).addClass('active').siblings().removeClass('active')
})

$('#next').on('click',function(){
    if(index === 2){
        index = 0
    }else{
        index += 1 
    }
    animate(-320) 
    showButton()
    $(allButtons[index]).addClass('active').siblings().removeClass('active')
})

$('.imgContainer').on('mouseenter', function(){
    stop()
})

$('.imgContainer').on('mouseleave', function(){
    timer()
})




