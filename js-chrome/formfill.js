chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var formfield = d.activeElement;
      d.getElementById(formfield).value = Math.floor(89+Math.random()*11);

});
