document.getElementById('contact_link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contact_form').scrollIntoView({ behavior: 'smooth' });
});


        
const arrImgs = [
{
url:
  "./images/project1.png"
},
{
url:
"./images/project3small.jpg"
},
{
url:
"./images/project4small.jpg"
},    
{
url:
"./images/project2.png"
},
{
url:
  "./images/project1.png"
}


];

const containerImgs = document.querySelector("#container-imgs"),
prox = document.querySelector("#prox"),
ret = document.querySelector("#ret");

window.addEventListener("load", function () {
arrImgs.forEach(function (item) {
containerImgs.innerHTML += `
<div>
  <img src=${item.url}>
</div>`;
});
});

prox.addEventListener("click", function () {
containerImgs.scrollBy(300, 0);
});

ret.addEventListener("click", function () {
containerImgs.scrollBy(-150, 0);
});

        
        
    // the spining logo     
        const degreeToRadian = (angle) => {
            return angle * (Math.PI / 180);
        };
        
        const radius = 80;
        const diameter = radius * 2;
        
        const circle = document.querySelector("#circle");
        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        
        const text = circle.dataset.text;
        const characters = text.split("");
        
        const deltaAngle = 360 / characters.length;
        const characterOffsetAngle = 8;
        let currentAngle = -90;
        
        characters.forEach((character, index) => {
            const span = document.createElement("span");
            span.innerText = character;
            const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
            const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));
            
            const transform = `translate(${xPos}px, ${yPos}px)`;
            const rotate = `rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`;
            span.style.transform = `${transform} ${rotate}`;
            
            currentAngle += deltaAngle;
            circle.appendChild(span);
        });
                  
        

