$(function(){
    var container = $("#content");
    // 获取第一个子节点
    var element = container.find(":first");
    // li页面数量
    var slides = element.find("li");
    // 获取容器尺寸
    var width = container.width();
    var height = container.height();
    // 设置li页面总宽度
    element.css({
        width: (slides.length * width) + 'px',
        height: height + 'px'
    });
    // 设置每一个页面li的宽度
    $.each(slides, function (index) {
        var slide = slides.eq(index); //获取到每一个li元素    
        // ？
        slide.css({
            width: width + 'px',
            height: height + 'px'
        });
    });

    $('.content-wrap .boy').animate({
        //第一步走向右边距左边80%的位置
        left:$('.content-wrap li').width()*0.8
    },7000,'linear',function(){
        //背景向左移动
        $('.content-wrap').animate({
            // backgroundPositionX:-1300
            left:-$('.content-wrap li').width()
        },6000,'linear')
        //男孩向右移动
        $('.content-wrap .boy').animate({
            left:$('.content-wrap li').width()*1.5
        },6000,'linear',function(){
            //进花店买花
            $('.content-wrap .boy').delay(1000).animate({
                opacity:0,
                left:$('.content-wrap li').width()*1.5+40,
                bottom:30+'%'
            },1500,'linear',function(){
                //拿着花从花店出来
                $('.content-wrap .boy').removeClass('boy').addClass('boy1').animate({
                    opacity:1,
                    bottom:21+"%"
                },1000,'linear',function(){
                    //向右边的桥走去
                    $('.content-wrap .boy1').animate({
                        left:$('.content-wrap li').width()*2.25,
                    },7000,'linear')
                    //屏幕向左移动
                    $('.content-wrap').animate({
                        // backgroundPositionX:-1300
                        left:-$('.content-wrap li').width()*2
                    },7000,'linear',function(){
                        //上桥
                        $('.content-wrap .boy1').animate({
                            left:$('.content-wrap li').width()*2.33,
                            bottom:31+"%"
                        },1500,'linear',function(){
                            //走向女孩
                            $('.content-wrap .boy1').animate({
                                left:$('.content-wrap li').width()*2.45+5
                            },3000,'linear',function(){
                                    $('.content-wrap .boy1').removeClass('boy1').addClass('boy2') .css('animation','boyzhuan .5s forwards')
                                    $('.content-wrap .girl').removeClass('girl').addClass('girl1').css('animation','girlzhuan .5s forwards') 
                                    $('#content audio').attr('src','./music/circulation.wav')
                            })
                        })

                    })
                })

            })
        })
      
    })
    console.log($('.content-wrap li').width()*1.5);
})
