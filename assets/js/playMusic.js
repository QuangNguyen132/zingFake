     
        const avtFooter = $('.footer-infor-avt-img');
        const avtContainer = $('.container_player-music-avt-img');
        const sing = $('.footer-infor-name-sing span');
        const singer = $('.footer-infor-name-singer span');
        const audio = $('.audio');
        const playBtn = $('.icon-play');
        const pauseBtn = $('.icon-pause');
        const player = $('.player');
        const playlist = $('.container_player-music-list');
        const nextBtn = $('.fa-step-forward');
        const backBtn = $('.fa-step-backward');
        const lengthSong = $('.timeOfSong');
        const timeUpdate = $('.timeUpdate');
        const progress = $('.footer-control-progress-time');
        const progressVolumn = $('.progress-volumn')
        const btnReplay = $('.fa-undo-alt');
        const btnRandom = $('.fa-random');
        const btnVolumn = $('.btn-volume');
        const btnMute = $('.progress-mute')
        const muting = btnVolumn.classList.contains('fa-volume-mute');
        

        const app = {
            currentIndex: 0,
            isPlaying: false,
            isReplay: false,
            isRandom: false,
            isMute: false,
            songs: [
                {

                    name: 'Nevada',
                    singer: 'Victone',
                    img: './assets/avtSing/nevada.jpg',
                    path: './assets/playlist/nevada.mp3',
                    time: '3:28'
                },                
                {

                    name: 'Remember Our Summer',
                    singer: 'FrogMonster',
                    img: './assets/avtSing/rememberoursummer.webp',
                    path: './assets/playlist/rememberoursummer.mp3',
                    time: '2:42'

                },
                {

                    name: 'Pikasonic',
                    singer: 'Asuka',
                    img: './assets/avtSing/pikasonic.webp',
                    path: './assets/playlist/pikasonic.mp3',
                    time: '3:57'

                },
                {
                    name: 'Unstoppable',
                    singer: 'Mia',
                    img: './assets/avtSing/unstoppable.jpg',
                    path: './assets/playlist/unstoppable.mp3',
                    time: '3:27'
                },
                {
                    name: 'Way back',
                    singer: 'Victone',
                    img: './assets/avtSing/wayback.webp',
                    path: './assets/playlist/wayback.mp3',
                    time: '3:28'
                },
                {
                    name: 'Nothing Stopping Me',
                    singer: 'Victone',
                    img: './assets/avtSing/NothingStoppingMe.jpg',
                    path: './assets/playlist/NothingStoppingMe.mp3',
                    time: '3:44'
                },
                {
                    name: 'Walk Thru Fire',
                    singer: 'Victone',
                    img: './assets/avtSing/WalkThruFire.webp',
                    path: './assets/playlist/WalkThruFire.mp3',
                    time: '3:14'
                },
                {
                    name: 'Dreams',
                    singer: 'Lost Sky',
                    img: './assets/avtSing/dreams.jpg',
                    path: './assets/playlist/Dreams.mp3',
                    time: '3:35'
                },
                {
                    name: 'Where we started',
                    singer: 'Lost Sky',
                    img: './assets/avtSing/wherewestarted.webp',
                    path: './assets/playlist/WhereWeStarted.mp3',
                    time: '3:42'
                },
                {
                    name: 'Senbonzakura',
                    singer: 'Lindsey Stirling',
                    img: './assets/avtSing/senbonzakura.jpg',
                    path: './assets/playlist/Senbonzakura.mp3',
                    time: '3:09'
                },
                {
                    name: 'Symphony',
                    singer: 'Lindsey Stirling',
                    img: './assets/avtSing/symphony.jpg',
                    path: './assets/playlist/Symphony.mp3',
                    time: '3:32'
                },
            ],

            render: function() {
                var htmls = this.songs.map((song, index) => {
                    return `
                    <div class="container_player-music-item song ${index === this.currentIndex ? "activeSong" : ""}" data-index="${index}">
                        <div class="container_player-music-item-miniAvt">
                            <img src="${song.img}" alt="" class="container_player-music-item-img">
                            <div class="container_player-music-item-play">
                                <div class="container_player-music-item-img playMusic">
                                    <i class="fas fa-play playMusic-icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div class="container_player-music-item-name">
                            <div class="container_player-music-item-name-song">
                                <span>${song.name}</span>
                            </div>
                            <div class="container_player-music-item-name-singer">
                                <span>${song.singer}</span>
                            </div>
                        </div>
                        <div class="container_player-music-item-time">
                            <span>${song.time}</span>
                        </div>
                        <div class="container_player-music-item-nav">
                            <i class="fas fa-microphone container_player-music-item-nav-icon"></i>
                            <i class="fas fa-heart container_player-music-item-nav-icon"></i>
                            <i class="fas fa-ellipsis-h container_player-music-item-nav-icon"></i>
                        </div>
                    </div>
                    `
                })
                $('.container_player-music-list').innerHTML = htmls.join('');
            },
            defineProperties: function() {
                Object.defineProperty(this, 'currentSong', {
                    get: function() {
                        return this.songs[this.currentIndex];
                    }
                })
            },

            handleEvents: function() {
                //X??? l?? khi click Player
                playBtn.onclick = function() {
                    if(!app.isPlaying) {
                        app.isPlaying = true;
                        audio.play();                                                    
                    }                    
                };
                pauseBtn.onclick = function() {
                    if(app.isPlaying) {
                        app.isPlaying = false;
                        audio.pause();                                           
                    }                    
                };

                //X??? l?? avt footer quay
                var avtFooterAnimate = avtFooter.animate({ transform: 'rotate(360deg)' }, {
                            duration: 10000,
                            iterations: Infinity,
                });  

                //X??? l?? t??? ?????ng quay avt khi load trang
                avtFooterAnimate.pause();
                
                //X??? l?? quay avt khi ph??t
                audio.onplay = function() {
                    player.classList.add('playing');
                    app.isPlaying = true;
                    avtFooterAnimate.play();      
                }
                audio.onpause = function() {
                    app.isplaying = false;
                    player.classList.remove('playing');
                    avtFooterAnimate.pause();
                }

                //X??? l?? t??? ?????ng next b??i ti???p theo khi h???t
                audio.onended = function() {                    
                    app.currentIndex++;
                    if(app.currentIndex >= app.songs.length) {
                        app.currentIndex = 0;
                    }                        
                    app.loadCurrentSong();
                    app.render();
                    audio.play(); 
                }

                //X??? l?? tr??nh ch??? ph??t 1 b??i h??t
                btnReplay.onclick = function() {                   
                    if(app.isReplay) {
                        app.isReplay = false;
                        btnReplay.classList.remove("btn-active");
                        audio.onended = function() {                    
                            nextPlaylist();
                        }
                    }   
                    else {
                        app.isReplay = true;
                        btnReplay.classList.add("btn-active")
                        audio.onended = function() {
                            replayPlaylist();
                        }   
                    }                   
                }

                //X??? l?? tr??nh random b??i h??t
                btnRandom.onclick = function() {                   
                    if(app.isRandom) {
                        app.isRandom = false;
                        btnRandom.classList.remove("btn-active");
                        audio.onended = function() {                    
                            nextPlaylist();
                        }
                    }   
                    else {
                        app.isRandom = true;
                        btnRandom.classList.add("btn-active")
                        audio.onended = function() {
                            randomPlaylist();
                        }   
                    }                   
                }

                //X??? l?? event next b??i h??t
                nextBtn.onclick = function() {     
                    if(app.isRandom) {
                        randomPlaylist(); 
                    }     
                    else {
                        if (app.isReplay) {
                            replayPlaylist();
                        }
                        else {
                            nextPlaylist();  
                        }
                    }        
                }               

                //X??? l?? event back b??i h??t
                backBtn.onclick = function() {  
                    if(app.isRandom) {
                        randomPlaylist();                         
                    }     
                    else {
                        if(app.isReplay) {
                            replayPlaylist();
                        }
                        else {
                            backPlaylist();  
                        }
                    }          
                } 

                //Random b??i h??t 
                function randomPlaylist() {
                    app.currentIndex = Math.floor(Math.random()*app.songs.length);
                    if(app.currentIndex >= app.songs.length) {
                        app.currentIndex = 0;
                    };
                    app.loadCurrentSong();
                    app.render();
                    audio.play();
                };

                //Replay b??i h??t
                function replayPlaylist() {
                    app.loadCurrentSong();
                    app.render();
                    audio.play();
                }

                //Next b??i h??t 
                function nextPlaylist() {
                    app.currentIndex++;
                    if(app.currentIndex >= app.songs.length) {
                        app.currentIndex = 0;
                    }                        
                    app.loadCurrentSong();
                    app.render();
                    audio.play(); 
                }

                //Back b??i h??t 
                function backPlaylist() {
                    app.currentIndex--;                    
                    if(app.currentIndex < 0) {
                        app.currentIndex = app.songs.length - 1;
                    }                        
                    app.loadCurrentSong();                        
                    app.render();
                    audio.play(); 
                }                

                //X??? l?? s??? ki???n tua b??i h??t
                progress.oninput = function (e) {
                    audio.pause();
                    setTimeout(() => {
                    audio.play();
                    }, 1);
                    //L???y ra th???i gian sau khi click tua
                    const seekTime = e.target.value * (audio.duration / 100);
                    audio.currentTime = seekTime;
                };

                var lastValueVolume = 1;
                //T??ng gi???m ??m l?????ng
                progressVolumn.oninput = function (e) {
                    if(progressVolumn.value == 0){
                        btnVolumn.classList.add("fa-volume-mute");
                        btnVolumn.classList.remove("fa-volume-up");   
                        audio.volume = 0;
                    }
                    else {
                        btnVolumn.classList.remove("fa-volume-mute");
                        btnVolumn.classList.add("fa-volume-up"); 
                        audio.pause();
                        setTimeout(() => {
                        audio.play();
                        }, 100);
                        const seekVolumn = e.target.value / 100;
                        audio.volume = seekVolumn;
                        lastValueVolume = audio.volume;
                    }
                }

                //Mute ho???c unmute 
                btnVolumn.onclick = function (e) {
                    const volumeCurrent = progressVolumn.value/100;                    
                    if(app.isMute) {
                        app.isMute = false;
                        btnVolumn.classList.remove("fa-volume-mute");
                        btnVolumn.classList.add("fa-volume-up");    
                        audio.volume = lastValueVolume;   
                        progressVolumn.value = lastValueVolume*100;       
                        //progressVolumn.classList.remove("progress-mute-none");
                        //btnMute.classList.add("progress-mute-none");
                    }                     
                    else {
                        app.isMute = true;
                        btnVolumn.classList.add("fa-volume-mute");
                        btnVolumn.classList.remove("fa-volume-up");    
                        audio.volume = 0;       
                        progressVolumn.value = 0;            
                        //progressVolumn.classList.add("progress-mute-none");
                        //btnMute.classList.remove("progress-mute-none");
                    }        
                       
                }

                //X??? l?? event ch???n b??i h??t
                playlist.onclick = function(e) {
                    const songNode = e.target.closest('.song:not(.activeSong)');
                    if (songNode || e.target.closest('.container_player-music-item-nav')) {
                        if (songNode) {
                            app.currentIndex = Number(songNode.getAttribute('data-index'));
                            app.loadCurrentSong();
                            app.render();
                            audio.play();                            
                        }
                    }
                }                    
                
                //Update th???i gian hi???n t???i c???a b??i h??t
                audio.ontimeupdate = function() {             
                    if (audio.duration) {
                        const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
                        progress.value = progressPercent;
                        lengthSong.textContent = app.convertTime(audio.duration);                       
                        timeUpdate.textContent = app.convertTime(audio.currentTime);
                    }
                }
            },

            convertTime: function (time) {
                var mins = Math.floor(time / 60);
                var secs = Math.floor(time % 60);
                if (mins < 10) {
                    mins = '0' + mins;
                }
                if (secs < 10) {
                    secs = '0' + secs;
                }
                return `${mins}:${secs}`;
            },

            loadCurrentSong: function() {
                avtContainer.src = this.currentSong.img;
                avtFooter.src = this.currentSong.img;
                sing.textContent = this.currentSong.name;
                singer.textContent = this.currentSong.singer;
                audio.src = this.currentSong.path;                                           
            },            

            start: function() {
                //?????nh ngh??a c??c thu???c t??nh cho Object
                this.defineProperties();

                //T???i th??ng tin b??i h??t ?????u ti??n v??o UI khi ch???y ???ng d???ng
                this.loadCurrentSong();
                //Render l???i playlist
                this.render();
                
                //L???ng nghe, x??? l?? c??c s??? ki???n
                this.handleEvents();
            }
        };

        app.start();   