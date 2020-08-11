let player;

//오디오 파일 리스트
const audioFiles = [
    './bgm/then.mp3',
    './bgm/dream.mp3',
    './bgm/snowman.mp3',
    './bgm/dontForget.mp3',
    './bgm/Giveheart.mp3',
    './bgm/howareyou.mp3',
    './bgm/livewell.mp3',
    './bgm/may.mp3',
    './bgm/Moon.mp3',
    './bgm/Ourmeet.mp3',
    './bgm/twomen.mp3',
];

//방문할 때마다 랜덤 순서

function shuffle(audiolist){
    let j,x,i;
    for(i=audiolist.length; i; i-=1){
        j = Math.floor(Math.random() * i);
        x = audiolist[i-1];
        audiolist[i-1] = audiolist[j];
        audiolist[j] = x;
    }
}

//현재 재생곡 정보 manually 불러오기
let playinginfo;
const lists = [
    '김필 - 그때 그 아인',
    '한동근&최효인 - 꿈에',
    '정승환 - 눈사람',
    '성시경&권진아 - 잊지말기로 해',
    '아이유 - 마음을 드려요',
    'V.O.S - 잘 지내고 있는지 궁금해',
    'V.O.S - 잘 살고있다',
    '임한별&첸 - 오월의 어느 봄날',
    'V.O.S - 문',
    '폴킴 - 우리 만남이',
    '박재정&규현 - 두 남자'
];

function preloadAudio(file_url){
    const audio = new Audio();
    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.src = file_url;
}

let loaded = 0;
function loadedAudio(){
    loaded += 1;
    if(loaded === audioFiles.length){
        init();
    }
}

function play(index){
    player.src = audioFiles[index];
    getSRC();
    setTimeout(function(){
        player.play();
    }, 0);
}

let i = 0;
function init(){
    play(i);
    player.onpause = function(){
        //커스텀플레이 조작
    }
    player.onended = function(){
        next();
    };

    player.onplay = function(){
        if(!player.seeking){
            
        }
    };
}

function next(){
    i+=1;
    if(i >= audioFiles.length){
        i = 0;
    }
    play(i);
}

function getSRC(){
    console.log(player.src);
    switch (player.src){
        case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-3/bgm/then.mp3':
            playinginfo = lists[0]; //제목 - 아티스트
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
        case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-3/bgm/dream.mp3':
            playinginfo = lists[1]; //제목 - 아티스트
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
        case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-3/bgm/snowman.mp3':
            playinginfo = lists[2]; //제목 - 아티스트
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
        case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-3/bgm/dontForget.mp3':
            playinginfo = lists[3]; //제목 - 아티스트
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
        case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-3/bgm/Giveheart.mp3':
            playinginfo = lists[4]; //제목 - 아티스트
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
        case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-3/bgm/howareyou.mp3':
            playinginfo = lists[5]; //제목 - 아티스트
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
        case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-3/bgm/livewell.mp3':
            playinginfo = lists[6]; //제목 - 아티스트
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
        case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-3/bgm/may.mp3':
            playinginfo = lists[7]; //제목 - 아티스트
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
        case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-3/bgm/Moon.mp3':
            playinginfo = lists[8]; //제목 - 아티스트
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
        case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-3/bgm/Ourmeet.mp3':
            playinginfo = lists[9]; //제목 - 아티스트
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
        case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-3/bgm/twomen.mp3':
            playinginfo = lists[10]; //제목 - 아티스트
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
        default:
            playinginfo = '알 수 없음';
            document.getElementById('playinfo').innerHTML = playinginfo;
            break;
    }
}

function loop(){
    shuffle(audioFiles);
    player = document.getElementById('player');
    for (let i in audioFiles){
        preloadAudio(audioFiles[i]);
    }
}