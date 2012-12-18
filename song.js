/*
	Call song.play(). Implement song.displaySong() to show it on a view of your choice. 
	I also put a modal object finalSong if you wish to do template binding to your view.

	Sample output is 

	On the first day of Christmas, 
	my true love gave to me,
	a Patridge in a pear tree.
	On the second day of Christmas, 
	my true love gave to me,
	2 Turtle Dowes,
	and a Patridge in a pear tree.
	On the third day of Christmas, 
	my true love gave to me,
	3 french hens,
	2 Turtle Dowes,
	and a Patridge in a pear tree.
	On the fourth day of Christmas, 
	my true love gave to me,
	4 french hens,
	3 french hens,
	2 Turtle Dowes,
	and a Patridge in a pear tree.
	On the fifth day of Christmas, 
	my true love gave to me,
	5 calling birds,
	4 french hens,
	3 french hens,
	2 Turtle Dowes,
	and a Patridge in a pear tree.
	On the sixth day of Christmas, 
	my true love gave to me,
	6 golden rings,
	5 calling birds,
	4 french hens,
	3 french hens,
	2 Turtle Dowes,
	and a Patridge in a pear tree.
	On the seventh day of Christmas, 
	my true love gave to me,
	7 geese-a-laying,
	6 golden rings,
	5 calling birds,
	4 french hens,
	3 french hens,
	2 Turtle Dowes,
	and a Patridge in a pear tree.
	On the eighth day of Christmas, 
	my true love gave to me,
	8 swans-a-swimming,
	7 geese-a-laying,
	6 golden rings,
	5 calling birds,
	4 french hens,
	3 french hens,
	2 Turtle Dowes,
	and a Patridge in a pear tree.
	On the ninth day of Christmas, 
	my true love gave to me,
	9 maids-a-milking,
	8 swans-a-swimming,
	7 geese-a-laying,
	6 golden rings,
	5 calling birds,
	4 french hens,
	3 french hens,
	2 Turtle Dowes,
	and a Patridge in a pear tree.
	On the tenth day of Christmas, 
	my true love gave to me,
	10 ladies dancing,
	9 maids-a-milking,
	8 swans-a-swimming,
	7 geese-a-laying,
	6 golden rings,
	5 calling birds,
	4 french hens,
	3 french hens,
	2 Turtle Dowes,
	and a Patridge in a pear tree.
	On the eleventh day of Christmas, 
	my true love gave to me,
	11 lords-a-leaping,
	10 ladies dancing,
	9 maids-a-milking,
	8 swans-a-swimming,
	7 geese-a-laying,
	6 golden rings,
	5 calling birds,
	4 french hens,
	3 french hens,
	2 Turtle Dowes,
	and a Patridge in a pear tree.
	On the twelfth day of Christmas, 
	my true love gave to me,
	12 pipers piping,
	11 lords-a-leaping,
	10 ladies dancing,
	9 maids-a-milking,
	8 swans-a-swimming,
	7 geese-a-laying,
	6 golden rings,
	5 calling birds,
	4 french hens,
	3 french hens,
	2 Turtle Dowes,
	and a Patridge in a pear tree.
*/
var song = (function () {
	var gifts = ['Patridge in a pear tree', 'Turtle Dowes', 'french hens', 'french hens', 'calling birds', 'golden rings', 
		'geese-a-laying', 'swans-a-swimming', 'maids-a-milking', 'ladies dancing', 'lords-a-leaping', 'pipers piping', 'drummers drumming'], 
		dayIns = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'], 
		repeatLyrics = 'On the %s day of Christmas, <br/> my true love gave to me,';

	return {
		finalSong : '', 
		displaySong : function (notes) { 
			// TODO - do what you want to .. here.
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
