let h=document.querySelectorAll(".cast-box")
let h4=document.querySelector(".cast-movie")
let h2=document.querySelector(".head-movie")
let h3=document.querySelector(".movietext")

async function homepage() {
  let request = new Request("Json Files/BuyingPane.json");
  let response = await fetch(request);
  let json_obj = await response.json();

  load(json_obj);
}


function load(a) {
    let title=document.createElement('h3')
    title.innerHTML=a['Movie']['Jumanji']['title']
    h2.append(title)
    let para=document.createElement('p')
    para.innerHTML=a['Movie']['Jumanji']['desc']
    h3.append(para)    
    let title2=document.createElement('h3')
    
    title2.innerHTML=a['Movie']['Jumanji']['title2']
    
    h4.append(title2)  


    for(i=0;i<6;i++){
        let img=document.createElement("img")
        let castname=document.createElement("p")
        img.src=a['Movie']['Jumanji']['castimages'][i]
        castname.innerHTML=a['Movie']['Jumanji']['castname'][i]
        h[i].appendChild(img)
        h[i].appendChild(castname)

    }
}
 
homepage();



