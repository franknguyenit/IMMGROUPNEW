var form = $("#stepForm");
var current_step, next_step, previous_step;
var left, opacity, scale;
var count = 0;
var animating;
$(".next").click(function() { 
    if (form.valid() === true) {
        count++;
        current_step = $(this).parent();
        next_step = $(this).parent().next();
        next_step_class = $(this).parent().hasClass("step-end");
        if (next_step_class !== true) {
            $("#progressbar li").eq($("fieldset").index(next_step)).addClass("active");
            next_step.show();
            current_step.hide();
        }        
        var posTop = $('.scrollTo').position().top;
        $('html, body').animate({
            scrollTop: posTop
        }, 300);
        if ($(this).val() === "Hoàn tất đăng ký") {
            var areastr = $(this).attr('data-area');
			if(areastr == 'my'){
				submitinfoMY();
			}
			else if (areastr == 'bdn') {
				submitinfoBDN();
			}
			else if(areastr == 'uc'){
				submitinfoUC();
			}
			else if(areastr == 'canada'){
				submitinfoCANADA();
			}
			else if(areastr == 'grenada'){
				submitinfoGRENADA();
			}
			else if(areastr == 'ireland'){
				submitinfoIRELAND();
			}
			else if(areastr == 'bdsuc'){
				submitinfoBDSUC();
			}
			else if(areastr == 'capital720'){
				submitinfocapital720();
			}
			else if(areastr == 'uc3172020'){
				submitinfouc3172020();
			}
			else if(areastr == 'canada13082020'){
				submitinfocanada13082020();
			}
			else{}
			
        }
        return false;
    }
});
$(".previous").click(function() {
    var posTop = $('.scrollTo').position().top;
    $('html, body').animate({
        scrollTop: posTop
    }, 300);
    current_step = $(this).parent();
    previous_step = $(this).parent().prev();
    $("#progressbar li").eq($("fieldset").index(current_step)).removeClass("active");   

    previous_step.show();
    current_step.hide();
   
});

$(".btnrating").on('click', (function (e) {
    var previous_value = $("#selected_rating").val();
    var selected_value = $(this).attr("data-attr");
    $("#selected_rating").val(selected_value);
    $(".selected-rating").empty();
    $(".selected-rating").html(selected_value);
    for (i = 1; i <= selected_value; ++i) {
        $("#rating-star-" + i).toggleClass('text-warning');
        $("#rating-star-" + i).toggleClass('btn-default');
    }
    for (ix = 1; ix <= previous_value; ++ix) {
        $("#rating-star-" + ix).toggleClass('text-warning');
        $("#rating-star-" + ix).toggleClass('btn-default');
    }
}));

function ShowSubDropdown(e, c) {
    e.click(function() {
        var rad = $(this).val();
        console.log(rad);
        rad === "yes" ? c.addClass('d-block') : c.removeClass('d-block');
    });
}
ShowSubDropdown($('.shareCompany'), $('#show1'));
ShowSubDropdown($('.have-related'), $('#show2'));
ShowSubDropdown($('.applied-visa'), $('#show3'));
ShowSubDropdown($('.khanangtaichinh'), $('#show4'));
ShowSubDropdown($('.show5'), $('#show5'));
ShowSubDropdown($('.where-bank'), $('#show4'));
ShowSubDropdown($('.show6'), $('#show6'));




