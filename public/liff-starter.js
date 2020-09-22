var modals = document.querySelectorAll('.modal')

var api_url = 'http://localhost:8080/api/v1'
var menu_data = {
  '2020-09-21': [
    {
      id: 70,
      name: '照燒青梅豬排堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20200521_084514_074.jpg',
    },
    {
      id: 71,
      name: '咕咕雞堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160818_165859_023.jpg',
    },
    {
      id: 72,
      name: '雞肉三明治',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_175446_097.jpg',
    },
    {
      id: 73,
      name: '摩斯熱狗堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_175213_070.jpg',
    },
    {
      id: 74,
      name: '蕃茄吉士蛋堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_173743_050.jpg',
    },
    {
      id: 75,
      name: '黃金炸蝦堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20171228_211010_022.jpg',
    },
  ],
  '2020-09-22': [
    {
      id: 76,
      name: '照燒青梅豬排堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20200521_084514_074.jpg',
    },
    {
      id: 77,
      name: '咕咕雞堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160818_165859_023.jpg',
    },
    {
      id: 78,
      name: '雞肉三明治',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_175446_097.jpg',
    },
    {
      id: 79,
      name: '摩斯熱狗堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_175213_070.jpg',
    },
    {
      id: 80,
      name: '蕃茄吉士蛋堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_173743_050.jpg',
    },
    {
      id: 81,
      name: '黃金炸蝦堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20171228_211010_022.jpg',
    },
  ],
  '2020-09-23': [
    {
      id: 82,
      name: '照燒青梅豬排堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20200521_084514_074.jpg',
    },
    {
      id: 83,
      name: '咕咕雞堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160818_165859_023.jpg',
    },
    {
      id: 84,
      name: '雞肉三明治',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_175446_097.jpg',
    },
    {
      id: 85,
      name: '摩斯熱狗堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_175213_070.jpg',
    },
    {
      id: 86,
      name: '蕃茄吉士蛋堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_173743_050.jpg',
    },
    {
      id: 87,
      name: '黃金炸蝦堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20171228_211010_022.jpg',
    },
  ],
  '2020-09-24': [
    {
      id: 88,
      name: '照燒青梅豬排堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20200521_084514_074.jpg',
    },
    {
      id: 89,
      name: '咕咕雞堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160818_165859_023.jpg',
    },
    {
      id: 90,
      name: '雞肉三明治',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_175446_097.jpg',
    },
    {
      id: 91,
      name: '摩斯熱狗堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_175213_070.jpg',
    },
    {
      id: 92,
      name: '蕃茄吉士蛋堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_173743_050.jpg',
    },
    {
      id: 93,
      name: '黃金炸蝦堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20171228_211010_022.jpg',
    },
  ],
  '2020-09-25': [
    {
      id: 94,
      name: '照燒青梅豬排堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20200521_084514_074.jpg',
    },
    {
      id: 95,
      name: '咕咕雞堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160818_165859_023.jpg',
    },
    {
      id: 96,
      name: '雞肉三明治',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_175446_097.jpg',
    },
    {
      id: 97,
      name: '摩斯熱狗堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_175213_070.jpg',
    },
    {
      id: 98,
      name: '蕃茄吉士蛋堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20160203_173743_050.jpg',
    },
    {
      id: 99,
      name: '黃金炸蝦堡',
      supplier: 'MOS BURBER',
      picurl: 'http://www.mos.com.tw/upload/product/20171228_211010_022.jpg',
    },
  ],
}

window.onload = function () {
  M.AutoInit()
  // open modal to enter employee id
  M.Modal.getInstance(modals[2]).open()

  checkQueries()
  fetchMenuData()
  eventListener()

  let stepper = document.querySelector('.stepper')
  let stepperInstace = new MStepper(stepper, {
    // options
    firstActive: 0, // this is the default
  })

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

function fetchMenuData() {
  fetch(api_url)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      console.log(res)
      res = menu_data
    })
    .catch((err) => {
      console.log(err)
    })
}

function checkQueries() {
  const url = new URL(window.location.href)
  const qu = url.searchParams.get('qu')
  if (qu === 'true') {
    const instances = M.Modal.getInstance(modals[0])
    instances.open()
  }
}

function eventListener() {
  cardEventListener()
  checkEmployeeListener()
}

function authenticate(eid) {
  if (eid.length === 7 && eid.startsWith('LW') && !isNaN(eid.substring(2))) {
    return true
  } else {
    return false
  }
}

function checkEmployeeListener() {
  document.getElementById('eid').addEventListener('input', function (e) {
    // check employee identity
    if (authenticate(e.target.value)) {
      console.log(e.target.value)
      document.getElementById('eid').classList.remove('invalid')
      document.getElementById('eid').classList.add('valid')
      if (liff.isLoggedIn()) {
        document.getElementById('checkEidSubmit').classList.remove('disabled')
      }
    } else {
      document.getElementById('eid').classList.remove('valid')
      document.getElementById('eid').classList.add('invalid')
      document.getElementById('checkEidSubmit').classList.add('disabled')
    }
  })

  document
    .getElementById('checkEidSubmit')
    .addEventListener('click', function () {
      // check employee identity
      M.Modal.getInstance(modals[2]).close()
    })
}

function cardEventListener() {
  var data = [0, 0, 0, 0, 0]
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
        data[i] = j
        console.log(data)
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

  if (!liff.isInClient() && !liff.isLoggedIn()) {
    document.getElementById('lineLogin').classList.remove('hide')
  }
  if (liff.isLoggedIn()) {
    // check if the user is logged in/out, and disable inappropriate button
    // get profile and show
    liff
      .getProfile()
      .then(function (profile) {
        const text = profile.displayName + '，早安！'
        alert('userId = ' + profile.userId)
        document.getElementById('profile').textContent = text
      })
      .catch(function (error) {
        window.alert('Error getting profile: ' + error)
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
  document.getElementById('submit').addEventListener('click', function () {
    if (liff.isInClient()) {
      liff.closeWindow()
    }
  })
  // login call, only when external browser is used
  document.getElementById('loginBtn').addEventListener('click', function () {
    if (!liff.isLoggedIn()) {
      liff.login()
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
