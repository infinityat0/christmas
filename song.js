var song = (function () {
	var gifts = ['Patridge in a pear tree', 'Turtle Dowes', 'french hens', 'french hens', 'calling birds', 'golden rings', 
		'geese-a-laying', 'swans-a-swimming', 'maids-a-milking', 'ladies dancing', 'lords-a-leaping', 'pipers piping', 'drummers drumming'], 
		dayIns = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'], 
		days = 12, repeatLyrics = 'On the %s day of Christmas, <br/> my true love gave to me,';

	return {
		finalSong : '', 
		displaySong : function (notes) { 
			document.getElementById('main-section').innerHTML = notes.join('<br/>');
		},
		play : function () {
			var i = 0, notes = [], j ; 
			while (i < 12) {
				notes.push (repeatLyrics.replace('%s', dayIns[i])) ;
				j = i;
				while (j > -1) {
					notes.push (( j == 0 ? (i == 0 ? '' : 'and ') + 'a' : (j + 1) ) + ' ' + gifts[j] + ( j == 0 ? '.' : ','));
					j = j - 1 ;
				}
				i = i + 1;
			}
			this.displaySong (notes);
		}
	};
}());
