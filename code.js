function _(query){
	return document.querySelector(query);
}
function _all(query){
	return document.querySelectorAll(query);
}
let songList = [
	{
		thumbnail:"https://iili.io/2SbsMQ.jpg",
		audio:"hucummarsi.mp3",
		songname:"Hucum Marsi",
		artistname:"Fatih Sultan Mehmet",
	},
	{
		thumbnail:"https://iili.io/2SbsMQ.jpg",
		audio:"izmirmarsi.mp3",
		songname:"Izmir Marsi",
		artistname:"Haluk Levent",
	}
];

let currentSongIndex = 0;

let player = _(".player"),
	toggleSongList = _(".player .toggle-list");

let main = {
	audio:_(".player .main audio"),
	thumbnail:_(".player .main img"),
	seekbar:_(".player .main input"),
	songname:_(".player .main .details h2"),
	artistname:_(".player .main .details p"),
	prevControl:_(".player .main .controls .prev-control"),
	playPauseControl:_(".player .main .controls .play-pause-control"),
	nextControl:_(".player .main .controls .next-control")
}

toggleSongList.addEventListener("click", function(){
	toggleSongList.classList.toggle("active");
	player.classList.toggle("activeSongList");
});

_(".player .player-list .list").innerHTML = (songList.map(function(song,songIndex){
	return `
		<div class="item" songIndex="${songIndex}">
			<div class="thumbnail">
				<img src="https://iili.io/2SbsMQ.jpg"${song.thumbnail}">
			</div>
			<div class="details">
				<h2>${song.songname}</h2>
				<p>${song.artistname}</p>
			</div>
		</div>
	`;
}).join(""));

let songListItems = _all(".player .player-list .list .item");
for(let i=0;i<songListItems.length;i++){
	songListItems[i].addEventListener("click",function(){
		currentSongIndex = parseInt(songListItems[i].getAttribute("songIndex"));
		loadSong(currentSongIndex);
		player.classList.remove("activeSongList");
	});
}

function loadSong(songIndex){
	let song = songList[songIndex];
	main.thumbnail.setAttribute("src","https://iili.io/2SbsMQ.jpg"+song.thumbnail);	
	main.songname.innerText = song.songname;
	main.artistname.innerText = song.artistname;
	main.audio.setAttribute("src","./images/"+song.audio);
	main.seekbar.setAttribute("value",0);
	main.seekbar.setAttribute("min",0);
	main.seekbar.setAttribute("max",0);
	main.audio.addEventListener("canplay",function(){
		main.audio.play();
		if(!main.audio.paused){
			main.playPauseControl.classList.remove("paused");
		}
		main.seekbar.setAttribute("max",parseInt(main.audio.duration));
		main.audio.onended = function(){
			main.nextControl.click();
		}
	})
}
setInterval(function(){
	main.seekbar.value = parseInt(main.audio.currentTime);
},1000);

main.prevControl.addEventListener("click",function(){
	currentSongIndex--;
	if(currentSongIndex < 0){
		currentSongIndex = songList.length + currentSongIndex;
	}
	loadSong(currentSongIndex);
});
main.nextControl.addEventListener("click",function(){
	currentSongIndex = (currentSongIndex+1) % songList.length;
	loadSong(currentSongIndex);
});
main.playPauseControl.addEventListener("click",function(){
	if(main.audio.paused){
		main.playPauseControl.classList.remove("paused");
		main.audio.play();
	} else {
		main.playPauseControl.classList.add("paused");
		main.audio.pause();
	}
});
main.seekbar.addEventListener("change",function(){
	main.audio.currentTime = main.seekbar.value;
});
loadSong(currentSongIndex);

	window.addEventListener("scroll", function(){
		var header = document.querySelector("header");
		header.classList.toggle("sticky", window.scrollY > 0);
	})

$(function(){

		$('.btn').on('mouseover', function(){
			$('.btn').css({backgroundColor: 'orange', border: 'hidden'});
		});
		$('.btn').on('mouseout', function(){
			$('.btn').css({background: 'none', border: '2px solid orange'});
		});
		$('#btn2').on('mouseover', function(){
			$('#btn2').css({backgroundColor: 'orange', border: 'hidden'});
		});
		$('#btn2').on('mouseout', function(){
			$('#btn2').css({background: 'none', border: '2px solid orange'});
		});

	});
$(function(){

		$('#galeryd').on('mouseenter', function(){
			$('#galerydd').delay(250).slideDown(350);
		});

		$('header').on('mouseleave', function(){
			$('#galerydd').delay(250).slideUp(350);
		});

		$('#cusd').on('mouseenter', function(){
			$('#cusdd').delay(250).slideDown(350);
		});

		$('header').on('mouseleave', function(){
			$('#cusdd').delay(250).slideUp(350);
		});
	});
