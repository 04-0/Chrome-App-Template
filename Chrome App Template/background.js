chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      
      // put everything in here, or just put a function above that
      // calls from 'onlaunched'
      
      // when run, sets dimensions that are resizable
      
      'width': 400,
      'height': 500
    }
  });
});
