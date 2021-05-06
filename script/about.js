// 翻译
var index = {
		initPage: function() {
			var self = this;
			self.initBtn(self);
		},
		initBtn: function(self) {
			var english = ["Home", "Gameplay","Shop","Introduction",
			`ONE PIECE NFT KINGDOM is the first NFT card game with the theme of Japanese anime One Piece. The game is designed with 100 character cards and 100 fruit props. 
			The character cards are designed according to the famous characters in One Piece, divided into 3 100 million cards are issued for each level; the devil fruit card is based on the devil fruit, 
			which is divided into 3 levels, and 500 million cards are issued. Each card is unique and can be used for collection or participating in card mining, Card battles and other games, 
			and each type of card is divided according to level and rarity. The higher the level, the higher the rarity, and the smaller the number of cards issued.`,
			'Game Rules',
			'NFT card 1. Character Card',
			`NFT card 2. Devil Fruit Card`,
			`Game 1: Set card mining`,
			`When the user “places” the obtained NFT card in the “card mining” page into the corresponding “card slot”, the NFT can be activated to obtain the corresponding combat power value. 
			NFT cards are placed in the mining pool for mining, and the governance token BLG is obtained. BLG is the first to be traded on the MDEX platform, and mainstream exchanges will be opened for trading in the future.`,
			`The mining ability is calculated based on the sum of the combat power values of all the cards of the user.`,
			`Card slot`,
			`Game 2: Card PK`,
			`1. Only players with three types of scarce Character Cards of R, SR, and SSR can play this game. The scarcity level from high to low is SSR, SR, and R.`,
			`2. Before the start of each game, the player chooses one card from each of his three types of cards. The system randomly selects the starting party. The game adopts a three-game two-win system. 
			Each game player selects one of his own cards. Draw one to play against the opponent, and the higher-level one wins.`,
			`3. If the game is tied, players need to upgrade their cards with Devil Fruit Card. After the upgrade, 
			the player with high combat power wins. If the winner still cannot be distinguished, the platform will destroy one character card each.`,
			`4. After the game is over, the smart contract will randomly destroy a character card of the loser, and randomly select a character card of the loser to give to the winner. 
			Each game will automatically destroy a character card. When the destruction reaches 20 million, it will no longer be destroyed.`,
			`5. At the end of each game, cards with a certain probability are dropped as a reward for the winner.`,
			"Home>","Shop>","Contact us"];
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
