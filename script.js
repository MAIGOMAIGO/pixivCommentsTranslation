main();
function main(){
    const comCheckTime = setInterval(comLoaded,1000);
    function comLoaded(){
        const com = document.getElementsByClassName("sc-eyxzap-0 iFFcXi");
        if(com != null){
            clearInterval(comCheckTime);
            let lower = 1;
            lower = addTranceBtn(lower,com);
            waitClickBtn(lower);
        }
    }
}

function addTranceBtn(lower,com){
    let l = com.length;
    for(let i=lower;i<l;i++){
        const comRes = com[i].parentElement.parentElement.children[2];
        const space = document.createElement("span");
        space.appendChild(document.createTextNode("　"));
        space.setAttribute("class","space");
        comRes.appendChild(space);

        const translate = document.createElement("span");
        translate.appendChild(document.createTextNode("翻訳"));
        translate.setAttribute("class","trance");
        translate.style.cursor = 'pointer';

        translate.onclick = function(){
            const comChild = com[i].children[0];
            if(translate.innerText == "翻訳"){
                const comText = comChild.innerText;
                if(!comChild.attributes['data-defaultValue']){
                    comChild.setAttribute('data-defaultValue',comText);
                }
                xhr = new XMLHttpRequest();
                xhr.onload = function (e) {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            translate.innerText = "戻す";
                            comChild.innerText = xhr.responseText;
                        }
                    }
                };
                xhr.open('POST', 'https://script.google.com/macros/s/AKfycbxI_8pfYGuT2xhBhmDILmcpA4phAFggneNloxkuPlrVOdbJcXQuWt02Rdn0UCE0UTo5/exec', true);
                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                const language = (window.navigator.languages && window.navigator.languages[0]) ||
                window.navigator.language ||
                window.navigator.userLanguage ||
                window.navigator.browserLanguage;
                const request = "text=" + comText + "&language=" + language;
                xhr.send(comText);
            }else{
                if(comChild.attributes['data-defaultValue']){
                    comChild.innerText = comChild.getAttribute('data-defaultValue');
                }
                translate.innerText = "翻訳";
            }
        };

        comRes.appendChild(translate);
    }
    return l;
}

function waitClickBtn(lower){
    var btn = document.getElementsByClassName('_1Hom0qN');
    if(btn.length > 0){
        btn[0].addEventListener("click", function(){
            const btnClickCheckTime = setInterval(btnClick,1000);
            function btnClick(){
                const com = document.getElementsByClassName("sc-eyxzap-0 iFFcXi");
                if(com.length > lower){
                    clearInterval(btnClickCheckTime);
                    lower = addTranceBtn(lower,com);
                    waitClickBtn(lower);
                }
            }
        });
    }
}