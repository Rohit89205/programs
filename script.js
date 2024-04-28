const cirCoord = [];

document.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const radius = Math.floor(Math.random() * 100);

  console.log(radius, "radius");
  console.log(x, "x");
  console.log(y, "y");

  const circle = document.createElement("div");
  circle.classList.add("circle");
  const eleStyle = circle.style;
  eleStyle.width = radius * 2 + "px";
  eleStyle.height = radius * 2 + "px";
  eleStyle.top = y - radius + "px";
  eleStyle.left = x - radius + "px";

  const elements = document.querySelectorAll(".circle");

  if (elements.length === 0) {
    console.log("0 ho gya");
    cirCoord.push({x,y})
    document.body.appendChild(circle);
  } else if (elements.length === 1) {
    console.log("1 ho gya");
    console.log(x, 'first x')
    console.log(y, 'first x')
    console.log(cirCoord, 'cirCoord', cirCoord[0].x, cirCoord[0].y)

    console.log(cirCoord[0].x + radius * 2 > x, 'give res')
    console.log(cirCoord[0].y + radius * 2 > y, 'give res of y')



    if (cirCoord[0].x + radius * 2 > x && cirCoord[0].y + radius * 2 > y) {
      console.log("Circle Intersected");
    }
    document.body.appendChild(circle);

  } else if (elements.length > 1) {
    console.log("2 ho gya");
    elements.forEach((cir) => {
      document.body.removeChild(cir);
    });
    // document.body.appendChild(circle);
  }
});