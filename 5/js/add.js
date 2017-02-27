$('#subbtn').on('click', function(even) {
       event.preventDefault();
        $.ajax({
            url: 'data/add.php',
            type: 'get',
            dataType: 'json',
            data: {
                title: $('#title').val(),
                content:$('#content').val()
            },
            success:function(res) {
            	if(res.status == "ok"){
            		alert('添加成功');
                    location.href = 'index.html';
            	}
            	else{
            		alert('添加失败，请检查php文件');
            	}
            },
            error:function(){ 
            	alert("添加出错了");
            }
        });
    });