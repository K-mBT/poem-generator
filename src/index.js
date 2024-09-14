function displayPoem(response) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "You are a french poem writer, specialising in short poems written in french language. The poem must be provided in HTML format. Example: <p>this is a poem</p>";
  let prompt = "Generate a short and unique poem in french. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");

  poemElement.innerHTML = "Generating a poem for you.. please wait";

  console.log("called the AI api");
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
