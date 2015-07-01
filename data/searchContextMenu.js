self.on("click", function(node, section) {
	var sections = {
		EMOTICONS: 'tag_item_class_4',
		BACKGROUNDS: 'tag_item_class_3',
		CARDS: 'tag_item_class_2',
		BOOSTERS: 'tag_item_class_5'
	};
	var query = getSelection().toString();
	var link = "http://steamcommunity.com/market/search?q=" + encodeURIComponent(query) + "&category_753_Game%5B%5D=any" + (sections[section] ? '&category_753_item_class%5B%5D=' + sections[section] : '') + "&appid=753"
	
	self.postMessage({
		name: 'click',
		data: link
	});
});