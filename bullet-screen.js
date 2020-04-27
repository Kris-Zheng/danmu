
(function($){
    $.bulletScreen={
        timers:[],    //数组
         /**
         */
        send:function(val,container){
            var odiv = $("<div class='bullet'></div>");       //创建弹幕元素
            odiv.html(val);
            this.add(odiv,container);
        },
        /*
         */
        /**
         * 添加弹幕
         */
        add:function(odiv,container){
            odiv.css({                          //定义弹幕元素的基本样式
                position:'absolute',
                display:'block',
                whiteSpace:'nowrap'
            });
            var r = Math.floor(Math.random() * 254);
            var g = Math.floor(Math.random() * 254);
            var b = Math.floor(Math.random() * 254);
            var fontsize = Math.round(Math.random()*50);
            odiv.css({                        //定义弹幕元素的随机样式（top位置,颜色）
                color: "rgb(" + r + "," + g + "," + b + ")",
                top: (Math.floor(Math.random() * container.height())-30) + "px",
                width:odiv.width(),
                fontSize: fontsize
            });
            container.append(odiv);
            this.move(odiv,container);
        },
    
        move:function(odiv,container){
            var i = Math.floor(Math.random()*1920);;
            var timer = setInterval(function() {
                odiv.css({
                    right: (i) + "px"
                });
            }, 0);
        },
        /*
         * 清除弹幕墙上的所有弹幕
         */
        clear:function(container){
            for (var i = 0; i < this.timers.length; i++) {  //遍历定时素组，清除所有定时任务
                clearInterval(this.timers[i])
            }
            container.find('.bullet').remove();
        }
    }
})(jQuery);