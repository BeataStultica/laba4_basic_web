let seven_click=0;
let eight_click=0;
function change_color_seven(event){
    if (seven_click==0){
        event.target.style.color = 'gold';
        event.target.style.backgroundColor = 'blue';
        seven_click=1;
    }
    else{
        event.target.style.color = null;
        event.target.style.backgroundColor = null;
        seven_click=0;
    }
}

function change_color_eight(event){
    if (eight_click==0){
        event.target.style.color = 'blue';
        event.target.style.backgroundColor = 'gold';
        eight_click=1;
    }
    else{
        event.target.style.color = null;
        event.target.style.backgroundColor = null;
        eight_click=0;
    }
}

seven_elem = document.getElementById("read").addEventListener("click", (event) =>{change_color_seven(event)});
eighth_elem = document.querySelector("ul li:nth-child(3)").addEventListener("click", (event) =>{change_color_eight(event)});

document.getElementById('increace').onclick = function(){
    cur_img = document.querySelectorAll('img')
    for (let i of cur_img){
        console.log(i);
        cur_w = i.style.width
        if (cur_w){
            cur_w = parseInt(cur_w);
        }
        else{
            cur_w = i.naturalWidth;
        }
        i.style.width = cur_w+101+'px'
    }
}

document.getElementById('decreace').onclick = function(){
    cur_img = document.querySelectorAll('img')
    for (let i of cur_img){
        console.log(i);
        cur_w = i.style.width
        if (cur_w){
            cur_w = parseInt(cur_w);
        }
        else{
            cur_w = i.naturalWidth;
        }
        i.style.width = cur_w-101+'px'
    }
}


document.getElementById('delete').onclick = function(){
    cur_img = document.querySelectorAll('img')
    cur_img[cur_img.length-1].remove();
}
function handleFiles(){
    const file = this.files[0];
    let image = document.createElement("img");
    let br = document.createElement("br");
    image.classList.add('lviv-img')
    document.getElementById('image-box').appendChild(image);
    document.getElementById('image-box').appendChild(br);
    
    let reader = new FileReader();
    reader.onload = (function(aImg) {
        return function(e) {
            aImg.src=e.target.result;};})(image);
    reader.readAsDataURL(file);
}
document.getElementById("add_file").addEventListener("change", handleFiles, false)

document.getElementById('add').addEventListener('click', function (e) {
    document.getElementById("add_file").value = null;
    document.getElementById("add_file").click();
    e.preventDefault();
})