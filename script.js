function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; 
            displayCatHeart(); 
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; 
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    document.getElementById('question').innerText = 'Yeayyy, i know u will be my valentine hehe ❤️'; 
    document.getElementById('options').style.display = 'none'; 
    changeCatImage('2.gif'); 
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); 
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000); 
}

function displayCat() {
    changeCatImage('1.gif');
}

function changeCatImage(imageSrc) {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    var catImage = new Image();
    catImage.src = imageSrc;
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
        displayMenu(); 
    };
}

function displayMenu() {
    var menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';
    menuContainer.style.textAlign = 'center';
    menuContainer.style.marginTop = '10px';
    menuContainer.style.display = 'flex';
    menuContainer.style.flexDirection = 'column';
    menuContainer.style.alignItems = 'center';
    menuContainer.style.gap = '10px';

    var header = document.createElement('h1');
    header.innerText='Happy Valentine Day Koyyy! ❤️';
    menuContainer.appendChild(header);
    
    var paragraph = document.createElement('h4');
    paragraph.innerText = "I know I'm not perfect and may not be able to do much for this Valentine's, but everything here comes from my heart, just for you. ❤️";
    menuContainer.appendChild(paragraph);
    
    var button1 = document.createElement('button');
    button1.innerText = 'Go to Minigame Page';
    button1.onclick = function() { window.location.href = 'game.html'; };
    
    var button2 = document.createElement('button');
    button2.innerText = 'Go to Story Page';
    button2.onclick = function() { window.location.href = 'story.html'; };
    
    var button3 = document.createElement('button');
    button3.innerText = 'Go to Last Page';
    button3.onclick = function() { window.location.href = 'lastpage.html'; };
    
    menuContainer.appendChild(button1);
    menuContainer.appendChild(button2);
    menuContainer.appendChild(button3);
    
    document.getElementById('image-container').appendChild(menuContainer);
    playBackgroundMusic();
}

function playBackgroundMusic() {
    var audio = new Audio('./cloudkoh-flower.mp3');
    audio.loop = true;
    audio.play();
}

displayCat();
