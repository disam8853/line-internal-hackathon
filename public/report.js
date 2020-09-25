var modals = document.querySelectorAll('.modal')
var EID = ''
var LUID = ''
var data = []

var api_url = 'https://8a9a4fb15bb1.ap.ngrok.io'

window.onload = function () {
  M.AutoInit()

  eventListener()

  fetch('/send-id')
    .then(function (reqResponse) {
      return reqResponse.json()
    })
    .then(function (jsonResponse) {
      const myLiffId = jsonResponse.id
      initializeLiffOrDie(myLiffId)
    })
    .catch(function (error) {
      console.log(error)
    })
}

function eventListener() {}

/**
 * Check if myLiffId is null. If null do not initiate liff.
 * @param {string} myLiffId The LIFF ID of the selected element
 */
function initializeLiffOrDie(myLiffId) {
  if (!myLiffId) {
    console.log('LIFF ID is not found')
  } else {
    initializeLiff(myLiffId)
  }
}

/**
 * Initialize LIFF
 * @param {string} myLiffId The LIFF ID of the selected element
 */
function initializeLiff(myLiffId) {
  liff
    .init({
      liffId: myLiffId,
    })
    .then(() => {
      // start to use LIFF's api
      initializeApp()
    })
    .catch((err) => {
      console.log(err)
    })
}

/**
 * Initialize the app by calling functions handling individual app components
 */
function initializeApp() {
  registerButtonHandlers()

  if (!liff.isInClient() && !liff.isLoggedIn()) {
    document.getElementById('loginBtn').classList.remove('hide')
  }
  if (liff.isLoggedIn()) {
    // check if the user is logged in/out, and disable inappropriate button
    // get profile and show
    liff
      .getProfile()
      .then(function (profile) {
        const text = profile.displayName + '，您好！'
        console.log('userId = ' + profile.userId)
        LUID = profile.userId
        document.getElementById('profile').textContent = text
      })
      .catch(function (error) {
        console.log('Error getting profile: ' + error)
      })
  } else {
    document.getElementById('loginBtn').classList.remove('hide')
  }
}

/**
 * Register event handlers for the buttons displayed in the app
 */
function registerButtonHandlers() {
  // closeWindow call
  document
    .getElementById('submitQuestion')
    .addEventListener('click', function () {
      if (liff.isInClient()) {
        liff.closeWindow()
      } else {
        alert('我們已收到您的問題回報！')
      }
    })
  // login call, only when external browser is used
  document.getElementById('loginBtn').addEventListener('click', function () {
    if (!liff.isLoggedIn()) {
      liff.login()
    }
  })
}
