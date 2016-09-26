$(document).ready(function() {
	
	SC.initialize({
	  client_id: '5c10bec7cd919b6f75937bedc71e4a0a'
	});	

  	$("#search_button").click(function() {
  		var searchValue = $("#search").val();

  		SC.get('/tracks', {
  			q: searchValue, license: 'cc-by-sa'
			}).then(function(tracks) {
				ids = tracks.map(function(track) {
					return track.id;
				});

				console.log(ids);
  		});
  	});

  	i = 0;

	$("#play").click(function() {
		SC.stream('/tracks' + ids[i]).then(function(player){
			outerPlayer = player;

	  		player.play();
	  		

		});
	});

	$("#pause").click(function() {
		SC.stream('/tracks' + ids[i]).then(function(player) {
			outerPlayer.pause();
		});
		
	});

	$("#next").click(function() {
		if (i < ids.length) {
			SC.stream('/tracks' + ids[i]).then(function(player){
	  		player.play();
			});
			i = i + 1;
			console.log(i);

		} else {
			i = 0;
			console.log(i);

		};

	});

		$("#back").click(function() {
		if (i > ids.length) {
			SC.stream('/tracks' + ids[i]).then(function(player){
	  		player.play();
			});
			i = i - 1;
			console.log(i);

		} else {
			i = 0;
			console.log(i);

		};

	});

});