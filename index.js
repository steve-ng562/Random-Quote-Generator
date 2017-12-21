$(document).ready(function(){
    $("#generate").click(function() {
        $.ajax({
            url: "https://quotesondesign.com//wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
            cache: false,
            success: function (data) {

                var content = data[0].content.slice(3, -5);
                var author = data[0].title;
                $("#quote").html(content);
                $(".blockquote-footer").html(author);

            }
            })

    });
    $("#facebook").click(function(){
        window.location.href="https://www.facebook.com/steve.ng.338";
    });
    $("#instagram").click(function(){
        window.location.href="https://www.instagram.com/steve_ng19/";
    });
    $("#linkedin").click(function(){
        window.location.href="https://www.linkedin.com/in/stevejng/";
    });
});


