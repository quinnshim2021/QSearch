//Javascript Source Code QSearch
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("select").addEventListener('click', function() { //select/deselct all button
		if (document.getElementById("select").innerHTML == "Select All") {
			document.getElementById("select").innerHTML = "Deselect";
			document.getElementById("facebook").checked = true;  //prob there's a better way to do this
			document.getElementById("google").checked = true;
			document.getElementById("twitter").checked = true;
			document.getElementById("twitch").checked = true;
			document.getElementById("quora").checked = true;
			document.getElementById("gplus").checked = true;
			document.getElementById("wikipedia").checked = true;
			document.getElementById("wikiuser").checked = true;
			document.getElementById("linkedin").checked = true;
			document.getElementById("pinterest").checked = true;
			document.getElementById("youtube").checked = true;
			document.getElementById("tumblr").checked = true;
			document.getElementById("instagram").checked = true;
			document.getElementById("imdb").checked = true;
			document.getElementById("reddit").checked = true;
		} else {
			document.getElementById("select").innerHTML = "Select All";
			document.getElementById("facebook").checked = false;  //prob there's a better way to do this
			document.getElementById("google").checked = false;
			document.getElementById("twitter").checked = false;
			document.getElementById("twitch").checked = false;
			document.getElementById("quora").checked = false;
			document.getElementById("gplus").checked = false;
			document.getElementById("wikipedia").checked = false;
			document.getElementById("wikiuser").checked = false;
			document.getElementById("linkedin").checked = false;
			document.getElementById("pinterest").checked = false;
			document.getElementById("youtube").checked = false;
			document.getElementById("tumblr").checked = false;
			document.getElementById("instagram").checked = false;
			document.getElementById("imdb").checked = false;
			document.getElementById("reddit").checked = false;
		}
	});

	var input = document.getElementById("name");	//Enter button while in input tag
	input.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("qSearchButton").click(); //calls regular button click
		}
	});

	document.getElementById('qSearchButton').addEventListener('click', function() { //make it so that enter key does the same thing

		var name = true;
		if (document.getElementById("name").value.length == 0) { //checks if they entered nothing
			document.getElementById("noName").innerHTML = "Must enter a name! Try again :)";
			name = false;
		}

		var vals = document.getElementById("name").value.split(" "); //makes an array for every word separated by a space
		var selected = false; //to test if they forgot to select a site
		var urls = [];

		if (document.getElementById("linkedin").checked == true){	//linkedin
			selected = true;
			if (vals.length == 1) {
				urls.push("https://www.linkedin.com/search/results/people/?keywords=" + vals[0] + "&origin=SWITCH_SEARCH_VERTICAL"); //push URL into array
			} else {
				var url = "https://www.linkedin.com/search/results/people/?keywords=" + vals[0]; //get every word in val to add to search results
				for (var i = 1; i < vals.length; i++) {
					url += "+" + vals[i];
				}
				url += "&origin=SWITCH_SEARCH_VERTICAL";
				urls.push(url);
			}
		}
		if (document.getElementById("reddit").checked == true) { //reddit
			selected = true;
			if (vals.length == 1) {
				urls.push("https://www.reddit.com/search?q=" + vals[0] + "&type=sr%2Cuser");
			} else {
				var url = "https://www.reddit.com/search?q=" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "%20" + vals[i];
				}
				url += "&type=sr%2Cuser";
				urls.push(url);
			}
		}
		if (document.getElementById("facebook").checked == true) { //facebook
			selected = true;
			if (vals.length == 1) {
				urls.push("https://www.facebook.com/search/people/?q=" + vals[0]);
			} else {
				var url = "https://www.facebook.com/search/people/?q=" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "%20" + vals[i];
				}
				urls.push(url);
			}
		}
		if (document.getElementById("twitter").checked == true) { //twitter
			selected = true;
			if (vals.length == 1) {
				urls.push("https://twitter.com/search?f=users&vertical=default&q=" + vals[0] + "&src=typd");
			} else {
				var url = "https://twitter.com/search?f=users&vertical=default&q=" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "%20" + vals[i];
				}
				url += "&src=typd";
				urls.push(url);
			}
		}
		if (document.getElementById("wikipedia").checked == true) { //wikipedia article
			selected = true;
			if (vals.length == 1) {
				urls.push("https://en.wikipedia.org/w/index.php?search=" +
					vals[0] +
					"&title=Special:Search&profile=advanced&fulltext=1&ns0=1&searchToken=8kplzdwewqdnzo1gobgq1yr7y");
			} else {
				var url = "https://en.wikipedia.org/w/index.php?search=" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "+" + vals[i];
				}
				url += "&title=Special:Search&profile=advanced&fulltext=1&ns0=1&searchToken=8kplzdwewqdnzo1gobgq1yr7y";
				urls.push(url);
			}
		}
		if (document.getElementById("youtube").checked == true) { //youtube
			selected = true;
			if (vals.length == 1) {
				urls.push("https://www.youtube.com/results?sp=EgIQAkIECAESAA%253D%253D&search_query=" + vals[0]);
			} else {
				var url = "https://www.youtube.com/results?sp=EgIQAkIECAESAA%253D%253D&search_query=" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "+" + vals[i];
				}
				urls.push(url);
			}
		}
		if (document.getElementById("gplus").checked == true) { //Google Plus
			selected = true;
			if (vals.length == 1) {
				urls.push("https://plus.google.com/s/" + vals[0] + "/people");
			} else {
				var url = "https://plus.google.com/s/" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "%20" + vals[i];
				}
				url += "/people";
				urls.push(url);
			}
		}
		if (document.getElementById("imdb").checked == true) { //IMDb
			selected = true;
			if (vals.length == 1) {
				urls.push("https://www.imdb.com/find?ref_=nv_sr_fn&q=" + vals[0] + "&s=nm");
			} else {
				var url = "https://www.imdb.com/find?ref_=nv_sr_fn&q=" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "+" + vals[i];
				}
				url += "&s=nm";
				urls.push(url);
			}
		}
		if (document.getElementById("pinterest").checked == true) { //pinterest
			selected = true;
			if (vals.length == 1) {
				urls.push("https://www.pinterest.com/search/users/?q=" + vals[0] + "&rs=filter");
			} else {
				var url = "https://www.pinterest.com/search/users/?q=" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "%20" + vals[i];
				}
				url += "&rs=filter";
				urls.push(url);
			}
		}
		if (document.getElementById("tumblr").checked == true) { //tumblr
			selected = true;
			if (vals.length == 1) {
				urls.push("https://www.tumblr.com/search/" + vals[0]);
			} else {
				var url = "https://www.tumblr.com/search/" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "+" + vals[i];
				}
				urls.push(url);
			}
		}
		if (document.getElementById("wikiuser").checked == true) { //Wikipedia user
			selected = true;
			if (vals.length == 1) {
				urls.push("https://en.wikipedia.org/w/index.php?search=" +
					vals[0] +
					"&title=Special:Search&profile=advanced&fulltext=1&ns2=1&searchToken=8onn214pikbx20z61q7sapknq");
			} else {
				var url = "https://en.wikipedia.org/w/index.php?search=" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "+" + vals[i];
				}
				url += "&title=Special:Search&profile=advanced&fulltext=1&ns2=1&searchToken=8onn214pikbx20z61q7sapknq";
				urls.push(url);
			}
		}
		if (document.getElementById("quora").checked == true) { //quora
			selected = true;
			if (vals.length == 1) {
				urls.push("https://www.quora.com/search?q=" +vals[0] +"&type=profile");
			} else {
				var url = "https://www.quora.com/search?q=" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "%20" + vals[i];
				}
				url += "&type=profile";
				urls.push(url);
			}
		}
		if (document.getElementById("google").checked == true) { //Google
			selected = true;
			if (vals.length == 1) {
				urls.push("https://www.google.com/search?q=" + vals[0] + "&type=profile");
			} else {
				var url = "https://www.google.com/search?q=" + vals[0];
				for (var i = 1; i < vals.length; i++) {
					url += "+" + vals[i];
				}
				urls.push(url);
			}
		}
		if (document.getElementById("instagram").checked == true) { //Instagram
			selected = true;
			var url = "https://www.instagram.com/" + vals[0];
			if (vals.length > 1) {
				for (var i = 1; i < vals.length; i++) {
					url += "+" + vals[i];
				}
			}
			urls.push(url);
		}
		if (document.getElementById("twitch").checked == true) { //Twitch
			selected = true;
			var url = "https://www.twitch.tv/" + vals[0];
			if (vals.length > 1) {
				for (var i = 1; i < vals.length; i++) {
					url += "+" + vals[i];
				}
			}
			urls.push(url);
		}

		if (!selected) {  //if no site was selected
			document.getElementById("noSites").innerHTML = "Must select sites! Try again :)";
		}

		if (name) {
			urls.forEach(function(currentValue) { //loop through each element and create a new tab
				chrome.tabs.create({ url: currentValue, selected: false })
			});
			if (document.getElementById("noSites").innerHTML != "")
				document.getElementById("noSites").innerHTML = "";
			if (document.getElementById("noName").innerHTML != "")
				document.getElementById("noName").innerHTML = "";
			document.getElementById("qSearchButton").innerHTML = "Searched :)";
		}
		else
			document.getElementById("noName").innerHTML = "Must enter a name! Try again :)";
	});
});

document.addEventListener('DOMContentLoaded',function() { //if they click Help button
		document.getElementById('rules').addEventListener('click', function() {
			if (document.getElementById("howto1").innerHTML == "") {  //if not on screen, show Help
				document.getElementById("howto1").innerHTML = "First: Select which site(s) to search with."
				document.getElementById("howto2").innerHTML = "Second: Enter the name of the person you would like to search."
				document.getElementById("howto3").innerHTML = "Third: Press the 'search' button!"
				document.getElementById("howto4").innerHTML =
					"Extra Notes: When searching Instagram or Twitch, you must enter their username exactly. This is due to how their searches work on Chrome. " +
					"It is not recommended to search Instagram or Twitch in combination with other sites (i.e. Do not search both Facebook and Instagram). This" +
					" will save you many failed searches:)";
				document.getElementById("rules").innerHTML = "Show Less";
			} else {  //if on help is on screen, remove help
				document.getElementById("howto1").innerHTML = "";
				document.getElementById("howto2").innerHTML = "";
				document.getElementById("howto3").innerHTML = "";
				document.getElementById("howto4").innerHTML = "";
				document.getElementById("rules").innerHTML = "Help";
			}
		});
});
