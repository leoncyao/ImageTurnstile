



$(document).ready(function () {
var indexes = {}
function click_next_image (data) {
    const n = data[1].length
    const tangle_name = data[0]
    indexes[tangle_name] = (indexes[tangle_name] + n + 1) % n    
    var j = 1;
    // for (var j = 0; j < 3; j++){
      var t = (indexes[tangle_name] + j) % n
      var path = "Capped-Trivial-Tangles/" + tangle_name + "/" + data[1][t]
      document.getElementById(tangle_name + "_img_" + j).src = path
    // }
}
function click_prev_image (data) {
    const tangle_name = data[0]
    const n = data[1].length
    indexes[tangle_name] = (indexes[tangle_name] + n - 1) % n
    // var path = "Capped-Trivial-Tangles/" + tangle_name + "/" + data[1][indexes[tangle_name]]
    // document.getElementById(tangle_name + "_img").src = path
    var j = 1
    // for (var j = 0; j < 3; j++){
      var t = (indexes[tangle_name] + j) % n
      var path = "Capped-Trivial-Tangles/" + tangle_name + "/" + data[1][t]
      document.getElementById(tangle_name + "_img_" + j).src = path
    // }
}
  async function lol(name) 
  {
    let response = await fetch('/hi')
    return response;
  }
var test = (lol().then((res) => res.json())).then((data) => {
    data.forEach(function(tangle){
      tangle_name = tangle[0]
      var c = document.createElement("div")
      c.id = tangle_name
      var a = document.createElement("p")  
      var b = document.createTextNode(`${tangle_name}`);
      c.append(a)
      a.appendChild(b)

      
      // var img = document.createElement("img")
      // img.id = tangle_name + "_img"
      // img.src = "Capped-Trivial-Tangles/" + tangle_name + "/" + tangle[1][0] // ;
      
      var images = document.createElement("div")

  
      images.id = "images"
      var i = 1
      // for (var i = 0; i < 3; i++){
        var img = document.createElement("img")
        img.id = tangle_name + "_img_" + i
        img.src = "Capped-Trivial-Tangles/" + tangle_name + "/" + tangle[1][i] // ;
        var asdf = document.createElement("div")
        asdf.id = "lol"
        if (i != 1){
          // img.class = "hello"
          asdf.appendChild(img)
          images.appendChild(asdf)
        } else {
          images.appendChild(img)
        }
      // }      
      // for (var i = 0; i < 3; i++){
      //   var img = document.createElement("img")
      //   img.id = tangle_name + "_img_" + i
      //   img.src = "Capped-Trivial-Tangles/" + tangle_name + "/" + tangle[1][i] // ;
      //   var asdf = document.createElement("div")
      //   asdf.id = "lol"
      //   if (i != 1){
      //     // img.class = "hello"
      //     asdf.appendChild(img)
      //     images.appendChild(asdf)
      //   } else {
      //     images.appendChild(img)
      //   }
      // }      
      var back = document.createElement("button")
      back.id = tangle_name + "_" + "back"
      back.innerHTML = "back";
      var next = document.createElement("button")
      next.id = tangle_name + "_" + "next"
      next.innerHTML = "next"

      c.appendChild(images)
      c.appendChild(back);
      c.appendChild(next);
      document.getElementById("body").appendChild(c);

      indexes[tangle_name] = 1

      $("#" + back.id).on('click', () => click_prev_image(tangle))
      $("#" + next.id).on('click', () => click_next_image(tangle))
      })
      return data
      })
})