function submitinfoBDN(){
    var name = $('#txtname').val();
    var email = $('#txtemail').val();
    var phone = $('#txtphone').val();
    var gender =  $( "select#gender option:checked" ).val();
    var old = $('#txtold').val();
    var tungsangbdn = $("input[name='tungsangbdn']:checked").val();
    var time =  $('#txttime').val();
    var cansangbdn = $("input[name='cansangbdn']:checked").val();
    var oldusermain = $('#oldusermain').val();
    var olnumberuserd = $('#numberuser').val();
    var olduserfollow = $('#olduserfollow').val();
    var purpose = $("input[name='purpose']:checked").val();
    var other = $('#txtother').val();
    var getlink =  window.location.href;
    if(purpose == 'yes'){
        purpose = 'Khác';
    }
	var areamy =  $( "select#areamy option:checked" ).val();
	var nhucaukhac = $('#txtnhucaukhac').val();
    var areaother = $('#txtkhuvuckhac').val();


    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe_H5ZwJn--dVJWbc2Ex8o4djv5Cir5jA3hMR7vYZrYIpU3dQ/formResponse",
        data: { "entry.1853749523": name, "entry.1114383929" : email, "entry.1314604019" : phone, "entry.582514946" : gender, "entry.1745637457" : old,  "entry.379627096" : areamy, "entry.699954935" : areaother, "entry.2009730274" : nhucaukhac,"entry.242017739" : tungsangbdn, "entry.1496999006" : time,"entry.1148005387" : cansangbdn, "entry.280186865" : oldusermain, "entry.779102523" : olnumberuserd, "entry.575172515" : olduserfollow, "entry.1595489870" : purpose, "entry.65997142": other, "entry.1427027616" : getlink},
        type: "POST",
        dataType: "xml",
		crossDomain : true,
        success: function(data){
            if(data.success == true)
            {
                $('#thankyou').modal('show');
            }
        },
        error: function(){
			$('#thankyou').modal('show'); 
        }
    });
}


function submitinfoMY(){
    var name = $('#txtname').val();
    var email = $('#txtemail').val();
    var phone = $('#txtphone').val();
    var gender =  $( "select#gender option:checked" ).val();
	var areamy =  $( "select#areamy option:checked" ).val();
	var nhucaukhac = $('#txtnhucaukhac').val();
    var tungsangmy = $("input[name='tungsangmy']:checked").val();
	var nguoithanmy = $("input[name='nguoithanmy']:checked").val();
	var datungnoivisa = $("input[name='datungnoivisa']:checked").val();
	var invest =  $('#txtinvest').val();
    var oldchild = $('#txtoldchild').val();
	 var areaother = $('#txtkhuvuckhac').val();
    var getlink =  window.location.href;
    
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfSwqetUM4f6h88hnXWIIvwVwmUmQrrqv43zu63I6tZj2YhRg/formResponse",
        data: { "entry.1936340117": name, "entry.591731569" : email, "entry.1709612718" : phone, "entry.858484147" : gender, "entry.1286259103" : areamy, "entry.913523926" : areaother, "entry.1542099653" : nhucaukhac, "entry.363019952" : tungsangmy, "entry.563380960" : nguoithanmy, "entry.631090580" : datungnoivisa, "entry.1001511288" : invest, "entry.354623051" : oldchild, "entry.504585192" : getlink},
        type: "POST",
        dataType: "xml",
		crossDomain : true,
        success: function(data){
            if(data.success == true)
            {
               $('#thankyou').modal('show');
            }
        },
        error: function(){
           $('#thankyou').modal('show');
        }
    });
}
//submit form event uc
function submitinfoUC(){
    var name = $('#txtname').val();
    var email = $('#txtemail').val();
    var phone = $('#txtphone').val();
    var gender =  $( "select#gender option:checked" ).val();
	var areamy =  $( "select#areamy option:checked" ).val();
	var nhucaukhac = $('#txtnhucaukhac').val();
	var areaother = $('#txtkhuvuckhac').val();
	var tonggiatri = $('#txttonggiatri').val();
    var sohuudoanhnghiep = $("input[name='sohuudoanhnghiep']:checked").val();
	var phamtramsohuu =  $('#txtphamtramsohuu').val();
	var doanhso =  $('#txtdoanhso').val();
	var yck =  $('#txtyck').val();
    var getlink =  window.location.href;
    
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSemOU0HQjYGMtgLc5KOeymuPGXN6wajsNL8FeCc6YhEPfDr_Q/formResponse",
        data: { "entry.1936340117": name, "entry.591731569" : email, "entry.1709612718" : phone, "entry.858484147" : gender, "entry.1286259103" : areamy, "entry.913523926" : areaother, "entry.1542099653" : nhucaukhac, "entry.363019952" : tonggiatri, "entry.563380960" : sohuudoanhnghiep, "entry.631090580" : phamtramsohuu, "entry.1001511288" : doanhso, "entry.354623051" : yck, "entry.504585192" : getlink},
        type: "POST",
        dataType: "xml",
		crossDomain : true,
        success: function(data){
            if(data.success == true)
            {
                $('#thankyou').modal('show');
            }
        },
        error: function(){
           $('#thankyou').modal('show');  
        }
    });
}

