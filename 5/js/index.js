$(function() {
    function loaddata() {
        $.ajax({
            url: 'data/index.php',
            type: 'get',
            dataType: 'json',
            data: {},
            success: function(res) {
                console.log(res);
                var result = res;
                var _html = "<h1>当前录入的书籍列表</h1>"+"<table class='table table-bordered'>"
                for (var i = 0; i < res.length; i++) {
                    _html += "<tr><td>" + res[i]['id'] + "</td><td>" + res[i]['title'] + "</td><td>" + res[i]['content'] + "</td><td><span data-id='" + res[i]['id'] + "' class='del'>删除</span></td></tr>";
                }
                _html += "</table><a href='add.html'>新增图书</a>";
                setTimeout(function() {
                    $('#con').html(_html);
                }, 930)
            },
            error: function() {
                alert("erro!");
            }
        });
    }
    //加载功能
    loaddata();
    //删除功能
    $('body').on('click', '.del', function(even) {
        var _id = $(this).attr('data-id');
        alert("删除" + _id);
        $.ajax({
            url: 'data/del.php',
            type: 'get',
            dataType: 'json',
            data: {
                id: _id
            },
            success: function(res) {
                if (res.status == "ok") {
                    alert('删除成功');
                } else {
                    alert('删除失败，请检查php文件');
                }
                loaddata();
            },
            error: function() {
                alert("删除出错了");
            }
        });
    });
    //更新功能
    $('body').on('click', 'td', function(even) {
        var $id = $(this).parent().children().eq(0).text();
        var $propvalue = $(this).text();
        if (!$(this).is('.input')) {
            $(this).html('<input type="text" id="ab" value="' + $(this).text() + '" />').find('input').focus().blur(function() {
                var _thisvalue = $(this).val(); //更改后的值;
                var $selectnum = $(this).parent().index(); //判断更改元素的列；
                alert("原始内容为:" + $propvalue);
                alert("更改后的内容为:" + _thisvalue);
                switch ($selectnum) {   //判断被点击的td为数据库中的newstitle还是newscontent
                    case 0:
                        {
                            alert("id不允许被修改");
                            loaddata();
                            break;
                        }
                    case 3:
                        {
                            alert("删除按钮不允许被修改");
                            loaddata();
                            break;
                        }
                    default:
                        {

                            $.ajax({
                                url: 'data/updata.php',
                                type: 'get',
                                dataType: 'json',
                                data: {
                                    // thisclass: _thisclass,
                                    thisvalue: _thisvalue,
                                    thisindex: $selectnum,
                                    id: $id
                                },
                                success: function(res) {
                                    if (res.status == "ok") {
                                        alert('更新成功');
                                    } else {
                                        alert('更新失败，请检查php文件');
                                        // alert(thisvalue);
                                    }
                                    loaddata();
                                },
                                error: function() {
                                    alert("更新出错了");
                                    loaddata();
                                }
                            });
                            $(this).parent().removeClass('input').html($(this).val() || 0);
                            break;
                        }
                }

            })
        };
    });
});