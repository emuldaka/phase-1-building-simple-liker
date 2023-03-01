// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const likeGlyphs = document.querySelectorAll(".like-glyph");
const errorModal = document.getElementById("modal");

likeGlyphs.forEach((glyph) => {
  glyph.addEventListener("click", () => {
    mimicServerCall()
      .then((response) => {
        glyph.classList.toggle("activated-heart");
      })
      .catch((error) => {
        errorModal.className = "";

        setTimeout(() => {
          errorModal.className = "hidden";
        }, 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
