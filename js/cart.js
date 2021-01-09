//公共方法
function getShangping() {
    var list = localStorage.getItem('shangping') || "[]"; //字符串
    return JSON.parse(list);
}
function setShangping(arr) {

    localStorage.setItem('shangping', JSON.stringify(arr))
}
showList()
function showList() {
    var productList = getShangping();
    if (productList.length < 1) {
        $('tbody').hide();
        $('.cart-none').show();
        return;
    }
    $('tbody').empty();
    $('table').show();
    $('.cart-none').hide();
    $.each(productList, function (index, product) {
        // console.log(product)
        $('tbody').append(`<tr>
        <td>${product.product_val}</td>
        <td>${product.banben_val}</td>
        <td>
            <img src="${product.product_img}" alt="">
        </td>
        <td>${product.color_val}</td>
        <td>
            <span class="add">+</span>
            <span class="num">${product.product_num}</span>
            <span class="cut">-</span>
        </td>
        <td>
            <button class="del">删除</button>
        </td>
    </tr>`)

    })
}
//进入购物车页面
$('.gouwuche').click(function () {
    var logname = sessionStorage.getItem("logname")
    if (!logname) {
        alert('请先登录再添加购物车')
    } else {
        location.href = '../page/cart.html'
    }

})

//加数量
$('.add').click(function () {
    // $(this).siblings('.num').html(parseInt($(this).siblings('.num').text()) + 1)
    var productList = getShangping();
   var i= $(this).parent().parent('tr').index()
    productList[i].product_num=productList[i].product_num+1
    productList.splice(i,1,productList[i])
    setShangping(productList) 
    location.href="" 
})
//减法
$('.cut').click(function () {

    // $(this).siblings('.num').html(parseInt($(this).siblings('.num').text()) - 1)
    var productList = getShangping();
    var i= $(this).parent().parent('tr').index()
     productList[i].product_num=productList[i].product_num-1
     if(productList[i].product_num<=0){
        productList[i].product_num=0
        productList.splice(i,1)
        setShangping(productList) 
     }else{
        productList.splice(i,1,productList[i])
        setShangping(productList) 
     }
    
     location.href="" 
})

//删除


    $('.del').click(function () {
    if (confirm("确定要删除这条数据？")) {
      console.log( $(this).parent().parent('tr').index()); 
      var productList = getShangping();   
    // localStorage.removeItem(productList[$(this).parent().parent('tr').index()]);
   var i=$(this).parent().parent('tr').index()
  productList.splice(i,1)
 
  setShangping(productList) 
  location.href="" 
//   console.log(productList);
 }
})



//清空
$('.clear').click(function () {
    localStorage.removeItem('shangping')
    location.href="" 
});

//更新购物车
updateCar()
function updateCar(){
    var productList = getShangping();  
    var sum=0
    $.each(productList,function(index,product){
        sum+=product.product_num
        $('.gouwuche>a').html('购物车('+sum+')')

    })
}