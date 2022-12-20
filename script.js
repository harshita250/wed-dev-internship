document.querySelector("#files").addEventListener("change", (e) => {    
    if(window.File && window.FileReader && window.FileList && window.Blob) {    
        const files = e.target.files;
        const output = document.querySelector("#result");
        output.innerHTML = "";
        for (let i = 0; i < files.length; i++) {
           if (!files[i].type.match("image")) continue;
            const picReader = new FileReader();
            picReader.addEventListener("load", function (event) {
              const picFile = event.target;
              const div = document.createElement("div"); //modify
              div.innerHTML = `<div class ="gallery">
              <img id="${i}" src="${picFile.result}" title="${picFile.name} style='padding:50px;width:50%'"/>
              <input id="${i}" type="checkbox" class="checkbox" name="checkbox"/></div>`;
              output.appendChild(div);
            });
            picReader.readAsDataURL(files[i]);
            
           }
      } else {
        alert("Your browser does not support File API");

  
      }

      
    });
    

    function overlay()
    {
      var checkboxes = document.getElementsByName('checkbox');
      var background = document.getElementById('background_img');
      w = background.width;
      h = background.height;
      
      var output = document.querySelector("#result");
      for (var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked)
        {
          var image = document.getElementById(i);
          console.log(image);
          var clone = image.cloneNode(true);
          var x = document.getElementById("xcoord").value;
          var y = document.getElementById("ycoord").value;
          if(x > w)
          {
            x %= w;
          }
          if(y > h)
          {
            y %= h;
          }
          
        clone.setAttribute('class', 'overlays');
        clone.style.left = x + "px";
        clone.style.top = y + "px";
        output.appendChild(clone);
          
       }

        }
       
        
    }

  
    
  
      
  