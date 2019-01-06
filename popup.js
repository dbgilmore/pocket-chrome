let tagArticles = document.getElementById('tagArticles');
let saveWPM = document.getElementById('updateWPM');
let wpmTextField = document.getElementById('wpmTextField');

chrome.storage.sync.get('wpm', function(data) {
  wpmTextField.setAttribute('value', data.wpm);
});

saveWPM.onclick = function(element) {
  chrome.storage.sync.set({wpm: wpmTextField.value}, function() {
  });
}

tagArticles.onclick = function(element) {
  //call pocket to tag untagged
};
