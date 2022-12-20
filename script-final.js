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
              const div = document.createElement("div"); 
              div.innerHTML = `
              <div class ="gallery">
              <input type="checkbox" class="mycheckbox" id="${i}"/>
              <label class="label-checkbox" for="${i}">
              <img class="myimg" id="${i}" src="${picFile.result}" title="${picFile.name}" style="width:100%;"/>
              <p>Machine Name</p>
              </label>
            </div>`;
            
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
      var background = document.getElementById('background_img');
      var checkboxes = document.getElementsByClassName('mycheckbox');
      var images = document.getElementsByClassName('myimg');
    
      var output = document.querySelector("#overlay-img");

      w = background.width;
      h = background.height;

      for (var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked)
        {
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
          
        (images[i]).setAttribute('class', 'overlays');
        (images[i]).style.left = x + "px";
        (images[i]).style.top = y + "px";
        output.appendChild(images[i]);
          
       }

        }
       
        
      }

    function testing()
    {
      var x = document.getElementById("xcoord").value;
      var y = document.getElementById("ycoord").value;
      var output = document.querySelector("#result");
      var imgs = document.querySelectorAll('.gallery .label-checkbox .myimg');
      var checkboxes = document.getElementsByClassName('mycheckbox');

      for(let i = 0; i < checkboxes.length; i++)
      {
        if(checkboxes[i].checked)
        {
          console.log(imgs[i]);
        }
      }

    }

    

      
  