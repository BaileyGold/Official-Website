
var mySwiper = new Swiper ('.video-banner-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项
    autoplay:false,
    // 如果需要分页器
    pagination: {
      el: '.video-banner',
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.video-banner-next',
      prevEl: '.video-banner-prev',
    },
  })  
  var iphoneSwier = new Swiper ('.iphone-banner-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: false, // 循环模式选项
      autoplay:false,
      // 如果需要分页器
      pagination: {
        el: '.iphone-banner-pagination',
      },
	  
    })  

// 中英文点击切换（手动翻译）
var index = {
		initPage: function() {
			var self = this;
			self.initBtn(self);
		},
		initBtn: function(self) {
			var english = ["Home", "Gameplay","Shop",
			"One piece King Roger said a word before being executed, causing people from all over the world to flock to the sea----",
			'"Do you want my treasure? If you want it, go to the sea to find it. I put it all there."',
			'So the heroes all started their sailing journey.',
			'Those extraordinary adventures have made great heroes one after another. They have made these lofty words for their ideals or for their companions——',
			`"One day I will find a partner who does not lose to these people, and find the world's largest treasure. I want to become the One Piece!!!"`,
			`"I want to become stronger with her, and I want to become the world's best swordsman, with a reputation that even the kingdom of heaven can be heard!!!"`,
			`"I'm not a born king, but there is blood flowing in my bones that prevents me from bowing my head."`,
			`If you approach them, you will meet such a group of tough partners——`,
			`Luffy: "We are partners!"`,
			`Sauron: "If you can't even protect your own captain, how am I going to talk about it!"`,
			`Usopp: "If you don't fight with all your strength here, you won't be qualified to take the same boat with them, and it's impossible to laugh sincerely like them!"`,
			`Frankie: "I am someone who has already died once. In order to let the straw hats leave here alive, it doesn't matter if I die again!"`,
			`It is these great qualities that have condensed into dazzling pearls in this turbulent sea...`,
			`Go find it, in this vast kingdom, there is also gold waiting for you to dig!`,
			"Gameplay>","Shop>","Contact us"];
			var chinese = [];
			$(".navtab").children(".yes").each(function(i, item) {
				var pag_val = $.trim($(item).text());
				chinese.push(pag_val);
			});
			$("button").click(function() {
				if ($.trim($(this).text()) == "中文") {
					$(this).text("english")
					$(".navtab").children(".yes").each(function(i, item) {
						$(item).text(chinese[i]);
					});
				} else {
					$(this).text("中文");
					$(".navtab").children(".yes").each(function(i, item) {
						$(item).text(english[i]);
					});
				}
			})
		}
	};
		
	$(function() {
		index.initPage();
	})

