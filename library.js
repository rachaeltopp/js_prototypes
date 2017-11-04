function eachLibrary(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function eachPlaylist(name) {
  this.name = name;
  this.tracks = [];
}

function eachTrack(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

eachLibrary.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

eachPlaylist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

eachPlaylist.prototype.overallRating = function() {
  let sumTracks = this.tracks.length;
  let sumRating = this.tracks.reduce(function(total, amount) {
    return total + amount.rating;
  },0)
  console.log('The average rating is ', sumRating/sumTracks);
}

eachPlaylist.prototype.totalDuration = function() {
  let sumLength = this.tracks.reduce(function(total, amount) {
    return total + amount.length;
  },0)
  console.log('The total duration is ', sumLength);
}

//create a new library
let rachaelsLibrary = new eachLibrary('Cool Music', 'Rachael');

//create a couple playlists
let rapPlaylist = new eachPlaylist('Rap Playlist');
let alternativePlaylist = new eachPlaylist('Alternative Playlist');

// eachTrack takes in 'name', rating out of 5, and length in minutes
let track1 = new eachTrack('8mile', 4, 3);
let track2 = new eachTrack('Spacebound', 5, 4);
let track3 = new eachTrack('Cool Kids', 5, 3);
let track4 = new eachTrack('Silver and Cold', 4, 4);

//add the playlists to the new library
rachaelsLibrary.addPlaylist(rapPlaylist);
rachaelsLibrary.addPlaylist(alternativePlaylist);

//add tracks to their respective playlists
rapPlaylist.addTrack(track1);
rapPlaylist.addTrack(track2);
alternativePlaylist.addTrack(track3);
alternativePlaylist.addTrack(track4);

console.log("rachael's library: ", rachaelsLibrary);
console.log("rap playlist ", rapPlaylist);
console.log("alternative playlist ", alternativePlaylist);

rapPlaylist.overallRating();
rapPlaylist.totalDuration();
alternativePlaylist.overallRating();
alternativePlaylist.totalDuration();
