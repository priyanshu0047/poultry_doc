
var count = Number(localStorage.getItem("count"));
var day = document.getElementById("day");
var bird = document.getElementById("birds");
day.value = count;
var birds = localStorage.getItem("total_chicks");
bird.value = birds

// function total(){
//   // total death
// var td=localStorage.getItem("td");
// var tm=document.getElementById("tm");
// tm.innerText=td;
// // total bag
// var tfb=localStorage.getItem("tfb");
// var tb=document.getElementById("tb");
// tb.innerText=tfb; 

// // total feed cost
// var tfc=localStorage.getItem("tfc");
// var t=document.getElementById("tfc");
// t.innerText=tfc; 

// // total other cost
// var toc=localStorage.getItem("toc");
// var to=document.getElementById("toc");
// to.innerText=toc; 
// }

// total();

var add = document.getElementById("add");
add.addEventListener("click", () => {

  var day1 = document.getElementById("day").value;
  birds = localStorage.getItem("total_chicks");

  var mortality = document.getElementById("mortality").value;
  //
  birds = birds - mortality;
  localStorage.setItem("total_chicks", birds);
  var feed = document.getElementById("feed").value;
  var feed_cost = document.getElementById("feed_rate").value;
  var other_cost = document.getElementById("other").value;


  // console.log(birds)
  if (birds == "" || mortality == "" || mortality == "" || feed == "" || other_cost == "" || feed_cost == "" || other_cost == "") {
  }
  else {
    // add
    // td_temp=td+mortality;
    // tfb_temp=tfb+feed;
    // tfc_temp=tfc+(feed_cost*tfb);
    // console.log(td_temp,tfb_temp)
    //  total();

    //
    
   
    let total_feed_bag= Number(localStorage.getItem("tfb"));
    total_feed_bag=(Number(feed)*feed_cost)+total_feed_bag;
    // console.log(total_feed_bag);
    localStorage.setItem("tfb",total_feed_bag);

    // total_other cost
    let total_other= Number(localStorage.getItem("toc"));
    total_other=total_other+Number(other_cost);
    // console.log(total_other);
    localStorage.setItem("toc",total_other);
    
    //total calculation ---->
    let total_bird_cost = localStorage.getItem("chicks_coast");


    //total costing 
    let totalcost=(total_other+Number(localStorage.getItem("chicks_coast"))+total_feed_bag)/birds;
    // console.log(totalcost);

    var str = `{
      "bird":"${birds}",
      "mortality":"${mortality}",
      "feed":"${feed}",
      "feedcost":${feed_cost},
      "other":${other_cost},
      "total":${totalcost}

    }`
   
    localStorage.setItem(day1, str);
    // creating and adding 
    var tr = document.createElement("tr")
    var th_day = document.createElement("td")
    var th_bird = document.createElement("td")
    var th_mor = document.createElement("td")
    var th_feed = document.createElement("td")
    var th_bag_cost = document.createElement("td")
    var th_other = document.createElement("td")
    var th_total = document.createElement("td")

    th_day.innerText = count;
    count = count + 1;
    var day = document.getElementById("day");
    day.value = count;
    th_bird.innerText = birds;
    th_mor.innerText = mortality;
    th_feed.innerText = feed;
    th_bag_cost.innerText = feed_cost;
    th_other.innerText = other_cost;
    th_total.innerText = totalcost.toFixed(3);
    tr.append(th_day);
    tr.append(th_bird);
    tr.append(th_mor);
    tr.append(th_feed);
    tr.append(th_bag_cost);
    tr.append(th_other);
    tr.append(th_total);
    var tab = document.getElementById("tab");
    tab.append(tr);
    localStorage.setItem("count", count)
  }
  // mortality=0;
  document.getElementById("mortality").value = "";
  document.getElementById("feed").value = "";
  document.getElementById("feed_rate").value = "";
  document.getElementById("other").value = "";

  // 
  var birds = localStorage.getItem("total_chicks");
  bird.value = birds
})

var fun = function () {
  // console.log("hello")
  for (let index = 1; index < count; index = index + 1) {

    // fetching data 

    var result = JSON.parse(localStorage.getItem(`${index}`))
    //  console.log(typeof(result))
    //  creating and adding 
    var tr = document.createElement("tr")
    var th_day = document.createElement("td")
    var th_bird = document.createElement("td")
    var th_mor = document.createElement("td")
    var th_feed = document.createElement("td")
    var th_total = document.createElement("td")
    // new
    var th_feed_cost = document.createElement("td")
    // var th_BIRD_COST=document.createElement("td")
    var th_OTHER = document.createElement("td")
    th_day.innerText = index;

    // bird 
    let b = localStorage.getItem("total_chicks");
    th_bird.innerText = result.bird;
    th_mor.innerText = result.mortality;
    th_feed.innerText = result.feed;
    th_feed_cost.innerText = result.feedcost;
    th_OTHER.innerText = result.other;
    th_total.innerText = result.total.toFixed(3);
    tr.append(th_day);
    tr.append(th_bird);
    tr.append(th_mor);
    tr.append(th_feed);
    tr.append(th_total);
    tr.append(th_feed_cost);
    tr.append(th_OTHER);
    tr.append(th_total);
    var tab = document.getElementById("tab");
    tab.append(tr);

  }
}
fun()


// clear all data
function clr() {
  localStorage.clear();
  location.reload();
  window.history.back();
}