//submit form event canada
function submitinfoCANADA(){
    var name = $('#txtname').val();
    var email = $('#txtemail').val();
    var phone = $('#txtphone').val();
    var gender =  $( "select#gender option:checked" ).val();
	var areamy =  $( "select#areamy option:checked" ).val();
	var nhucaukhac = $('#txtnhucaukhac').val();
	var areaother = $('#txtkhuvuckhac').val();
	var tonggiatri = $('#txttonggiatri').val();
    var sohuudoanhnghiep = $("input[name='sohuudoanhnghiep']:checked").val();
	var phamtramsohuu =  $('#txtphamtramsohuu').val();
	var doanhso =  $('#txtdoanhso').val();
	var yck =  $('#txtyck').val();
    var getlink =  window.location.href;
    
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe32AWTzjcTDtW2W2eZSt47TxewvHfNtuQDVt-Z0hJHdzRCCQ/formResponse",
        data: { "entry.1936340117": name, "entry.591731569" : email, "entry.1709612718" : phone, "entry.858484147" : gender, "entry.1286259103" : areamy, "entry.913523926" : areaother, "entry.1542099653" : nhucaukhac, "entry.363019952" : tonggiatri, "entry.563380960" : sohuudoanhnghiep, "entry.631090580" : phamtramsohuu, "entry.1001511288" : doanhso, "entry.354623051" : yck, "entry.504585192" : getlink},
        type: "POST",
        dataType: "xml",
		crossDomain : true,
        success: function(data){
            if(data.success == true)
            {
                $('#thankyou').modal('show');
            }
        },
        error: function(){
           $('#thankyou').modal('show');  
        }
    });
}

//submit form event GRENADA
function submitinfoGRENADA(){
    var name = $('#txtname').val();
    var email = $('#txtemail').val();
    var phone = $('#txtphone').val();
    var gender =  $( "select#gender option:checked" ).val();
	var areamy =  $( "select#areamy option:checked" ).val();
	var nhucaukhac = $('#txtnhucaukhac').val();
	var areaother = $('#txtkhuvuckhac').val();
    var sansangdautu = $("input[name='sansangdautu']:checked").val();
	var mucdichdautu = $("input[name='mucdichdautu']:checked").val();
	var conduonglayvisa = $("input[name='conduonglayvisa']:checked").val();
	var thanhviendikem =  $('#thanhviendikem').val();
	var namsinhconlon =  $('#namsinhconlon').val();
    var getlink =  window.location.href;
    
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScY4aii5e7sU7ijEqI9vgN6A6L2SHTImOhnRgFN9wK4yLZyrw/formResponse",
        data: { "entry.1936340117": name, "entry.591731569" : email, "entry.1709612718" : phone, "entry.858484147" : gender, "entry.1286259103" : areamy, "entry.913523926" : areaother, "entry.1542099653" : nhucaukhac, "entry.363019952" : sansangdautu, "entry.563380960" : mucdichdautu, "entry.631090580" : conduonglayvisa, "entry.1001511288" : thanhviendikem, "entry.354623051" : namsinhconlon, "entry.504585192" : getlink},
        type: "POST",
        dataType: "xml",
		crossDomain : true,
        success: function(data){
            if(data.success == true)
            {
                $('#thankyou').modal('show');
            }
        },
        error: function(){
           $('#thankyou').modal('show');  
        }
    });
}

