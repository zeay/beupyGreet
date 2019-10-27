console.log("Hello Logic here");

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function genrateWish(rec, sen){
    var messages = ['Diwali is a magical time to celebrate with loved ones. May you get to create special memories with the ones you love, this Diwali. Best wishes!', 'May the mirth and merriment of the magical festival of lights give you endless moments of joy and love.','May the merriment of this wonderful festival of Diwali fill your life with infinite joy. Happy Diwali to you and the ones who matter to you!', 'May the joy and merriment of this amazing festival surround you with all things happy and positive.', 'May the beautiful gleaming lamps of Diwali brighten you life making it a better place to live.', 'May the gleaming diyas of Diwali bless you and your loved ones with positivism.', 'As you perform the Puja rituals of Diwali, I silently pray to Lord Ganesha to shower happiness and prosperity upon you.', 'As you pray to Lord Kuber on the auspicious eve of Diwali, I pray to him to shower wealth on you and make you feel the luckiest.', 'May Goddess Lakshmi enter your house this Diwali evening and fill it with wealth, good luck and prosperity.'];
    var randomValue = Math.floor(Math.random() * Math.floor(messages.length));
    var mainArea = document.getElementById('mainPutter');
    mainArea.innerHTML = "";
    var whatsapplink =encodeURI(window.location.href);
    var template = '<div class="col-xs-12 col-sm-12 col-md-12"><div class="block"><div class="heading wow fadeInUp"><p>'+messages[randomValue]+'</p><br><p>Happy Diwali</p><br><p>To:'+sen+'</p><br><p>From:'+rec+'</p><br><button class="btn btn-share" id="btnGo"><a href="whatsapp://send?text='+whatsapplink+'" data-action="share/whatsapp/share">Whatsapp Share</a></button> </div></div></div>';
    mainArea.innerHTML = template;
}

window.onload = function(){
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var btnGo = document.getElementById('btnGo');
    btnGo.addEventListener('click', function(){
        var sender = from.value;
        var receiver = to.value;
        console.log(receiver, sender);
        var webUrl = window.location.href;
        var newUrl = webUrl+'?to='+receiver+'from='+sender;
        window.location.href = newUrl;
    });
    
    var recepient = getUrlVars()['from'];
    var senderer = getUrlVars()['to'];
    //var getValue = getUrlVars();
    //console.log(getValue);
    if(recepient && senderer){
        console.log(recepient, senderer);
        genrateWish(recepient, senderer);
    }
    
}