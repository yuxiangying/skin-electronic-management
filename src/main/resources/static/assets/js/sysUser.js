$(function () {
    // hiddenBtns();
    index();
});

function index(params) {
    $.ajax({
        url: "/manage/aUser/selectAll",
        data:params,
        success: function (data) {
            var html;
            var pages;
            var result;
            var pageNum;
            var lis='';
            var total;
            if (data!=null){
                pages=data.pages;
                result=data.list;
                pageNum=data.pageNum;
                total=data.total;
            }
            if (result!=null && result.length > 0) {
                var index = 0;
                for (var i = 0; i < result.length; i++) {
                    index = (pageNum-1)*15+i+1;
                    var trs = '<tr><td style="padding-top:5px;"><input name="checkbox" class="input-c"  type="checkbox" value='+result[i].id+'></td><td>' + index + '</td><td name="userName">' + result[i].userName + '</td>';
                    trs += '<td>'+subDate(result[i].createTime)+'</td>';
                    trs += '<td>'+result[i].phone+'</td>';
                    html += trs;
                }
                $("#t-data-page-tr").show();
            } else {
                var trs = '<tr><td colspan="5" style="text-align: center;">无数据展示</td></tr>';
                html += trs;
                $("#t-data-body").html(html);
                $("#t-data-page-tr").hide();
                return;
            }
            if (pageNum!=1) {
                lis='<li pageNum="0" onclick="search(this,\'head\')"><a>首页</a></li>';
                lis+='<li previous="'+(pageNum-1)+'" onclick="search(this)"><a>上一页</a></li>';
            }
            if (pages>1){
                if (pages<=5){
                    for (var i = 1; i <pages+1; i++) {
                        lis+='<li pageNum="'+i+'" onclick="search(this)"><a>'+i+'</a></li>';
                    }
                }else if(pageNum<=3){
                    for (var i = 1; i <=5; i++) {
                        lis+='<li pageNum="'+i+'" onclick="search(this)"><a>'+i+'</a></li>';

                    }
                }else if(pages-pageNum<3){
                    lis+='<li pageNum="'+(pages-4)+'" onclick="search(this)"><a>'+(pages-4)+'</a></li>';
                    lis+='<li pageNum="'+(pages-3)+'" onclick="search(this)"><a>'+(pages-3)+'</a></li>';
                    lis+='<li pageNum="'+(pages-2)+'" onclick="search(this)"><a>'+(pages-2)+'</a></li>';
                    lis+='<li pageNum="'+(pages-1)+'" onclick="search(this)"><a>'+(pages-1)+'</a></li>';
                    lis+='<li pageNum="'+(pages)+'" onclick="search(this)"><a>'+(pages)+'</a></li>';
                }else{
                    lis+='<li pageNum="'+(pageNum-2)+'" onclick="search(this)"><a>'+(pageNum-2)+'</a></li>';
                    lis+='<li pageNum="'+(pageNum-1)+'" onclick="search(this)"><a>'+(pageNum-1)+'</a></li>';
                    lis+='<li pageNum="'+(pageNum)+'" onclick="search(this)"><a>'+(pageNum)+'</a></li>';
                    lis+='<li pageNum="'+(pageNum+1)+'" onclick="search(this)"><a>'+(pageNum+1)+'</a></li>';
                    lis+='<li pageNum="'+(pageNum+2)+'" onclick="search(this)"><a>'+(pageNum+2)+'</a></li>';
                }
                if (pageNum!=pages) {
                    lis+='<li previous="'+(pageNum+1)+'" onclick="search(this)"><a>下一页</a></li>';
                    lis+='<li pageNum="'+(pages+1)+'" onclick="search(this,\'end\')"><a>末页</a></li>';
                }
                $('#t-data-page').html(lis);
                $("#t-data-page").children("li[pageNum='"+pageNum+"']").eq(0).children("a").eq(0).css("background","#5a98de");
                var spanFlag=$("#t-data-page-tr").find("span");
                if (spanFlag !=null && spanFlag.length>0){
                    $("#t-data-page-tr").find("span").replaceWith("<span style='float: right;padding: 8px 10px;'>页数:"+pageNum+"/"+pages+"&nbsp;&nbsp;&nbsp;&nbsp;总条数"+total+"</span>");
                }else{
                    $("#t-data-page-tr").append("<span style='float: right;padding: 8px 10px;'>页数:"+pageNum+"/"+pages+"&nbsp;&nbsp;&nbsp;&nbsp;总条数"+total+"</span>");
                }
            }else if (pages==1){
                $('#t-data-page').parent().hide();
            }

            $("#t-data-body").html(html);

        }
    })
}
function subDate(date) {
    if(date !=null){
        var dateArr = date.split(" ")[0].split("-");
        return dateArr[0]+"年-"+dateArr[1]+"月-"+dateArr[2]+"日";
    }else {
        return "";
    }
}
//查询
function search(pageNum,flag) {
    debugger;
    if (pageNum!=null){
        var previous=$(pageNum).attr("previous");
        var pageNum=$(pageNum).attr("pageNum");
        pageNum=(pageNum==undefined||pageNum=='')?previous:pageNum;
        var pageNum=parseInt(pageNum);
        if(flag=="head"){
            pageNum++;
        }else if (flag=="end") {
            pageNum--;
        }
    }
    var params={};
    // params.code = $("#sea_role").val().trim();
    var condition = $("#sea_condition").val();
    if(condition=="userName"){
        params.userName = $("#sea_content").val().trim();
    }else if(condition=="phone"){
        params.phone = $("#sea_content").val().trim();
    }else if(condition=="realName"){
        params.realName = $("#sea_content").val().trim();
    }
    params.pageNum=pageNum;
    index(params);
}

