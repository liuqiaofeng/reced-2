/**
 * Created by lenovo on 2017-03-18.
 */
$(function () {
        $(".menu > li > a").click(function(){
            $(this).parents().siblings().find(".er").hide(300);
            $(this).siblings(".er").toggle(300);
            $(this).css(' text-decoration','none')

        });

    }
)