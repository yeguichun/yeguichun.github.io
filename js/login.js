//注册
/* $('.regist-box1-country .regist-phone-btn').click(function () {
  var resname = new RegExp('\\w{4,}', 'i')
  var respwd = new RegExp('\\w{5,}', 'i')
  var reskey=new RegExp('\^a-\w{4,}','i')
  // 取出json字符串 
   var arr = []; var akey=[]
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i); //获取本地存储的Key
    if(reskey.test(key)){
     akey.push(key);}
     for(var n=0;n<akey.length;n++){
       key=akey[n]
     }
    var jsonstr = localStorage.getItem(key);
   
    // 还原json对象 
    var json = JSON.parse(jsonstr);
   console.log(json);
    // 取出json里面的username 
    var username = json.phone;
    arr.push(username)
  } 
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] == $('.regist-phone-number').val()) {
      alert('此账号已被注册')
      return;
     }}
      if (resname.test($('.regist-phone-number').val()) && respwd.test($('.regist-phone-password').val())) {
        $.ajax({
          url: "../js/regist.json",
          data: {
            country: $('#country').val(),
            phone: $('.regist-phone-number').val(),
            password: $('.regist-phone-password').val()
          },
          dataType: 'json',
          success: function (res) {
            if (res.code === 1) {
              alert('注册成功');
              //变成字符串存入
              let value = JSON.stringify({phone: $('.regist-phone-number').val(), password: $('.regist-phone-password').val()})
         
              localStorage.setItem('a-' + $('.regist-phone-number').val(), value)
               location.href="../page/Login.html"
            }
          }
        })
      } else {
         alert("账号或者密码不符合规范")
      }
}) */

function getXinxi() {
  var list = localStorage.getItem('xinxi') || "[]"; //字符串
  return JSON.parse(list);
}
function setXinxi(arr) {

  localStorage.setItem('xinxi', JSON.stringify(arr))
}
// 点击注册
$('.regist-box1-country .regist-phone-btn').click(function () {
  var resname = new RegExp('\\w{4,}', 'i')
  var respwd = new RegExp('\\w{5,}', 'i')
  var reskey = new RegExp('\^a-\w{4,}', 'i')
  // 取出json字符串 
  /*  var arr = []; var akey = []
   for (var i = 0; i < localStorage.length; i++) {
     var key = localStorage.key(i); //获取本地存储的Key
     if (reskey.test(key)) {
       akey.push(key);
     }
     for (var n = 0; n < akey.length; n++) {
       key = akey[n]
     }
     var jsonstr = localStorage.getItem(key);
 
     // 还原json对象 
     var json = JSON.parse(jsonstr);
     console.log(json);
     // 取出json里面的username 
     var username = json.phone;
     arr.push(username)
   } 
   for (var j = 0; j < arr.length; j++) {
     if (arr[j] == $('.regist-phone-number').val()) {
       alert('此账号已被注册')
       return;
     }
   }*/
  if (resname.test($('.regist-phone-number').val()) && respwd.test($('.regist-phone-password').val())) {
    var newProduct = {
      phone: $('.regist-phone-number').val(),
      password: $('.regist-phone-password').val()
    };
    // 先获取原来的数组
    var productList = getXinxi();
    
    if (productList.length == 0) {
      // 把新信息添加进去
      productList.push(newProduct);//
      // 存回本地存储
      setXinxi(productList)
      alert('注册成功');
      location.href = "../page/Login.html"
     
    } else {
     
    //  $.each(productList, function (index, product) {
      for(var i=0;i<productList.length;i++){
        flag=false
        if (productList[i].phone == $('.regist-phone-number').val()) {
          alert('此账号已被注册')
          return;
        } else {
          flag=true;
        }
      }
      if(flag){
        // 把新信息添加进去
        productList.push(newProduct);//
        // 存回本地存储
        setXinxi(productList)
        alert('注册成功');
        location.href = "../page/Login.html"
    }
    }
    
  } else {
    alert("账号或者密码不符合规范")
  }
})



//登录 
$('.login-layout-main #login-button').click(function () {
  var logname = $('#username').val()
  var logpwd = $('#userpwd').val()
  var arr_name = [];
  var arr_pwd = []
  var productList = getXinxi();
//  console.log(productList);
  for (var i = 0; i < productList.length; i++) {
//    console.log(productList[i]);
    var login_name = productList[i].phone;
    arr_name.push(login_name)
    var login_pwd = productList[i].password;
    arr_pwd.push(login_pwd)
  }
  for (var j = 0; j < arr_name.length; j++) {
    console.log(1);
     flag = false
    //  console.log(arr_name);
    if (logname == arr_name[j]) {
      flag = true;
      if (logpwd == arr_pwd[j]) {
        alert('登录成功')
        location.href = "../index.html";
        sessionStorage.setItem("logname", logname)
return

      } else {
        alert('密码错误')
      }
     
    }
   
  }
  if (!flag) {
    alert('账号不存在 ')
  }
})
/* $('.login-layout-main #login-button').click(function () {

  var logname = $('#username').val()
  var logpwd = $('#userpwd').val()
  var arr_name = [];
  var arr_pwd = []
  var akey = []
  var regname = /^phone-\w{4,}$/
  var regpwd = /^password-\w{4,}$/
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i); //获取本地存储的Key
    akey.push(key);
    for (var n = 0; n < akey.length; n++) {
      key = akey[n]
    }
    var jsonstr = localStorage.getItem(key);
    //还原json对象
    var json = JSON.parse(jsonstr)
    var login_name = json.phone;
    arr_name.push(login_name)
    var login_pwd = json.password
    arr_pwd.push(login_pwd)
  }

  for (var j = 0; j < arr_name.length; j++) {
    console.log(1);
    var flag = false
    if (logname == arr_name[j]) {
      flag = true;
      if (logpwd == arr_pwd[j]) {
        alert('登录成功')
        location.href = "../page/index.html";
        sessionStorage.setItem("logname", logname)
       

      } else {
        alert('密码错误')
      }
      if (!flag) {
        alert('账号不存在 ')
      }
    }
  }

}) */


//登录成功后的渲染
setLogname()
function setLogname() {
  var logname = $('#username').val()
  var hello = sessionStorage.getItem("logname");
//  console.log(hello);
  if (hello != null) {
    $('.header-nav-right .header-right-login-btn').html("你好," + hello).css('color', '#ffffff')
  }

}