//清空查询条件
function data_clear() {
    $('#sea_role').val("");
    $('#sea_condition').val("");
    $('#sea_content').val("");
}

//新增按钮
function btn_add() {
    showModal();
}
//新增保存
function save() {
    var flag = true;
    $("input[name=required]").each(function () {//把原来变色的input重置
        var preVal = $(this).prev();
        var value=preVal.val();
        if (value == null || value == "") {
            preVal.css("border", "1px solid red");
            flag = false;
        } else {
            preVal.css("border", "1px solid #ccc");
        }
    });

    if (flag==false){
        alertify.alert("请把数据填充完整!");
        return;
    }
    /*var name = $("#add_name").val().trim();
    var workshop={};
    if(name!=null && name!=""){
        workshop.name = name;
        $.ajax({
            url: "/product/workshop/save",
            data:workshop,
            success: function (result) {
                if (result == "success") {
                    alertify.alert("添加成功！", function () {
                        $("#add_name").val("");
                        index();
                    });
                }else if(result!=null && result == "exist"){
                    alertify.alert("车间已存在，请检查！");
                }else{
                    alertify.alert("添加失败！");
                }
            },
            error: function (result) {
                alertify.alert("添加失败！");
            }
        });
    }else {
        alertify.alert("内容为空，请检查！");
        return;
    }*/
}

//修改按钮
function btn_edit() {
    var ids = new Array();
    var chooseDatas = $("input[name='checkbox']:checked");
    if(null==chooseDatas||chooseDatas.length==0){
        $("#workshop_btn_save").addClass("btn-gray");
        $("#workshop_btn_save").removeAttr("onclick","btn_save()");
        // index();
        alertify.alert("请选中一条数据！");
        return;
    }
    chooseDatas.each(function () {
        ids.push($(this).val());
        var tr = $(this).parent().parent();
        tr.find("input[name='workshop_Name']").removeAttr("readonly");
        tr.find("input[name='workshop_Name']").removeClass("input-readOnly");
    });
    $("#workshop_btn_save").removeClass("btn-gray");
    $("#workshop_btn_save").attr("onclick","btn_save()");
}

//删除按钮
function btn_del() {
    var ids = new Array();
    var chooseDatas = $("input[name='checkbox']:checked");
    if(null==chooseDatas||chooseDatas.length==0){
        alertify.alert("请选中一条数据！");
        return;
    }
    chooseDatas.each(function () {
        ids.push($(this).val());
    });
    $.ajax({
        url: "/product/workshop/deleteByIds",
        data: {
            ids: JSON.stringify(ids)
        },
        success: function (result) {
            if (result=='success'){
                alertify.alert("删除成功!",function () {
                    index();
                });
            }else{
                alertify.alert("删除失败!");
            }
        },
        error: function (result) {
            alertify.alert("删除失败!");
        }
    });
}
//保存
function btn_save() {
    var workshopArr = new Array();
    var chooseDatas = $("input[name='checkbox']:checked");
    if(null==chooseDatas||chooseDatas.length==0){
        $("#workshop_btn_save").addClass("btn-gray");
        $("#workshop_btn_save").removeAttr("onclick","btn_save()");
        // index();
        alertify.alert("请选中一条数据！");
        return;
    }
    chooseDatas.each(function () {
        var tr = $(this).parent().parent();
        var workshop = new Object();
        workshop.id = parseInt($(this).val());
        workshop.code = tr.find("td[name='code']").text().trim();
        workshop.name = tr.find("input[name='workshop_Name']").val().trim();
        workshopArr.push(workshop);
    });
    $.ajax({
        url: "/product/workshop/updates",
        data: {
            workshopArr: JSON.stringify(workshopArr)
        },
        success: function (result) {
            if (result=='success'){
                $("#workshop_btn_save").addClass("btn-gray");
                $("#workshop_btn_save").removeAttr("onclick","btn_save()");
                alertify.alert("保存成功!",function () {
                    index();
                });
            }else{
                alertify.alert("保存失败!");
            }
        },
        error: function (result) {
            alertify.alert("保存失败!");
        }
    });
}

