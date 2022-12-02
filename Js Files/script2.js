let home = document.querySelector(".home");

let para1 = document.querySelector(".para1");
let trailer1 = document.querySelector(".trailer1");
let head2 = document.querySelector(".head2");
let head3 = document.querySelector(".head3");
let head4 = document.querySelector(".head4");
let m1 = document.querySelector(".m1");
let m2 = document.querySelector(".m2");
let m3 = document.querySelector(".m3");
let m4 = document.querySelector(".m4");
let m5 = document.querySelector(".m5");
let m6 = document.querySelector(".m6");
let m7 = document.querySelector(".m7");
let movie1 = document.querySelector(".movie-list-wrapper");
let head5 = document.querySelector(".about-movie");

async function homepage() {
  let request = new Request("home.json");
  let response = await fetch(request);
  let json_obj = await response.json();

  load(json_obj);
}

function load(a) {
  let p = document.createElement("p");
  p.innerHTML = a["mainpage"]["text"][0];
  para1.append(p);

  let t = document.createElement("p");
  t.innerHTML = a["mainpage"]["span"][5];
  t.classList.add("trailer1");
  trailer1.append(t);

  let h = document.createElement("img");
  h.src = a["mainpage"]["images"][0];
  h.classList.add("home-img");
  home.append(h);

  let h2 = document.createElement("h2");
  h2.innerHTML = a["mainpage"]["h2"][0];
  h2.classList.add("heading-title");
  head2.append(h2);

  //movie 1

  let i1 = document.createElement("img");
  i1.src = a["mainpage"]["images"][8];
  i1.classList.add("movie-list-item-img");
  m1.append(i1);

  let title = document.createElement("p");
  title.innerHTML = a["mainpage"]["MOVIE-TITLE"][0];
  title.classList.add("movie-list-item-title");
  m1.append(title);

  let p1 = document.createElement("p");
  p1.innerHTML = a["mainpage"]["text"][2];
  p1.classList.add("movie-list-item-desc");
  m1.append(p1);

  let w1 = document.createElement("a");
  w1.innerHTML = a["mainpage"]["span"][1];
  w1.classList.add("movie-list-item-button");
  w1.href = "playpage.html";
  m1.append(w1);

  //movie2

  let i2 = document.createElement("img");
  i2.src = a["mainpage"]["images"][2];
  i2.classList.add("movie-list-item-img");
  m2.append(i2);

  let title1 = document.createElement("p");
  title1.innerHTML = a["mainpage"]["MOVIE-TITLE"][1];
  title1.classList.add("movie-list-item-title");
  m2.append(title1);

  let p2 = document.createElement("p");
  p2.innerHTML = a["mainpage"]["text"][2];
  p2.classList.add("movie-list-item-desc");
  m2.append(p2);

  let w2 = document.createElement("a");
  w2.innerHTML = a["mainpage"]["span"][1];
  w2.classList.add("movie-list-item-button");
  w2.href = "playpage.html";
  m2.append(w2);

  //movie3

  let i3 = document.createElement("img");
  i3.src = a["mainpage"]["images"][3];
  i3.classList.add("movie-list-item-img");
  m3.append(i3);

  let title2 = document.createElement("p");
  title2.innerHTML = a["mainpage"]["MOVIE-TITLE"][2];
  title2.classList.add("movie-list-item-title");
  m3.append(title2);

  let p3 = document.createElement("p");
  p3.innerHTML = a["mainpage"]["text"][2];
  p3.classList.add("movie-list-item-desc");
  m3.append(p3);

  let w3 = document.createElement("a");
  w3.innerHTML = a["mainpage"]["span"][1];
  w3.classList.add("movie-list-item-button");
  w3.href = "playpage.html";
  m3.append(w3);

  //movie4

  let i4 = document.createElement("img");
  i4.src = a["mainpage"]["images"][5];
  i4.classList.add("movie-list-item-img");
  m4.append(i4);

  let title3 = document.createElement("p");
  title3.innerHTML = a["mainpage"]["MOVIE-TITLE"][3];
  title3.classList.add("movie-list-item-title");
  m4.append(title3);

  let p4 = document.createElement("p");
  p4.innerHTML = a["mainpage"]["text"][2];
  p4.classList.add("movie-list-item-desc");
  m4.append(p4);

  let w4 = document.createElement("a");
  w4.innerHTML = a["mainpage"]["span"][1];
  w4.classList.add("movie-list-item-button");
  w4.href = "playpage.html";
  m4.append(w4);


  //movie5

  let i5 = document.createElement("img");
  i5.src = a["mainpage"]["images"][6];
  i5.classList.add("movie-list-item-img");
  m5.append(i5);

  let title5 = document.createElement("p");
  title5.innerHTML = a["mainpage"]["MOVIE-TITLE"][4];
  title5.classList.add("movie-list-item-title");
  m5.append(title5);

  let p5 = document.createElement("p");
  p5.innerHTML = a["mainpage"]["text"][2];
  p5.classList.add("movie-list-item-desc");
  m5.append(p5);

  let w5 = document.createElement("a");
  w5.innerHTML = a["mainpage"]["span"][1];
  w5.classList.add("movie-list-item-button");
  w5.href = "playpage.html";
  m5.append(w5);

}

homepage();

