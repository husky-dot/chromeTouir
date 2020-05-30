var menuItem = {
  "id": "wikit",
  "title": "Wikit",
  "contexts": ["selection"],
}

chrome.contextMenus.create(menuItem)

function fixedEncodeURI (str) {
  return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
}

chrome.contextMenus.onClicked.addListener(function(clickData){
  if (clickData.menuItemId === 'wikit' && clickData.selectionText){
    var wikiUrl = 'https://wiki.hk.xileso.top/wiki/' + clickData.selectionText
    console.log(wikiUrl)
    var createData = {
      "url": wikiUrl,
      "type": "popup",
      "top": 5,
      "left": 5,
      "width": screen.availWidth / 2,
      "height": screen.availHeight / 2
    }
    chrome.windows.create(createData, function(){})
  }
})