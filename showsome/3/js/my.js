/* 计算器程序制作思路：先声明两个全局变量数组 arryresule[]与arrylog[]分别
   用于存储输入的数据与运算符，当输入‘+’、‘-’、‘*’、‘/’时判断输入数据的个数是否大于三个，
   如果大于三个则前两个值运算并将结果直接显示出来，若输入操作符为三角函数则直接进行运算，
   当点击“=”时，取得最终运算值。getvalue(a)为取到输入值函数，当点击数字按钮时执行，
   并进行输入数值的判断当输入值为小数时，若含有多余‘.’则只保留第一个如数的'.',
   若输入数字前面有多个无效0的话自动清除多余的无效0。*/
/*-------------------------------------------------------------------------------------*/   
//getlogical(log)为取得运算符数组函数，当点击运算符时讲运算符存储至arrylog[]数组中。
/*-------------------------------------------------------------------------------------*/ 
//triangle(x)取得三角函数操作符使用case判断直接进行运算。
/*-------------------------------------------------------------------------------------*/ 
//clearvalue()为AC按键功能，当点击时清楚所有数据并置0。
/*-------------------------------------------------------------------------------------*/ 
//clearonlyvalue()用于字符操作清零，但不清除数值存储数组arryresule中的内容。
/*-------------------------------------------------------------------------------------*/ 
//clearvalue0()用于最后结果显示并清除存储的数据与字符串数组内容，释放多余内存。
/*-------------------------------------------------------------------------------------*/ 
//showresult()取得arryresule[]与arrylogz中的内容进行最终运算

        var arryresule = [];
        var arrylog = [];
        function getvalue(a) {
            var str = document.getElementsByClassName("num");
            var inpt = document.getElementById("outer");
            var plac = inpt.value;
            var b = plac.indexOf('.');
            var c = plac.indexOf('0');
            //当小数点位置位于第二个位置时
            if (b >= 1) {
                // console.log("输入数字为小数");
                for (var i = 0; i < plac.length; i++) {
                    var charat = plac.charAt(i);
                    var zero = plac.charAt(0);
                    if (charat == '.') {
                        // console.log('小数点的位置为：' + i);
                        for (i + 1; i < plac.length; i++) {
                            if (plac.charAt(i + 1) == '.') {
                                plac = plac.slice(0, i + 1) + plac.slice(i + 2, plac.length);
                            }
                        }
                        if (i == 1) {
                            // console.log('无需删除小数点前的0');
                        } else {
                            // console.log('需要进一步考虑');
                            while ((plac.charAt(1) == '0') && (plac.charAt(0) == '0')) {
                                // console.log('进入循环');
                                plac = plac.slice(1);
                            }
                        }
                    }
                }
            }
            //当小数点位置位于起始位置时
            else if (b == 0) {
                // console.log('当前小数点位置为0');
                plac = '0'.concat(plac);
            }
            //当0位于最高位时 
            else if (c == 0) {
                while (plac.charAt(0) == '0') {
                    plac = plac.slice(1);
                }
            }
            inpt.value = plac;
            inpt.value += str[a].innerHTML;
            console.log(inpt.value);
        }
        //“AC”按钮清楚数值
        function clearvalue() {
            var inpt = document.getElementById('outer');
            inpt.value = '0';
            arryresule = [];
            arrylog = [];
        }
         function clearvalue0() {
            var inpt = document.getElementById('outer');
            // inpt.value = '0';
            arryresule = [];
            arrylog = [];
        }
        function clearonlyvalue() {
            var inpt = document.getElementById('outer');
            inpt.value = '0';
        }
        //获取运算符
        function getlogical(log) {
            var logvalue = document.getElementsByClassName('log');
            var logget = logvalue[log].innerHTML;
            var inpt = document.getElementById("outer");
            var firstvalue = inpt.value;
            var nextvalue = 0;
            var flag = 0
            arryresule.push((inpt.value-0));
            switch (logget) {
                case ('+'):
                    {
                        console.log(arryresule);
                        console.log('当前取值为"+"');
                        arrylog.push('+');
                        // console.log(firstvalue);
                        inpt.value = '+';
                        flag++;
                        break;
                    }
                case ('-'):
                    {
                        // arryresule.push(firstvalue);
                        console.log(arryresule);
                        console.log('当前取值为"-"');
                        arrylog.push('+');
                        // console.log(firstvalue);
                        inpt.value = '-';
                        flag += 2;
                        break;
                    }
                case ('*'):
                    // arryresule.push(firstvalue);
                    console.log(arryresule);
                    console.log('当前取值为"*"');
                    arrylog.push('*');
                    // console.log(firstvalue);
                    inpt.value = '*';
                    flag++;
                    break;
                case ('/'):
                    // arryresule.push(firstvalue);
                    console.log(arryresule);
                    console.log('当前取值为"/"');
                    arrylog.push('/');
                    // console.log(firstvalue);
                    inpt.value = '/';
                    flag++;
                    break;
            }
            if (flag == 1) {
                // arryresule.push(firstvalue);
                clearonlyvalue();
                flag = 0;
            }
            if (flag == 2) {
                flag = 0;
            }
            console.log(arryresule);
            // return b;
        }
        //三角函数运算
        function triangle(x){
        	var str = document.getElementsByClassName("triangle");
        	var tri = str[x].innerHTML;
        	var c = inpt.value - 0;
        	var d = 180/inpt.value;
        	var e;

        	switch(tri)
        	{
        		case('sin(x)'):{
        			inpt.value = Math.sin(Math.PI/d);
        		}
        		case('cos(x)'):{
        			inpt.value = Math.cos(Math.PI/d);
        		}
        	}
        }
        //取得结果
        function showresult() {
            var result = inpt.value;
            var resultnum = [];
            console.log('结果为:' + result);
            arryresule.push((inpt.value-0));
            console.log(arryresule);
            console.log(arrylog);
            for(var i;i<arryresule.length;i++){
            	resultnum[i] = arryresule[i] - 0;
            }
            // return resultnum;
            console.log(resultnum);
            var leng = arryresule.length;

            for(var i=0;i<(arryresule.length-1);i++){
            	switch(arrylog[i]){
            		case('+'):{
            			arryresule[i+1] = arryresule[i] + arryresule[i+1];
            			console.log('加号进来');
            			console.log(arryresule[i+1]);
            			if((i+1)==(arryresule.length-1)){
            				var aa = [];
            				aa = arryresule[i+1];
            				inpt.value = aa;
            				clearvalue0();
            				console.log('aa的值为:'+aa);
            			}
            			break;
            		}
            		case('-'):{
            			arryresule[i+1] = arryresule[i] - arryresule[i+1];
            			console.log('减号进来');
            			console.log(arryresule[i+1]);
            			if((i+1)==(arryresule.length-1)){
            				var aa = [];
            				aa = arryresule[i+1];
            				inpt.value = aa;
            				clearvalue0();
            				console.log('aa的值为:'+aa);
            			}
            			break;
            		}
            		case('*'):{
            			arryresule[i+1] = arryresule[i] * arryresule[i+1];
            			console.log('乘号进来');
            			console.log(arryresule[i+1]);
            			if((i+1)==(arryresule.length-1)){
            				var aa = [];
            				aa = arryresule[i+1];
            				inpt.value = aa;
            				clearvalue0();
            				console.log('aa的值为:'+aa);
            			}
            			break;
            		}
            		case('/'):{
            			arryresule[i+1] = arryresule[i] / arryresule[i+1];
            			console.log('除号进来');
            			console.log(arryresule[i+1]);
            			if((i+1)==(arryresule.length-1)){
            				var aa = [];
            				aa = arryresule[i+1];
            				inpt.value = aa;
            				clearvalue0();
            				console.log('aa的值为:'+aa);
            			}
            			break;
            		}
            		// console.log(arryresule[i]);
            }
            
            	}
        }
        var inpt = document.getElementById("outer");