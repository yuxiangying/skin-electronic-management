/**
 * 模拟弹出模态窗口DIV
 * @param innerHtml 模态窗口HTML内容
 */
function showModal() {
    // 取得显示模拟模态窗口用DIV
    var dialog = $('#modalDiv');
    // 设置内容
    // dialog.html(innerHtml);

    // 模态窗口DIV窗口居中
    dialog.css({
        'top':   '30px',
        'left': (getWindowInnerWidth() - dialog.width()) / 3 + 'px'
    });

    // 窗口DIV圆角
    dialog.find('.modal-container').css('border-radius', '6px');

    // 模态窗口关闭按钮事件
    dialog.find('.btn-close').click(function () {
        closeModal();
    });

    // 显示遮罩层
    showOverlay();

    // 显示遮罩层
    dialog.show();
}

/**
 * 显示遮罩层
 */
function showOverlay() {
    // 遮罩层宽高分别为页面内容的宽高
    $('.overlay').css({'height': $(document).height(), 'width': $(document).width()});
    $('.overlay').show();
}
/**
 * 模拟关闭模态窗口DIV
 */
function closeModal() {
    $('.overlay').hide();
    $('#modalDiv').hide();
}

function getWindowInnerHeight() {
    var winHeight = window.innerHeight
        || (document.documentElement && document.documentElement.clientHeight)
        || (document.body && document.body.clientHeight);
    return winHeight;

}

// 浏览器兼容 取得浏览器可视区宽度
function getWindowInnerWidth() {
    var winWidth = window.innerWidth
        || (document.documentElement && document.documentElement.clientWidth)
        || (document.body && document.body.clientWidth);
    return winWidth;

}

/**
 * 模拟关闭模态窗口DIV
 */
function contactsModal() {
    $('.overlay').hide();
    $('#contactsModal').hide();
}
/**
 * 工单接收人
 * 模拟关闭模态窗口DIV
 */
function closeModalReceivingUser() {
    $('.overlay').hide();
    $('#receivingUserModel').hide();
}
/**
 * 经办人
 * 模拟关闭模态窗口DIV
 */
function closeModalpersoncharge() {
    $('.overlay').hide();
    $('#personChargeModel').hide();
}