//submit form event IRELAND
function submitinfoIRELAND(){
    var name = $('#txtname').val();
    var email = $('#txtemail').val();
    var phone = $('#txtphone').val();
    var gender =  $( "select#gender option:checked" ).val();
	var areamy =  $( "select#areamy option:checked" ).val();
	var nhucaukhac = $('#txtnhucaukhac').val();
	var areaother = $('#txtkhuvuckhac').val();
	
    var sansangdautu = $("input[name='sansangdautu']:checked").val();
	var tienmat = $("input[name='tienmat']:checked").val();
	var mucdichdautu = $("input[name='mucdichdautu']:checked").val();
	var phuongandautu = $("input[name='phuongandautu']:checked").val();
	
	var namsinhconlon =  $('#namsinhconlon').val();
    var getlink =  window.location.href;
    
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSchlPubfwS1a4YNx8QLsgv6SoMRv5CrUti_FFVADkOhgy2XyQ/formResponse",
        data: { "entry.1936340117": name, "entry.591731569" : email, "entry.1709612718" : phone, "entry.858484147" : gender, "entry.1286259103" : areamy, "entry.913523926" : areaother, "entry.1542099653" : nhucaukhac, "entry.363019952" : sansangdautu,  "entry.631090580" : tienmat, "entry.563380960" : mucdichdautu, "entry.1001511288" : phuongandautu, "entry.354623051" : namsinhconlon, "entry.504585192" : getlink},
        type: "POST",
        dataType: "xml",
		crossDomain : true,
        success: function(data){
            if(data.success == true)
            {
                $('#thankyou').modal('show');
            }
        },
        error: function(){
           $('#thankyou').modal('show');  
        }
    });
}

//submit form event BDSUC
function submitinfoBDSUC(){
    var name = $('#txtname').val();
    var email = $('#txtemail').val();
    var phone = $('#txtphone').val();
    var gender =  $( "select#gender option:checked" ).val();
	var areamy =  $( "select#areamy option:checked" ).val();
	var nhucaukhac = $('#txtnhucaukhac').val();
	var areaother = $('#txtkhuvuckhac').val();
	
    var pricehome =  $('#pricehome').val();
	var purpose = $("input[name='purpose']:checked").val();
	var catehome = $("input[name='catehome']:checked").val();
	var howmanyroom =  $('#howmanyroom').val();
	var filedoc = $("input[name='filedoc']:checked").val();
	var namsinhconlon =  $('#namsinhconlon').val();
    var getlink =  window.location.href;
    
    $.ajax({
        url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfawUAQEIwzkjP5gzdgXYlNR2TPr4p-XQtc0B1ZHDwD69QVQw/formResponse",
        data: { "entry.1936340117": name, "entry.591731569" : email, "entry.1709612718" : phone, "entry.858484147" : gender, "entry.1286259103" : areamy, "entry.913523926" : areaother, "entry.1542099653" : nhucaukhac, "entry.363019952" : pricehome,  "entry.631090580" : purpose, "entry.563380960" : catehome, "entry.971557332" : howmanyroom, "entry.210073991" : filedoc,"entry.354623051" : namsinhconlon, "entry.504585192" : getlink},
        type: "POST",
        dataType: "xml",
		crossDomain : true,
        success: function(data){
            if(data.success == true)
            {
                $('#thankyou').modal('show');
            }
        },
        error: function(){
           $('#thankyou').modal('show');  
        }
    });
}

//submit form event capital720
function submitinfocapital720(){
    var name = $('#txtname').val();
    var email = $('#txtemail').val();
    var phone = $('#txtphone').val();
    var gender =  $( "select#gender option:checked" ).val();
	var businessname = $('#txtbusinessname').val();
	var career = $('#txtcareer').val();
	var businessaddress = $('#txtbusinessaddress').val();
    var personnelScale =  $('#personnelScale').val();
	var capital =  $('#capital').val();
	var revenue =  $('#revenue').val();
	var cooperate = $("input[name='cooperate']:checked").val();
	var purpose = $("input[name='purpose']:checked").val();
	var nhucaukhac = $('#txtnhucaukhac').val();
    var getlink =  window.location.href;
    
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe-rXRGKfbN8An4prJ7CjafIEFaLICf8N8xEkTzQENFwxDj2A/formResponse",
        data: { "entry.1936340117": name, "entry.591731569" : email, "entry.1709612718" : phone, "entry.858484147" : gender, "entry.1286259103" : businessname, "entry.913523926" : career, "entry.1326626512" : businessaddress, "entry.363019952" : personnelScale, "entry.631090580" : capital, "entry.563380960" : revenue, "entry.971557332" :  cooperate, "entry.210073991" : purpose, "entry.1542099653" :  nhucaukhac, "entry.504585192" : getlink},
        type: "POST",
        dataType: "xml",
		crossDomain : true,
        success: function(data){
            if(data.success == true)
            {
                $('#thankyou').modal('show');
            }
        },
        error: function(){
           $('#thankyou').modal('show');  
        }
    });
}


