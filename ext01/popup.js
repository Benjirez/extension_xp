const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', '#eeeeee']
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
        chrome.storage.sync.get('color', function(data) {
          changeColor.style.backgroundColor = data.color;
          changeColor.setAttribute('value', data.color);
          chrome.tabs.executeScript(
            //  tabs[0].id,
              {code: 'document.body.style.backgroundColor = "' + color + '";'});
      //};
        })
      });

    });
    document.body.appendChild(button); //changed page.appendChild to document.body.appenChild
  }
}
constructOptions(kButtonColors);

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
    chrome.tabs.executeScript(
      //  tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
};