/*
 * 根据操作权限隐藏按钮
 */
function hiddenBtns(){
    var roleMenusStr = localStorage.getItem("role_menus");
    // TODO 是否应该写死
    var menu_code="product-workshop";
    var menu_id="";
    var roleMenus = roleMenusStr.split(";");
    for(var i=0;i<roleMenus.length;i++){
        var itemArr = roleMenus[i].split(",");
        if(menu_code==itemArr[1]){
            menu_id = itemArr[0];
        }
    }
    // 所有的按钮name
    var btnArr = new Array();
    for(var i=0;i<roleMenus.length;i++){
        var itemArr = roleMenus[i].split(",");
        if(menu_id==itemArr[2]){
            btnArr.push( itemArr[3]);
        }
    }
    // TODO 中文name是否改成code
    if(btnArr.indexOf("新增")<0){
        $("#workshop_btn_add").css("display","none");
    }
    if(btnArr.indexOf("修改")<0){
        $("#workshop_btn_edit").css("display","none");
    }
    if(btnArr.indexOf("删除")<0){
        $("#workshop_btn_del").css("display","none");
    }
    if(btnArr.indexOf("保存")<0){
        $("#workshop_btn_save").css("display","none");
    }
    if(btnArr.indexOf("查询")<0){
        $(".h-sea").css("display","none");
    }
}


//    用户名
function YHMonblus(){
    var username=$("#add_userName").val().trim();
    // var reN =/^\d{6,18}$/;
    var re = /^[a-zA-Z_]{6,18}$/;
    if(username==""){
        document.getElementById('YHMerror').innerText="请输入用户名";
    }
    else if(username.length < 6 ||username.length > 18){
        document.getElementById('YHMerror').innerText="格式错误,长度应为6-18个字符";
    }
    else if(!re.test(username)){

        document.getElementById('YHMerror').innerText="格式错误,只能包含英文字母和下划线";
    }
    else {
        document.getElementById('YHMerror').innerText ="";
    }
}
function YHMonfocu(){
    document.getElementById('YHMerror').innerText ="";
}
//   密码
function MMonblus(){
    var password=$("#add_password").val().trim();
    var re = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,}$/;
    // var reg=/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;

    if(password==""){
        document.getElementById('MMerror').innerText="请输入密码";
    }
    else if(password.length < 6){
        document.getElementById('MMerror').innerText="格式错误,,密码长度至少为6位";
    }

    else if(!re.test(password.value)){
        document.getElementById('MMerror').innerText="格式错误,必须包含英文字母大小写和数字";
    }
    else {
        document.getElementById('MMerror').innerText ="";
    }
}
function MMonfocu(){
    document.getElementById('MMerror').innerText ="";
}

//    确认密码
function QRMMonblus(){
    var password=$("#add_password").val().trim();
    var confirmPassword=document.getElementById("add_confirmPassword");
    if(confirmPassword==""){
        document.getElementById('QRMMerror').innerText="请输入确认密码";
    }
    else if(password != confirmPassword){
        document.getElementById('QRMMerror').innerText="两次密码输入不一致";
    }
    else {
        document.getElementById('QRMMerror').innerText ="";
    }
}
function QRMMonfocu(){
    document.getElementById('QRMMerror').innerText ="";
}
//    联系电话
function LXDHonblus(){
    var phone=$("#add_phone").val().trim();
    var re = /^1\d{10}$/;
    if(phone==""){
        document.getElementById('LXDHerror').innerText="请输入联系电话";
    }
    else if(!re.test(phone)){
        document.getElementById('LXDHerror').innerText="电话格式输入错误";
    }
    else {
        document.getElementById('LXDHerror').innerText ="";
    }
}
function LXDHonfocu(){
    document.getElementById('LXDHerror').innerText ="";
}
//    电子邮箱
function DZYXonblus(){
    var email=$("#add_emil").val().trim();
    var re= /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
    if(email==""){
        document.getElementById('DZYXerror').innerText="请输入电子邮箱";
    }
    else if(!re.test(email)){
        document.getElementById("DZYXerror").innerHTML="邮箱格式不正确";
    }
    else {
        document.getElementById('DZYXerror').innerText ="";
    }
}
function DZYXonfocu(){
    document.getElementById('DZYXerror').innerText ="";
}