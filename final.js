function goMove(){
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 0.01);
  function frame(){
    if(pos === 150){
      clearInterval(id);
    }else{
      pos++;
      animator.style.left = pos + 'px';
    }
  }
}

var nomura = {
  1: 30,
  2: 20,
  3 : -50,
}

var ozawa = {
  1: 40,
  2: 20,
  3: -40,
}

var yoshii = {
  1: 35,
  2: 30,
  3: -20,
}

var riou = {
  1: -20,
  2 : -50,
  3: 100,
}

var nomuraWaza = ["ひっかく", "体当たり", "留年"];
var ozawaWaza =  ["大外", "体当たり", "膝の靭帯を損傷"];
var yoshiiWaza =  ["背負投", "ひっかく", "唐辛子を食したことによる損傷"];
var riouWaza =  ["遅刻をする", "腰をいためる", "本気をだす"];

function tekiErabu(){
  alert("なにかが襲ってきた");

  var x = Math.random();
  if (x<1/4){
    var kougeki = nomura;
    var teki = "野村";
    var pic = "nomura.jpg";
  }else if(x<2/4){
    kougeki = ozawa;
    teki="小沢";
    pic = "ozawa.jpg";
  }else if(x<3/4){
    kougeki = yoshii;
    teki="吉井";
    pic = "yoshii.jpg";
  }else{
    kougeki = riou;
    teki = "りおう";
    pic = "riou.jpg";
  }

  var serifu = "<div id ='container'><div id = 'animator'><img src='"+pic+"' width=600 height=600></div></div> <p class='serifu'>野生の"+teki+"が現れた<p>";
  document.getElementById('ok').innerHTML = serifu;

}
