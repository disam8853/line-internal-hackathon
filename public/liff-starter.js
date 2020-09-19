window.onload = function () {
  const elems = document.querySelectorAll('.modal')
  const instances = M.Modal.init(elems)

  cardEventListener()

  let stepper = document.querySelector('.stepper')
  let stepperInstace = new MStepper(stepper, {
    // options
    firstActive: 0, // this is the default
  })

  // DO NOT CHANGE THIS
  let myLiffId = ''

  fetch('/send-id')
    .then(function (reqResponse) {
      return reqResponse.json()
    })
    .then(function (jsonResponse) {
      myLiffId = jsonResponse.id
      initializeLiffOrDie(myLiffId)
    })
    .catch(function (error) {
      console.log(error)
    })
}

function cardEventListener() {
  for (let i = 0; i < 5; i++) {
    const cards = document.querySelectorAll(
      '.step:nth-child(' + (i + 1) + ') .card'
    )
    for (let j = 0; j < cards.length; j++) {
      cards[j].addEventListener('click', (e) => {
        // unselect all other cards in same row
        for (let k = 0; k < cards.length; k++) {
          if (k !== j) {
            cards[k].classList.remove('select')
          }
        }
        // select target card
        cards[j].classList.add('select')
      })
    }
  }
}

/**
 * Check if myLiffId is null. If null do not initiate liff.
 * @param {string} myLiffId The LIFF ID of the selected element
 */
function initializeLiffOrDie(myLiffId) {
  if (!myLiffId) {
    window.alert('LIFF ID is not found')
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

  // check if the user is logged in/out, and disable inappropriate button
  if (liff.isLoggedIn()) {
    // get profile and show
    liff
      .getProfile()
      .then(function (profile) {
        const text = 'Hi, ' + profile.displayName + '{' + profile.userId + '}.'
        document.getElementById('profile').textContent = text
      })
      .catch(function (error) {
        window.alert('Error getting profile: ' + error)
      })
  } else {
  }
}

/**
 * Register event handlers for the buttons displayed in the app
 */
function registerButtonHandlers() {
  // closeWindow call
  document.getElementById('submit').addEventListener('click', function () {
    if (liff.isInClient()) {
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
