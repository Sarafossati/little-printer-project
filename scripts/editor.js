const editor = new EditorJS({
  holder: "editorjs",
  tools: {
    header: {
      class: Header,
      inlineToolbar: true,
    },
  },
});

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

const updateImg = document.querySelector(".update-img");

updateImg.addEventListener("click", (evt) => {
  updateImg.classList.add("display-none");
});
