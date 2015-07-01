var cm = require("sdk/context-menu");
var tabs = require("sdk/tabs");
var self = require("sdk/self");
cm.Menu({
	label: "Community Market Search",
	context: cm.SelectionContext(),
	contentScriptFile: self.data.url("searchContextMenu.js"),
	image: self.data.url("images/48.png"),
	items: [
		cm.Item({
			label: "Search emoticons",
			data: "EMOTICONS"
		}),
		cm.Item({
			label: "Search trading cards",
			data: "CARDS"
		}),
		cm.Item({
			label: "Search profile backgrounds",
			data: "BACKGROUNDS"
		}),
		cm.Item({
			label: "Search booster packs",
			data: "BOOSTERS"
		}),
		cm.Item({
			label: "Search everything",
			data: "EVERYTHING"
		})
	],
	onMessage: function(message) {
		if(message.name == 'click') {
			tabs.open({
				url: message.data,
				inBackground: true
			});
		}
	}
});