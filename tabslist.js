function logTabsForWindows(windowInfoArray) {
  var tlist = document.getElementById('tabs-list');
  
  var activeTabUrl = document.getElementById('header-title');
  var text = document.createTextNode("Tabs in Window");
  activeTabUrl.appendChild(text);
  linebreak = document.createElement("br");
  activeTabUrl.appendChild(linebreak);

  for (windowInfo of windowInfoArray) {
    var wtext = document.createTextNode(`Window: ${windowInfo.id}`);
    activeTabUrl.appendChild(wtext);
    linebreak = document.createElement("br");
    activeTabUrl.appendChild(linebreak);
    for (tab of windowInfo.tabs.map((tab) => {return tab.url})) {
      var li = document.createElement("li");
      var content = document.createTextNode(tab);
      li.appendChild(content);
      tlist.appendChild(li);
    }
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function updateAllTabs() {
  var getting = browser.windows.getAll({
    populate: true,
    windowTypes: ["normal"]
  });
  getting.then(logTabsForWindows, onError);
};

updateAllTabs();
