loadi = -1;
/* Focus on input username */
$(document).ready(function(e){
	$("#eun").focus();

	/* Check password */
	$(this).keydown(function(e) {
    	/* Return or Enter */
        if (e.which == "13" && $("#epwd").val() !== undefined) {
        		$("#epwd").blur();
            loginE();
        }
    })
});

function comfirmLogOut() {
	layer.confirm('Bạn có chắc muốn Thoát !!!', {
		btn: ['Có','Không'],
        area: ['350px'],
        icon: 3,
    }, function(){ // Ok button
        layer.load(2);
        userLogOut();
    }, function() { // Cancel button
        
    });
}

/*exit login and redrect to login page*/
function exitLogin(data){
	// remove local store
	localStorage.removeItem("loginname");
	localStorage.removeItem("pwd");

	window.top.location='/home.shtml';
}

function loginTest() {
	var u = $("#unAccountTest").text();
	var p = $("#passAccountTest").text();
	
	layer.load(2, {
		shade: 0.5
	});

	setTimeout(userLogin(u,p), 5000);
}

/* Login function */
function loginE(){
	var u = $("#eun").val().trim();
	var p = $("#epwd").val();
	layer.load(2, {
		shade: 0.5
	});

	setTimeout(userLogin(u,p), 5000);
}
function loginRes(data){
	layer.closeAll('loading');
	if (data) {
		if(data=="-1"){
			checkuser();
		}else if(data=="-100"){
			location.reload();
		}else if(data=="-2"){
			personPwdDl();
		}else if(data=="-3"){
			personPwdZj();
		}else if(data=="-4"){
			personPwdDLZj();
		}else{
			layer.msg(data, {
                shade: 0.3,
                closeBtn: true,
                icon: 2,
                time: 2500
            });
		}
	}
}
function personPwdDl(){
	_SCROLLINGJXF = "auto";
	TopImageSign = '/images/setting.png';
	var diag = new Dialog();
	diag.Top = "50%";
	diag.Width = 600;
	diag.Height = 400;
	diag.Title = "安全提醒";
	diag.URL = "/page/PersonPwdDl.shtml";
	diag.show();
}
function personPwdZj(){
	_SCROLLINGJXF = "auto";
	TopImageSign = '/images/setting.png';
	var diag = new Dialog();
	diag.Top = "50%";
	diag.Width = 600;
	diag.Height = 400;
	diag.Title = "安全提醒";
	diag.URL = "/page/PersonPwdZj.shtml";
	diag.show();
}
function personPwdDLZj(){
	_SCROLLINGJXF = "auto";
	TopImageSign = '/images/setting.png';
	var diag = new Dialog();
	diag.Top = "50%";
	diag.Width = 660;
	diag.Height = 460;
	diag.Title = "安全提醒";
	diag.URL = "/page/PersonPwdDLZj.shtml";
	diag.show();
}
/* function phoneover(){
	$("#phone_id").css("display","block");
}
function phoneout(){
	$("#phone_id").css("display","none");
} */
/** Show loadding durring ajax call **/
function loadingSearch() {
	layer.load(2,{
		shade: 0.5
	})
}
/** Set title page **/
function loginForgetPwd(){
    layer.open({
        type: 1,
        title: 'Quên mật khẩu',
        area: ['600px'],
        content: $('#popupForgetPwd')
    });
}
$(window).on('load', function() {
	var arrTitle = [
		{
			url: '/home.shtml',
			title: 'Loto188 Mạng lưới xổ số lớn nhất Đông Nam Á'
		},
		{
			url: '/page/DWDeposit.shtml',
			title: 'Phương thức nạp tiền'
		},
		{
			url: '/page/DWWithDrawl.shtml',
			title: 'Phương thức rút tiền'
		},
		{
			url: '/page/PersonMsg.shtml',
			title: 'Hộp thư tin nhắn'
		},
		{
			url: '/page/PersonPwd.shtml',
			title: 'Thông tin cá nhân'
		},
		{
			url: '/page/PersonBank.shtml',
			title: 'Thông tin tài khoản ngân hàng'
		},
		{
			url: '/page/AgentReg.shtml',
			title: 'Tài khoản đại lý đăng ký thành viên'
		},
		{
			url: '/page/AgentUser.shtml',
			title: 'Tài khoản đại lý cấp dưới'
		},
		{
			url: '/page/AgentAutoReg.shtml',
			title: 'Tài khoản đại lý liên kết đăng ký'
		},
		{
			url: '/page/AgentBalance.shtml',
			title: 'Tài khoản số dư nhóm'
		},
		{
			url: '/page/ReportZb.shtml',
			title: 'Lịch sử biến động số dư'
		},
		{
			url: '/page/BonusReport.shtml',
			title: 'Lịch sử thưởng'
		},
		{
			url: '/page/BetRecord.shtml',
			title: 'Lịch sử cược'
		},
		{
			url: '/page/TraceRecord.shtml',
			title: 'Lịch sử nuôi'
		},
		{
			url: '/page/Index.shtml',
			title: 'Thông báo'
		},
		{
			url: '/page/DWDepositRecord.shtml',
			title: 'Lịch sử nạp tiền'
		},
		{
			url: '/page/DWWithDrawlRecord.shtml',
			title: 'Lịch sử rút tiền'
		},
		{
			url: '/page/question.shtml',
			title: 'Câu hỏi thường gặp'
		},
		{
			url: '/page/ReportWL.shtml',
			title: 'Báo cáo đại lý'
		},
		{
			url: '/page/ReportTD.shtml',
			title: 'Báo cáo nhóm'
		},
		{
			url: '/page/ReportDay.shtml',
			title: 'Báo cáo hàng ngày'
		}
	],
	getPathName = location.pathname.toLowerCase();
	for ( var i = 0, len = arrTitle.length; i < len; i++ ) {
        var toLowerTxt = arrTitle[i]['url'].toLowerCase();
        if(getPathName === toLowerTxt) {
        	document.title = arrTitle[i]['title'];
		}
	}
});
