window.onload = function () {
  let stepper = document.querySelector('.stepper')
  let stepperInstace = new MStepper(stepper, {
    // options
    firstActive: 0, // this is the default
  })

  const useNodeJS = true // if you are not using a node server, set this value to false
  const defaultLiffId = '' // change the default LIFF value if you are not using a node server

  // DO NOT CHANGE THIS
  let myLiffId = ''

  // if node is used, fetch the environment variable and pass it to the LIFF method
  // otherwise, pass defaultLiffId
  if (useNodeJS) {
    fetch('/send-id')
      .then(function (reqResponse) {
        return reqResponse.json()
      })
      .then(function (jsonResponse) {
        myLiffId = jsonResponse.id
        initializeLiffOrDie(myLiffId)
      })
      .catch(function (error) {
        document.getElementById('liffAppContent').classList.add('hidden')
        document
          .getElementById('nodeLiffIdErrorMessage')
          .classList.remove('hidden')
      })
  } else {
    myLiffId = defaultLiffId
    initializeLiffOrDie(myLiffId)
  }
}

/**
 * Check if myLiffId is null. If null do not initiate liff.
 * @param {string} myLiffId The LIFF ID of the selected element
 */
function initializeLiffOrDie(myLiffId) {
  if (!myLiffId) {
    document.getElementById('liffAppContent').classList.add('hidden')
    document.getElementById('liffIdErrorMessage').classList.remove('hidden')
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
      window.alert(err)
    })
}

/**
 * Initialize the app by calling functions handling individual app components
 */
function initializeApp() {
  registerButtonHandlers()
}

/**
 * Register event handlers for the buttons displayed in the app
 */
function registerButtonHandlers() {
  // closeWindow call
  document.getElementById('submit').addEventListener('click', function () {
    if (!liff.isInClient()) {
      sendAlertIfNotInClient()
    } else {
      liff.closeWindow()
    }
  })
}

/**
 * Alert the user if LIFF is opened in an external browser and unavailable buttons are tapped
 */
function sendAlertIfNotInClient() {
  alert(
    'This button is unavailable as LIFF is currently being opened in an external browser.'
  )
}
