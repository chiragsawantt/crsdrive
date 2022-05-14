function gui() {
  /* Navbar-top */
  var navMobileBtn = document.querySelector('#nav-mobile-btn');
  if (navMobileBtn) {
    navMobileBtn.onclick = function () {
      var navMobileNav = document.getElementById('nav-mobile-nav');
      var navMobileBtn = document.getElementById('nav-mobile-btn');
      if (navMobileNav.className === 'active') {
        navMobileNav.className = '';
        navMobileBtn.className = '';
      } else {
        navMobileNav.className = 'active';
        navMobileBtn.className = 'active';
      }
    };
  }

  /* Tabs */
  var tabsBtn = document.getElementsByClassName('tabs-btn');
  for (var i = 0; i < tabsBtn.length; i++) {
    tabsBtn[i].onclick = function () {
      clean();
      this.className = 'tabs-btn active';
      document.getElementById('tab-' + this.id.slice(-1))
              .className = 'tabs-tab active';
    };
  }

  function clean() {
    var tabsBtn = document.getElementsByClassName('tabs-btn');
    for (var i = 0; i < tabsBtn.length; i++) {
      tabsBtn[i].className = 'tabs-btn';
    }
    var tabsTab = document.getElementsByClassName('tabs-tab');
    for (var i = 0; i < tabsTab.length; i++) {
      tabsTab[i].className = 'tabs-tab';
    }
  }
}

window.onload = gui;

// Social sharing
function popup(pageURL, w, h) {
  var left = (screen.width / 2) - (w / 2);
  var top = (screen.height / 2) - (h / 2);
  var targetWin = window.open(pageURL, '_blank', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}

//hide messages
function hideMessages(sec) {
  if (sec === undefined) {
    var sec = 2;
  }
  setTimeout(function () {
    var els = document.getElementsByClassName('message');
    for (var i = 0; i < els.length; i++) {
      els[i].style.display = 'none';
    }
  }, sec * 1000);
}
