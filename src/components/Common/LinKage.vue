<template>
    <div class="linkage">
        <div class="address_container">
            <div class="address_title">
                <p class="title">配送至</p> 
                <span class="close"></span>
            </div>
            <div class="address_detail_info">
                <div class="address_nav">
                    <div class="address_nav_name">请选择</div>
                    <div class="address_nav_name">请选择</div>
                    <div class="address_nav_name">请选择</div>
                </div>
                <div class="address_panel">
                    <ul class="address_panel_list" id="sheng"></ul>
                    <ul class="address_panel_list" id="shi"></ul>
                    <ul class="address_panel_list" id="qu"></ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
    }
  },
  mounted() {
    var inaxax_name_sheng = false;
    var inaxax_name_shi = false;
    $('.address_nav .address_nav_name:eq(0)').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.address_panel .address_panel_list').eq($(".address_nav .address_nav_name").index(this)).addClass('active').siblings().removeClass('active');
        if(inaxax_name_sheng){
            return false;
        }else{
            nameAJax();
            inaxax_name_sheng = true;
        }
    })
    $('.address_nav .address_nav_name:eq(1)').click(function(){
        if($(" input[ name='sheng']").val()){
           $(this).addClass('active').siblings().removeClass('active');
           $('.address_panel .address_panel_list').eq($(".address_nav .address_nav_name").index(this)).addClass('active').siblings().removeClass('active');
        }else{
           $('.address_nav .address_nav_name:eq(0)').addClass('active').siblings().removeClass('active');
           $('.address_panel .address_panel_list').eq(0).addClass('active').siblings().removeClass('active');
           nameAJax();
        }
    })
    $('.address_nav .address_nav_name:eq(2)').click(function(){
        if($(" input[ name='shi']").val() == '' && $(" input[ name='sheng']").val() == ''){
           $('.address_nav .address_nav_name:eq(0)').addClass('active').siblings().removeClass('active');
           $('.address_panel .address_panel_list').eq(0).addClass('active').siblings().removeClass('active');
           nameAJax();
        }else if($(" input[ name='sheng']").val() != '' && $(" input[ name='shi']").val() == ''){
           $('.address_nav .address_nav_name:eq(1)').addClass('active').siblings().removeClass('active');
           $('.address_panel .address_panel_list').eq(1).addClass('active').siblings().removeClass('active');
        }else{
            $('.address_nav .address_nav_name:eq(2)').addClass('active').siblings().removeClass('active');
           $('.address_panel .address_panel_list').eq(2).addClass('active').siblings().removeClass('active');
        }
    })

    function nameAJax(){
        $.ajax({
            type: 'get',
            url: 'http://a.appjsh.com/api/api/get_area_province',
            async: false,
            dataType: 'json',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {},
            success: function (res) {
                var mainCon_sheng = res.data;
                var str = '';
                var mainCon = $('#sheng');
                for (var item in mainCon_sheng) {
                 str += '<li class="address_panel_item" id="'+mainCon_sheng[item].id+'" area_id="'+mainCon_sheng[item].area_id+'">'; 
                 str += '<span>'+mainCon_sheng[item].name+'</span>'; 
                 str += '</li>'; 
                }
                mainCon.append(str); 
            }
        })
    }

    $('.close').click(function(){
        $('.linkage').hide();
    })

    // 省跳市
    $(document).on('click', "#sheng .address_panel_item", function(e) {
        var shiid = $(this).attr("area_id")
        var shiids = $(this).attr("id")
        $(this).addClass('active').siblings().removeClass('active');
        $("input[name='sheng']").val(shiid);
        $("input[name='sheng_TyId']").val(shiids);
        $('#shi li').remove();
        $('#qu li').remove();
        $.ajax({
            type: 'get',
            url: 'http://a.appjsh.com/api/api/get_area_city/' + shiid,
            async: false,
            dataType: 'json',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {},
            success: function (res) {
                var mainCon_sheng = res.data;
                var str = '';
                var mainCon = $('#shi');
                for (var item in mainCon_sheng) {
                //  str += '<li class="address_panel_item" id="'+mainCon_sheng[item].id+'" area_id="'+mainCon_sheng[item].area_id+'">'+mainCon_sheng[item].name+'</li>'; 
                 str += '<li class="address_panel_item" id="'+mainCon_sheng[item].id+'" area_id="'+mainCon_sheng[item].area_id+'">'; 
                 str += '<span>'+mainCon_sheng[item].name+'</span>'; 
                 str += '</li>';
                }
                mainCon.append(str); 
            }
        })
        $(this).parent().next().addClass('active').siblings().removeClass('active');
        $('.address_nav .address_nav_name').eq(1).addClass('active').siblings().removeClass('active');
    })

      

    // 市跳区
    $(document).on('click', "#shi .address_panel_item", function(e) {
        var shiid = $(this).attr("area_id")
        var shiids = $(this).attr("id")
        $(this).addClass('active').siblings().removeClass('active');
        $("input[name='shi']").val(shiid);
        $("input[name='shi_TyId']").val(shiids);
        $('#qu li').remove();
        $.ajax({
            type: 'get',
            url: 'http://a.appjsh.com/api/api/get_area_area/' + shiid,
            async: false,
            dataType: 'json',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {},
            success: function (res) {
                var mainCon_shengs = res.data;
                var str = '';
                var mainCon = $('#qu');
                for (var item in mainCon_shengs) {
                //  str += '<li class="address_panel_item" id="'+mainCon_shengs[item].id+'" area_id="'+mainCon_shengs[item].area_id+'">'+mainCon_shengs[item].name+'</li>'; 
                 str += '<li class="address_panel_item" id="'+mainCon_shengs[item].id+'" area_id="'+mainCon_shengs[item].area_id+'">'; 
                 str += '<span>'+mainCon_shengs[item].name+'</span>'; 
                 str += '</li>';
                }
                mainCon.append(str); 
            }
        })
        $(this).parent().next().addClass('active').siblings().removeClass('active');
        $('.address_nav .address_nav_name').eq(2).addClass('active').siblings().removeClass('active');
    })


    // 区赋值
    $(document).on('click', "#qu .address_panel_item", function(e) {
        var shiid = $(this).attr("area_id")
        var shiids = $(this).attr("id")
        $(this).addClass('active').siblings().removeClass('active');
        $("input[name='qu']").val(shiid);
        $("input[name='qu_TyId']").val(shiids);

        var Sheng = $('#sheng .address_panel_item.active').text();
        var Shi = $('#shi .address_panel_item.active').text();
        var Qu = $('#qu .address_panel_item.active').text();
        $('.btn1').text(Sheng + Shi +Qu);
        $('.linkage').hide();
    })


  },
}
</script>