//submit form event uc 3l720
function submitinfouc3172020(){
    var name = $('#txtname').val();
    var email = $('#txtemail').val();
    var phone = $('#txtphone').val();
    var gender =  $( "select#gender option:checked" ).val();
	var areamy =  $( "select#areamy option:checked" ).val();
	var nhucaukhac = $('#txtnhucaukhac').val();
	var areaother = $('#txtkhuvuckhac').val();
	var mucdich = $("input[name='mucdich']:checked").val();
	var sotien = $('#txttiensandautu').val();
	
	var sohuudoanhnghiep = $("input[name='sohuudoanhnghiep']:checked").val();
	var tongtaisan =  $('#tongtaisan').val();
	var phamtramcopham =  $('#phamtramcopham').val();
	var doanhsocongty =  $('#doanhsocongty').val();
    var getlink =  window.location.href;
    
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf_rhBLgy6vxRiPLQDdwImuJ8fQIThKz4Ec3PeSFngaH-34vw/formResponse",
        data: { "entry.1936340117": name, "entry.591731569" : email, "entry.1709612718" : phone, "entry.858484147" : gender, "entry.1286259103" : areamy, "entry.913523926" : areaother, "entry.769068328" : mucdich, "entry.2023190542" : sotien, "entry.363019952" : sohuudoanhnghiep, "entry.631090580" : tongtaisan, "entry.563380960" :  phamtramcopham, "entry.210073991" : doanhsocongty, "entry.1542099653" :  nhucaukhac, "entry.504585192" : getlink},
        type: "POST",
        dataType: "xml",
		crossDomain : true,
        success: function(data){
            if(data.success == true)
            {
                $('#thankyou').modal('show');
            }
        },
        error: function(){
           $('#thankyou').modal('show');  
        }
    });
}

//submit form event canada 13082020
function submitinfocanada13082020(){
    var name = $('#txtname').val();
    var email = $('#txtemail').val();
    var phone = $('#txtphone').val();
    var gender =  $( "select#gender option:checked" ).val();
	var areamy =  $( "select#areamy option:checked" ).val();
	var areaother = $('#txtkhuvuckhac').val();
	
	var tongtaisan =  $('#tongtaisan').val();
	var sohuudoanhnghiep = $("input[name='sohuudoanhnghiep']:checked").val();
	var phamtramcopham =  $('#phamtramcopham').val();
	var doanhsocongty =  $('#doanhsocongty').val();
	var tuoicon = $('#tuoicon').val();
	var nhucaukhac = $('#txtnhucaukhac').val();
    var getlink =  window.location.href;
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSctujOi-XaibR9XXyQxZCz6vC14d2I-7Z8Cn-tGzBCZ7h-20g/formResponse",
        data: { "entry.1936340117": name, "entry.591731569" : email, "entry.1709612718" : phone, "entry.858484147" : gender, "entry.1286259103" : areamy, "entry.913523926" : areaother, "entry.363019952" : sohuudoanhnghiep, "entry.631090580" : tongtaisan, "entry.563380960" :  phamtramcopham, "entry.210073991" : doanhsocongty, "entry.769068328" : tuoicon, "entry.1542099653" :  nhucaukhac, "entry.504585192" : getlink},
        type: "POST",
        dataType: "xml",
		crossDomain : true,
        success: function(data){
            if(data.success == true)
            {
                $('#thankyou').modal('show');
            }
        },
        error: function(){
           $('#thankyou').modal('show');  
        }
    });
}
