var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1, delay:1});

//add a from() tween at the beginning of the timline
tl.from("#Hexagon", 0.5, {scale:0.5, opacity:0, transformOrigin:"50% 50%"})
.from(".bolt-top-fill", 0.5, { attr:{ y:-50 }, ease:Power1.easeOut})
.from(".bolt-middle-fill", 0.25, { attr:{ y:265.4 }, ease:Power1.easeOut})
.from(".bolt-bottom-fill", 0.5, { attr:{ y:85.5 }, ease:Power1.easeOut})
.from(".bolt-bottom-shadow", 0.5, { attr:{ opacity:0}}, "-=0.5");
