function doGet() {
  const title = "Google Apps Script";
  const fileName = "index.html";
  return HtmlService.createHtmlOutputFromFile(fileName).setTitle(title);
}

function showAPIKeysEtc() {
  console.log(API_KEY);
  console.log(AN_OBJECT);
}
