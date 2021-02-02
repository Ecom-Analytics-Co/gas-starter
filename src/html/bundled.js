console.log("hello from client");

function afterPageLoad() {
  exampleUtil();
  document.getElementById("test-data").textContent = "the page has loaded!";
}

document.addEventListener("DOMContentLoaded", afterPageLoad);
function exampleUtil() {
  // does nothing
  return null;
}
