var $result = $('.main');
var $submit = $('#submit');
var $maker = $('.maker');

$submit.click(function(){
    location.reload(true);
});
//-----BUTTON FUNCTIONS-----//
function resultMNT(){
    let url = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultCITS(){
    let url = 'https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultGOTF(){
    let url = 'https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultA(){
    let url = 'https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultKDS(){
    let url = 'https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultOY(){
    let url = 'https://ghibliapi.herokuapp.com/films/4e236f34-b981-41c3-8c65-f8c9000b94e7';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultPR(){
    let url = 'https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultWOTH(){
    let url = 'https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultPM(){
    let url = 'https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultSA(){
    let url = 'https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultTCR(){
    let url = 'https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultHMC(){
    let url = 'https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultTFE(){
    let url = 'https://ghibliapi.herokuapp.com/films/112c1e67-726f-40b1-ac17-6974127bb9b9';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultP(){
    let url = 'https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultPP(){
    let url = 'https://ghibliapi.herokuapp.com/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultMNTY(){
    let url = 'https://ghibliapi.herokuapp.com/films/45204234-adfd-45cb-a505-a8e7a676b114';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultTRT(){
    let url = 'https://ghibliapi.herokuapp.com/films/d868e6ec-c44a-405b-8fa6-f7f0f8cfb500';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultFUOPH(){
    let url = 'https://ghibliapi.herokuapp.com/films/45db04e4-304a-4933-9823-33f389e8d74d';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultTTOTPK(){
    let url = 'https://ghibliapi.herokuapp.com/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultWMWT(){
    let url = 'https://ghibliapi.herokuapp.com/films/5fdfb320-2a02-49a7-94ff-5ca418cae602';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultEATW(){
    let url = 'https://ghibliapi.herokuapp.com/films/790e0028-a31c-4626-a694-86b7a8cada40';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
function resultTWR(){
    let url = 'https://ghibliapi.herokuapp.com/films/67405111-37a5-438f-81cc-4666af60c800';
    $.get(url, function(data){
        $result.empty();
        $result.show();
        ghibliMovie(data);
    });
}
//create tags for incoming information
function ghibliMovie(data){
  let $span = $('<span class="id"></span');
  let $h1Title = $('<h1 class="title"></h1>');
  let $leftDiv = $('<div class="left-div"></div>');
  let $rightDiv = $('<div class="right-div"></div>');
  let $h3JapanTitle = $('<h3 class="japan-title"></h3>');
  let $h3Reomanised = $('<h3 class="reomanised"></h3>');
  let $imgTitle = $('<img class="title-image" src=""></img>');
  let $imgGrow = $('<img class="grow-image" src=""></img>');
  let $divSummary = $('<div class="summary"></div>');
  let $em = $('<em class="discription"></em>');
  let $pDirector = $('<p class="director"></p>');
  let $pProducer = $('<p class="producer"></p>');
  let $pReleaseDate = $('<p class="release-date"></p>');
  let $pRunTime = $('<p class="run-time"></p>');
  let $pScore = $('<p class="score"></p>');
  $h1Title.text(data.title);
  $h3JapanTitle.text("Original Title: " + data.original_title);
  $h3Reomanised.text("Original Title Romanised: " + data.original_title_romanised);
  $imgTitle.attr('src', data.image);
  $imgGrow.attr('src', data.movie_banner);
  $divSummary.text('Summary: ');
  $em.text(data.description);
  $pDirector.text("Director: " + data.director);
  $pProducer.text("Producer: " + data.producer);
  $pReleaseDate.text("Release Date: " + data.release_date);
  $pRunTime.text("Run Time: " + data.running_time + " mins");
  $pScore.text("Rotten Tomato Score: " + data.rt_score +"%");
  $span.append($h1Title);
  $leftDiv.append($h3JapanTitle);
  $leftDiv.append($h3Reomanised);
  $leftDiv.append($divSummary);
  $divSummary.append($em);
  $leftDiv.append($pDirector);
  $leftDiv.append($pProducer);
  $leftDiv.append($pReleaseDate);
  $leftDiv.append($pRunTime);
  $leftDiv.append($pScore);
  $rightDiv.append($imgTitle);
  $span.append($leftDiv);
  $span.append($rightDiv);
  $result.append($span); 
};
//----HOME PAGE----//
var $divMainPage = $('<div class="main-page-div"></div>');
var $btnCITS = $('<button class="CITS">Castle in the Sky</button>');
var $btnGOTF = $('<button class="GOTF">Grave of the Fireflies</button>');
var $btnMNT = $('<button class="MNT">My Neighbor Totoro</button>');
var $btnKDS = $('<button class="KDS">Kikis Delivery Service</button>');
var $btnOY = $('<button class="OY">Only Yesterday</button>');
var $btnWOTH = $('<button class="WOTH">Whisper of the Heart</button>');
var $btnPM = $('<button class="PM">Princess Mononoke</button>');
var $btnSA = $('<button class="SA">Spirit Away</button>');
var $btnTCR = $('<button class="TCR">The Cat Returns</button>');
var $btnP = $('<button class="P">Ponyo</button>');
var $btnHMC = $('<button class="HMC">Howls Moving Castle</button>');
var $btnTFE = $('<button class="TFE">Tales From Earthsea</button>');
var $btnA = $('<button class="A">Arrietty</button>');
var $btnTWR = $('<button class="TWR">The Wind Rises</button>');
var $btnPR = $('<button class="PR">Porco Rosso</button>');
var $btnPP = $('<button class="PP">Pom Poko</button>');
var $btnMNTY = $('<button class="MNTY">My Neighbors the Yamadas</button>');
var $btnTRT = $('<button class="TRT">The Red Turtle</button>');
var $btnFUOPH = $('<button class="FUOPH">From Up on Poppy Hill</button>');
var $btnTTOTPK = $('<button class="TTOTPK">The Tale of the Princess Kaguya</button>');
var $btnWMWT = $('<button class="WMWT">When Marnie Was There</button>');
var $btnEATW = $('<button class="EATW">Earwig and the Witch</button>');
$divMainPage.append($btnSA);
$divMainPage.append($btnPM);
$divMainPage.append($btnKDS);
$divMainPage.append($btnCITS);
$divMainPage.append($btnMNT);
$divMainPage.append($btnGOTF);
$divMainPage.append($btnPR);
$divMainPage.append($btnTWR);
$divMainPage.append($btnA);
$divMainPage.append($btnTFE);
$divMainPage.append($btnHMC);
$divMainPage.append($btnP);
$divMainPage.append($btnTCR);
$divMainPage.append($btnOY);
$divMainPage.append($btnWOTH);
$divMainPage.append($btnPP);
$divMainPage.append($btnMNTY);
$divMainPage.append($btnTRT);
$divMainPage.append($btnFUOPH);
$divMainPage.append($btnTTOTPK);
$divMainPage.append($btnWMWT);
$divMainPage.append($btnEATW);
$result.append($divMainPage);
$btnMNT.click(resultMNT);
$btnGOTF.click(resultGOTF);
$btnCITS.click(resultCITS);
$btnKDS.click(resultKDS);
$btnOY.click(resultOY);
$btnPR.click(resultPR);
$btnWOTH.click(resultWOTH);
$btnPM.click(resultPM);
$btnSA.click(resultSA);
$btnTCR.click(resultTCR);
$btnHMC.click(resultHMC);
$btnTFE.click(resultTFE);
$btnP.click(resultP);
$btnPP.click(resultPP);
$btnMNTY.click(resultMNTY);
$btnTRT.click(resultTRT);
$btnFUOPH.click(resultFUOPH);
$btnTTOTPK.click(resultTTOTPK);
$btnWMWT.click(resultWMWT);
$btnEATW.click(resultEATW);
$btnTWR.click(resultTWR);
$btnA.click(resultA);
        //----BEHIND THE SCENES--//
function behindTheScenesData(){
    $h1Founder = $('<h1 class="founder">Founders of Studio Ghibli</h1>');
    $wholeDivFounder = $('<div class="whole-div-founder"></div>')
    $leftDivFounder = $('<div class="left-div-founder"></div>');
    $centerDivFounder = $('<div class="center-div-founder"></div>');
    $rightDivFounder = $('<div class="right-div-founder"></div>');
    $leftImg = $('<img class="left-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg/800px-Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg"></img>');
    $centerImg = $('<img class="center-img" src="https://m.media-amazon.com/images/M/MV5BNDM5OTc2NjI1MV5BMl5BanBnXkFtZTgwOTI3MjA4MTE@._V1_UX214_CR0,0,214,317_AL_.jpg"></img>');
    $rightImg = $('<img class="right-img" src="https://www.buta-connection.net/images/images_studio/toshio-suzuki.jpg"></img>');
    $leftDivFounder.text("Director: Hayao Miyazaki");
    $centerDivFounder.text("Director: Isao Takahata");
    $rightDivFounder.text("Producer: Suzuki Toshio");
    $leftDivFounder.append($leftImg);
    $centerDivFounder.append($centerImg);
    $rightDivFounder.append($rightImg);
    $wholeDivFounder.append($leftDivFounder);
    $wholeDivFounder.append($centerDivFounder);
    $wholeDivFounder.append($rightDivFounder);
    $result.append($h1Founder);
    $result.append($wholeDivFounder);
}
function clickBehindTheScenes(){
    $result.empty();
    $result.show();
    behindTheScenesData();
}
$maker.click(clickBehindTheScenes);