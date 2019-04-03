define(["config", "common"], function (con, com) {
    /****************************楼宇****************************/
    return {
        loadMain: function () {
            //左边第一列元素
            $("#left_first_01").empty();
            $("#left_first_02").empty();
            $("#left_first_03").empty();
            $("#left_first_04").empty();
            //左边第二列元素
            $("#left_second_01").empty();
            $("#left_second_02").empty();
            $("#left_second_03").empty();
            $("#left_second_04").empty();


            this.loadLeftFirst1();//加载左侧第一列第一个div
            //this.loadLeftSecond1();
        },
        //加载第一个div
        loadLeftFirst1: function () {
            var url = con.HtmlUrl + 'Industry/Building/Left_First_01.html';
            require(['text!' + url], function (template) {
                $("#left_first_01").html(template);


                $("#left01_01").hide();
                $("#left01_01").show('drop', 1000, function () {
                });//左侧
            })
        },
        //加载第一个div
        loadLeftSecond1: function () {
            var url = con.HtmlUrl + 'Industry/Building/Left_Second_01.html';
            require(['text!' + url], function (template) {
                $("#left_second_01").html(template);


                $("#left02_01").hide();
                $("#left02_01").show('drop', 1000, function () {
                });//左侧
            })
        },

       
        Revert: function () {

        }
    }
})