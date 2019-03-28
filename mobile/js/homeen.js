function quk() {
    $(function () {
        $(".banner").slideDown(2000);
        $(".zibenguanli").find("h3").fadeIn(4000);
        $(".home_samoye").find("p").fadeIn(5000);

        //导航菜单栏的出现和消失
        $(".daohang").click(function () {
            if ($(".daohang_box").css("display") == "none") {
                $(".daohang_box").fadeIn(600);
            } else {
                $(".daohang_box").fadeOut(600);
            }
        });
        $("section").click(function () {
            $(".daohang_box").fadeOut(600);
        });

        // 区块链pcs研发
        $(".button1").click(function () {
            $(this).css({
                "backgroundColor": "#ffffff",
                "backgroundImage": "url('../imgages/shouye/lanyuan.png')"
            }).siblings(".button2").css({
                "backgroundColor": "#f7f7f7",
                "backgroundImage": "url('../imgages/shouye/heidengpao.png')"
            })
            $(this).siblings(".section_yanfa_lists").html("<p class='section_yanfa_mubiao'>PCS aims: through continuous block chain technology development and innovation, To build an open, transparent, safe and diversified ecosystem for enterprise users and ordinary users.</p>");
        });
        $(".button2").click(function () {
            $(this).css({
                "backgroundColor": "#ffffff",
                "backgroundImage": "url('../imgages/shouye/lianying-shouye-icon-chuangxin.png')"
            }).siblings(".button1").css({
                "backgroundColor": "#f7f7f7",
                "backgroundImage": "url('../imgages/shouye/lianying-shouye-icon-mubiao.png')"
            })
            $(this).siblings(".section_yanfa_lists").html("<ul class=\"section_yanfa_lists\">\n" +
                "                                    <li class=\"section_yanfa_lists_a\">Support second processing speed</li>\n" +
                "                                    <li class=\"section_yanfa_lists_b\">commonality and compatibility design</li>\n" +
                "                                    <li class=\"section_yanfa_lists_c\">humanized block chain programming operation</li>\n" +
                "                                    <li class=\"section_yanfa_lists_d\">enhance the extensibility of the underlying public chain</li>\n" +
                "                                    <li class=\"section_yanfa_lists_e\">free use of network resources by users</li>\n" +
                "                                </ul>")
        });


        // 点击回到顶部
        $(window).scroll(function () {
            if ($(window).scrollTop() > 150) {
                $(".btn").fadeIn(200);
            };
            if ($(window).scrollTop() < 150) {
                $(".btn").fadeOut(200);
            };
        });
        $(".btn").click(function () {
            $("html,body").animate({scrollTop: 0}, 800);
            return false;
        });
        $(".language").click(function () {
            if ($(this).find("span").find("a").css("display") == "none") {
                $(this).find("span").find("a").fadeIn(200);
            } else {
                $(this).find("span").find("a").fadeOut(200);
            }
        });
        $("section").click(function () {
            $(".language").find("span").find("a").fadeOut(200);
        });


    });
}