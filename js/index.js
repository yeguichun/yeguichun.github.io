
//轮播图
var mySwiper = new Swiper('.nav-lunbo', {
  // direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: true,  //自动切换
  effect: 'fade',    //切换效果
  autoplay: {         //操作之后哦是否还会自动播放，默认true不会自动播放，改为false会自动播放
    disableOnInteraction: false,
    pagination: {
      el: '.nav-lunbo'
    }
  },
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})


//回到顶部
function getScroll() {
  if (window.pageYOffset) {
    return {
      top: window.pageYOffset,
      left: window.pageXOffset
    }
  } else if (document.documentElement.scrollTop) {
    return {
      top: document.documentElement.scrollTop,
      left: document.documentElement.scrollLeft
    }
  } else {
    return {
      top: document.body.scrollTop,
      left: document.body.scrollLeft
    }
  }
}
document.onscroll = function () {
  if (getScroll().top > 500) {
    // console.log(1);
    document.getElementById('scroll-top').style.display = 'block'
  } if (getScroll().top <= 500) {
    document.getElementById('scroll-top').style.display = 'none'
  }
}
document.getElementById('scroll-top').onclick = function () {
  if (window.pageYOffset) {
    window.pageYOffset = 0
  } else if (document.documentElement.scrollTop) {
    document.documentElement.scrollTop = 0
  } else {
    document.body.scrollTop = 0
  }
}

//鼠标划到nav,弹出相应的列表
/* var site_children=document.getElementsByClassName('header-site-center').children
console.log(site_children); 
console.log($('.header-site-center>ul>li'));*/
$('.header-site-center>ul>li').on('mouseover', function () {
  $(this).children('.site-center-children').stop().slideDown()
})
$('.header-site-center>ul>li').on('mouseout', function () {
  $(this).children('.site-center-children').stop().slideUp()
})
$('.header-site-center>ul>li>a').on({
  'mouseover': function () {
    $(this).stop().css('color', '#ff6700')
  },
  'mouseout': function () {
    $(this).css('color', '#333333')
  }
}
)

//小米快购轮播图
/* var mySwiper1 = new Swiper ('.swiper2', {
 // direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
 // autoplay:true,  //自动切换
  effect : 'fade',    //切换效果
  slidesPerView: 4, //一行显示4个
  slidesPerGroup: 4, //多少列为一组
 // spaceBetween: 20,
 slidesPerView: 'auto',
 loopedSlides: 5,
  autoplay: {         //操作之后哦是否还会自动播放，默认true不会自动播放，改为false会自动播放
  disableOnInteraction: false,
  pagination: {
     el:'.swiper2'
 }
},
  // 如果需要分页器
 //   pagination: {
 //    el: '.swiper-pagination',
 //    clickable:true
 //  },
  
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.main-head-next',
    prevEl: '.main-head-prev',
  }, 
  // 如果需要滚动条
})   */
var mySwiper1 = new Swiper('.swiper2', {
  loop: true,
   slidesPerView: 'auto',
    // 定义slides的数量多少为一组
	slidesPerGroup: 4,
  disableOnInteraction: false,
  disableOnInteraction: false,
  autoplay: true,  //自动切换
  autoplay: {         //操作之后哦是否还会自动播放，默认true不会自动播放，改为false会自动播放
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.main-head-next',
    prevEl: '.main-head-prev',
  },
})
//二级菜单效果
$('.nav-list>ul>li').on({
  "mouseenter": function () {
    $(this).children('.nav-list-child').stop().show();
    $(this).addClass('colorff67')
    $(this).siblings().removeClass('colorff67')
  },
  "mouseleave": function () {
    $(this).children('.nav-list-child').stop().hide();
    $(this).removeClass('colorff67')
  }
})

//app效果
$('.header-nav-left .app').on({
  "mouseenter": function () {
    $(this).children('.appcode').show();
  },
  "mouseleave": function () {
    $(this).children('.appcode').hide();
  }
})

//微信二维码效果
$('foot-links-wx').on({
  "mouseenter": function () {
    $(this).children('foot-links-img1').show();
  }
})

//点击电视影音切换
$('.mapplices-right .main-phone-yinyin').on({
  "mouseenter": function () {
    //   $(this).parents('.main-applices-top').siblings('.main-applices-right').children('ul').children('li').children().children('.mapplice-right-li-div2').show();
    $(this).parents('.main-applices-top').siblings('.main-applices-right').find('.mapplice-right-li-div2').show();
    $(this).parents('.main-applices-top').siblings('.main-applices-right').children('ul').children('li').children().children('.mapplice-right-li-div1').hide();
  },
  "mouseleave": function () {
    $(this).parents('.main-applices-top').siblings('.main-applices-right').find('.mapplice-right-li-div2').hide();
    $(this).parents('.main-applices-top').siblings('.main-applices-right').find('.mapplice-right-li-div1').show();
  }
})


//倒计时
getTime()//进入界面就开始加载
setInterval(getTime, 1000)
function getTime() {
  //获取时间
  var time1 = new Date();
  var time2 = new Date('2021.01.14.00:00:00')
  var diffenerce = (time2 - time1) / 1000   //两个时间节点转换为秒
  //求小时
  var hour = parseInt(diffenerce / 60 / 60)
  diffenerce = diffenerce - hour * 60 * 60
  //计算分钟
  var min = parseInt(diffenerce / 60)
  //计算秒
  var seconds = parseInt(diffenerce - min * 60)
  if (hour < 10) {
    hour = "0" + hour;
  } else {
    hour = hour;
  }
  if (min < 10) {
    min = "0" + min;
  } else {
    min = min
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  } else {
    seconds = seconds
  }
  $('.main-iflashbuy-time .hour').html(hour);
  $('.main-iflashbuy-time .min').html(min)
  $('.main-iflashbuy-time .seconds').html(seconds)
}


//获取搜索框中数据，使用ajax请求

$('.header-site-right').on({
  "click": function () {
    $(this).children('.header-site-right-search').toggleClass('dis-block');
    $('#header-site-right-search').empty()
    var xhr = new XMLHttpRequest()
    //配置请求信息
    xhr.open('get', '../js/seach.json');
    //接收响应
    xhr.onload = function () {
      // console.log(xhr.responseText);
      var json = JSON.parse(xhr.responseText)
      for (var i = 0; i < json.length; i++) {
        var arr = json[i]
        for (var key in json[i]) {
          console.log(json[i][key]);
         $('#header-site-right-search').append(` <ul class="clearfix">
          <li class="right-search-li">${json[i][key]}</li>   
      </ul>`)
        }
      }

    }
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    // xhr.send(`un=${unInp.value}&pw=${pwInp.value}`)

    xhr.send()
    $('#header-site-right-search').append()
  },

})


//点击立即注册跳转页面
/* $('.login-phone-now').click(function(){
  location.href="../page/regist.html"
}) */

//点击购物车进入购物车页面

  