<style lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';

.linkage{
    position: fixed;
    z-index: 100000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.4);
    display:none;
    .address_container{
        position: fixed;
        z-index: 1000;
        height:rem(700px);
        width: 100%;
        background-color: #fff;
        left: 0;
        bottom: 0;
        .address_title{
            width: 100%;
            height: rem(80px);
            position: relative;
            background-color: #fff;
            .title{
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                height: 100%;
                border-bottom: 1px #ccc solid;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                display: -webkit-flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -ms-flex-direction: row;
                flex-direction: row;
                font-size:rem(30px);
            }
            .close{
                display: inline-block;
                position: absolute;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                right:rem(30px);
                &:after {
                    content: "\2715"; //形状X
                    color: #a2b6c5;
                    font-size:rem(30px);
                    cursor: pointer;
                }
            }
        }
        .address_detail_info{
            .address_nav{
                height:rem(80px);
                border-bottom: 1px #ccc solid;
                background-color: #fff;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                display: -webkit-flex;
                -webkit-box-pack: start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -ms-flex-direction: row;
                flex-direction: row;
                .address_nav_name{
                    height: 100%;
                    padding: 0 rem(20px);
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    display: -webkit-flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-orient: horizontal;
                    -webkit-box-direction: normal;
                    -ms-flex-direction: row;
                    flex-direction: row;
                    font-size:rem(26px);
                }
                .address_nav_name.active{
                    border-bottom: 1px solid red;
                }
            }
            .address_panel{
                padding: 0;
                margin: 0;
                .address_panel_list{
                    overflow-y: auto;
                    height: rem(500px);
                    display:none;
                    .address_panel_item{
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        padding-left:rem(20px);
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        display: -webkit-flex;
                        -webkit-box-pack: start;
                        -ms-flex-pack: start;
                        justify-content: flex-start;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        -webkit-box-orient: horizontal;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: row;
                        flex-direction: row;
                        height:rem(80px);
                        background-color: #fff;
                        font-size:rem(26px);
                        box-sizing: border-box;
                        span{
                            position:relative;
                        }
                    }
                   .address_panel_item.active span:after{
                       position:absolute;
                       content:'\2714';
                       color:red;
                       right:rem(-35px);
                       top:rem(-4px);
                       font-size:rem(30px);
                   }
                }
                .address_panel_list.active{
                    display:block;
                }
            }
        }
    }
}


</style>
