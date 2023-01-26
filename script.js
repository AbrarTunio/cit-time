text = document.querySelectorAll(".text");
init = document.querySelectorAll(".init img");
img = document.querySelectorAll(".img");
result = document.querySelectorAll(".result");
newinit = document.querySelectorAll(".init");

text.forEach((element) => {
  element.className = "border border-info rounded mb-1 shadow text-center pt-4";
  element.style.height = "80px";
});
newinit.forEach((element) => {
  element.className =
    "border border-success rounded mb-1 shadow text-center pt-4";
  element.style.height = "80px";
  element.style.width = "150px";
});
img.forEach((element) => {
  element.className =
    "border border-warning rounded mb-1 shadow text-center pt-4";
  element.style.height = "80px";
  element.style.width = "150px";
});
result.forEach((element) => {
  element.className =
    "border border-warning rounded mb-1 shadow text-center pt-4";
  element.style.height = "80px";
  element.style.width = "150px";
});

count = 0;
list = ["keyboard", "monitor", "mouse", "printer", "speaker"];

text.forEach((element) => {
  element.innerHTML = list[count];
  count++;
});

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

random_list = shuffle(list);
count = 0;
init.forEach((element) => {
  element.setAttribute("src", `images/${random_list[count]}.png`);
  count++;
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  nowdata = ev.target;
  currentImage = nowdata.getAttribute("src").split("/")[1].split(".")[0];
}

function drop(ev) {
  ev.preventDefault();

  deviceNames = [];
  text.forEach((element) => {
    deviceNames.push(element);
  });

  results = [];
  result.forEach((element) => {
    results.push(element);
  });

  if (ev.target.children.length != 1 || ev.target.children.length > 1) {
    ev.target.appendChild(nowdata);

    for (let i = 0; i < deviceNames.length; i++) {
      if (
        deviceNames[i].innerHTML == currentImage &&
        deviceNames[i]
          .getAttribute("id")
          .charAt(deviceNames[i].getAttribute("id").length - 1) ==
          nowdata.parentNode
            .getAttribute("id")
            .charAt(nowdata.parentNode.getAttribute("id").length - 1)
      ) {
        results[i].className =
          "border border-success text-light bg-success rounded mb-1 shadow text-center pt-4";
        results[i].style.height = "80px";
        results[i].style.width = "150px";
        results[i].innerHTML = "Matched";
      }
    }
  } else {
    alert("Already filled");
  }
  console.log(deviceNames[0]);

  // var data = ev.dataTransfer.getData("text");
  // ev.target.appendChild(document.getElementById(data));

  // var index = data.slice(-1);
  // var currentName = document
  //   .getElementById("device-name-list")
  //   .children[index - 1].innerHTML.toLowerCase();

  // currentImg = document.querySelector(`#img${index}`);
  // console.log(currentName);
  // if (currentName === currentImg.split("/").pop().split(".")[0]) {
  //   console.log(currentName);
  //   console.log(currentImg.split("/").pop().split(".")[0]);
  //   ev.target.nextElementSibling.innerHTML = "Match";
  //   ev.target.nextElementSibling.style.color = "green";
  // } else {
  //   ev.target.nextElementSibling.innerHTML = "Mismatch";
  //   ev.target.nextElementSibling.style.color = "red";
  // }
}
