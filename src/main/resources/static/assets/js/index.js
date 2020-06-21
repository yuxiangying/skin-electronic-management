/*
   * 显示和隐藏左侧菜单树
   */
function displaynavbar(src){
    if($(src).attr("value")=="display-btn"){
        $("#sidebar").css("left","-180px");
        $("#display-hidden").css("left","0px");
        $("#main-content").css("margin-left","0px");
        $("#main-content").find(".tab-content").css("left","0px");
        $("#pngfix").css("background-position","0 -61px");
        $(src).attr("value","hidden-btn");
        $(".tab-content").css("width","100%");
    }else{
        $("#sidebar").css("left","0px");
        $("#display-hidden").css("left","180px");
        $("#main-content").css("margin-left","180px");
        $("#main-content").find(".tab-content").css("left","180px");
        $("#pngfix").css("background-position","0 0");
        $(src).attr("value","display-btn");
        $(".tab-content").css("width","90%");
    }
}
