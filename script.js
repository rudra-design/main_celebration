/* RIBBONS */
for(let i=0;i<25;i++){
  let ribbon=document.createElement("div");
  ribbon.className="ribbon";
  ribbon.style.left=Math.random()*100+"vw";
  ribbon.style.background=`hsl(${Math.random()*360},100%,70%)`;
  ribbon.style.animationDuration=(3+Math.random()*5)+"s";
  document.body.appendChild(ribbon);
}

/* SPARKLES */
for(let i=0;i<35;i++){
  let sparkle=document.createElement("div");
  sparkle.className="sparkle";
  sparkle.style.left=Math.random()*100+"vw";
  sparkle.style.top=Math.random()*100+"vh";
  sparkle.style.animationDuration=(1+Math.random()*2)+"s";
  document.body.appendChild(sparkle);
}

/* BALLOONS */
for(let i=0;i<10;i++){
  let balloon=document.createElement("div");
  balloon.className="balloon";
  balloon.style.left=Math.random()*100+"vw";
  balloon.style.background=`hsl(${Math.random()*360},80%,70%)`;
  balloon.style.animationDuration=(5+Math.random()*5)+"s";
  document.body.appendChild(balloon);
}
