//鼠标划到nav,弹出相应的列表
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

//点击切换不同的机型
$('.detail-chiose-product .chiose-product-li2').click(function () {
  $('.detail-left .detail-img-note94').css('display', 'none')
  $('.detail-left .detail-img-note95').css('display', 'block')
  $('.detail-left .detail--img-note9p5').css('display', 'none')
})
$('.detail-chiose-product .chiose-product-li3').click(function () {
  $('.detail-left .detail-img-note94').css('display', 'none')
  $('.detail-left .detail-img-note95').css('display', 'none')
  $('.detail-left .detail--img-note9p5').css('display', 'block')
})
$('.detail-chiose-product .chiose-product-li1').click(function () {
  $('.detail-left .detail-img-note94').css('display', 'block')
  $('.detail-left .detail-img-note95').css('display', 'none')
  $('.detail-left .detail--img-note9p5').css('display', 'none')
})


//点击选择商品属性，进行动态
$('.detail-chiose-div ul li').click(function () {
  $(this).css({
    borderColor: '#ff6700',
    color: ' #ff6700',
  });
  $(this).siblings().css({
    borderColor: '#e0e0e0',
    color: ' #333',
  })
  /*  $(this).addClass('li-color');
   $(this).siblings(). */
})

//公共样式
function getShangping() {
  var list = localStorage.getItem('shangping') || "[]"; //字符串
  return JSON.parse(list);
}
function setShangping(arr) {

  localStorage.setItem('shangping', JSON.stringify(arr))
}

//渲染页面
setLogname()
function setLogname() {
  var logname = $('#username').val()
  var hello = sessionStorage.getItem("logname");
  // console.log(hello);
  if (hello != null) {
    $('.header-nav-right .header-right-login-btn').html("你好," + hello).css('color', '#ffffff')
  }

}
//添加购物车
//判断选择商品的属性
$('.detail-chiose-product ul li').click(function () {
  product_val = ''
  product_val = $(this).text()
  var index = $(this).attr('index');
  // console.log(index);
  product_img = ''
  product_img = $('.detail-left-box').find('img').eq(index - 1).attr('src')

  // console.log(product_img);
  //localStorage.setItem("product_val",product_val)
  //console.log(product_val);
})
$('.detail-chiose-banben ul li').click(function () {
  banben_val = ''
  banben_val = $(this).text()
  //localStorage.setItem("banben_val",banben_val)
  //console.log(banben_val);
})
$('.detail-chiose-color ul li').click(function () {
  color_val = ''
  color_val = $(this).text()
  //localStorage.setItem("color_val",color_val)
  //console.log(color_val);
})
//点击添加购物车
$('#detail-jiaru .detail-jiaru-box .detail-jiaru-a1').click(function () {
  var arr_product = [];
  var arr_banben = [];
  var arr_color = [];
  var arr_img = [];
  $('.detail-chiose-div ul li').css({
    borderColor: '#e0e0e0',
    color: ' #333',
  })
  var logname = sessionStorage.getItem("logname")
  if (!logname) {
    alert('请先登录再添加购物车')
  } else {
    var newshangping = {
      product_val: product_val,
      banben_val: banben_val,
      color_val: color_val,
      product_img: product_img,
      product_num: 1
    };
    // 先获取原来的数组
    var productList = getShangping();
    var flag = null;
    if(productList.length==0){
      productList.push(newshangping);//
      // 存回本地存储
      setShangping(productList)
      alert('购物车添加成功')
    }else{    
    $.each(productList, function (index, product) {
      // flag=true
      
      flag = false
      if (newshangping.product_val == product.product_val &&
        newshangping.banben_val == product.banben_val &&
        newshangping.color_val == product.color_val &&
        newshangping.product_img == product.product_img
      ) {
        // console.log(productList[index]);
        productList[index].product_num = product.product_num + 1
        // console.log(productList[index]);
        productList.splice(index, productList[index])
        // console.log(productList);
        setShangping(productList)
        //    console.log(product.product_num+1);
        //   product.product_num=product.product_num+1
        //  localStorage.setItem() 
        // flag=true;
        alert('购物车添加成功')
        return;

      } else {
        flag = true
      }   

    })
    if (flag) {
      // 把新信息添加进去
      productList.push(newshangping);//
      // 存回本地存储
      setShangping(productList)
      alert('购物车添加成功')
      // console.log(1);
    }
  }

  }
  location.href=''
})

/* var product_name=productList[i].product_val;
var banben_val=productList[i].banben_val;
var color_val=productList[i].color_val;
var product_img=productList[i].product_img; */


