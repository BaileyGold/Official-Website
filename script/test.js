// 中英文点击切换（手动翻译）
var index = {
		initPage: function() {
			var self = this;
			self.initBtn(self);
		},
		initBtn: function(self) {
			var english = ["Home", "Gameplay","Shop",
			"Character Card",
			'There are 9 cards in total, and you may draw important characters such as Luffy, Sauron, Nami, Sanji, etc.',
			'Book',
			'There are 21 cards in this card. You may draw important characters such as Brother Roger, Ace, Redhead Pirate Ship, White Beard Pirate Ship, etc.',
			'Book',
			'There are 70 cards in total, and you may draw characters from important teams such as the Dragon Man, the Five Stars, the Navy, the Revolutionary Army, and the Blackbeard Pirates',
			'Book',
			`Devil Fruit Card`,
			`There are 9 types of this item. You may draw any of the important fruits such as burned fruit, shaken fruit, surgical fruit, duplicated fruit, etc.`,
			'Book',
			`There are 21 kinds of props, and you may draw any of the higher-ranked childlike fruits, burst fruits, soul fruits, etc.`,
			'Book',
			`There are 70 kinds of items in total, and you may draw any of the frozen fruits, sparkling fruits, and fluttering fruits among the three major factions.`,
			'Book',
			`Home>`,
			`Gameplay>`,
			"Contact us"];
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

