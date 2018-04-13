const kButtonColors = ['#000000', '#eeeeee', '#3aa757', '#e8453c', '#f9bb2d', '#4688f1']
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
	//document.getElementByName('message').value = 'pump up the jam';
  let color = element.target.value;
    chrome.tabs.executeScript(
      //  tabs[0].id,
        //{code: 'document.body.style.backgroundColor = "' + color + '";'}
		//{code: 'document.body.style.backgroundImage = "url(\'images/newArt2.jpg\')" ;' }
		//{code: 'document.body.style.backgroundImage = \"chrome.extension.getURL(\'images/newArt1.jpg\');\" '}
		{code: 'document.body.style.backgroundImage = \'url(\"chrome-extension://' + chrome.runtime.id +'\/images/newArt2.jpg\")\';' }
	
	);
};

//document.getElementByName('message').value = 'pump up the jam';
