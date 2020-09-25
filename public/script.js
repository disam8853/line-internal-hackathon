var modals = document.querySelectorAll('.modal')
var EID = ''
var LUID = ''
var data = []

var api_url = 'https://8a9a4fb15bb1.ap.ngrok.io'

window.onload = function () {
  M.AutoInit()
  let instances = M.Modal.init(document.querySelector('#modal3'), {
    dismissible: false,
  })
  // open modal to enter employee id
  instances.open()

  checkQueries()
  fetchMenuData()
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

function fetchMenuData() {
  fetch(api_url + '/api/v1/foods?start=2020-09-21&end=2020-09-25', {
    mode: 'cors',
  })
    .then((res) => {
      return res.json()
    })
    .then(handleMenuData)
    .catch((err) => {
      console.log(err)
    })
}

function handleMenuData(menu) {
  date = Object.keys(menu)

  date.map((d, idx) => {
    // append to order data
    data.push({
      food_id: 1,
      date: d,
    })

    const day = new Date(d).toDateString()

    const tbody = document.getElementById('verify-tbody')
    const newRow = tbody.insertRow(-1)
    let newCell = newRow.insertCell(-1)
    const newText = document.createTextNode(day)
    newCell.appendChild(newText)

    newCell = newRow.insertCell(-1)
    newCell.appendChild(document.createTextNode('略過'))

    // console.log(d)
    const new_step_li = document.createElement('li')
    new_step_li.className = 'step'

    const new_step_title = document.createElement('div')
    new_step_title.className = 'step-title waves-effect'
    new_step_title.innerHTML = day

    new_step_li.appendChild(new_step_title)

    const new_step_content = document.createElement('div')
    new_step_content.className = 'step-content'

    const new_card_row = document.createElement('div')
    new_card_row.className = 'card-row'

    menu[d].map((meal) => {
      const new_card = document.createElement('div')
      new_card.className = 'card'
      new_card.setAttribute('data-id', meal.id)

      const new_card_image = document.createElement('div')
      new_card_image.className = 'card-image'

      const new_card_img = document.createElement('img')
      new_card_img.src = meal.picurl

      new_card_image.appendChild(new_card_img)

      new_card.appendChild(new_card_image)

      const new_card_content = document.createElement('div')
      new_card_content.className = 'card-content'

      const new_card_p = document.createElement('p')
      new_card_p.innerHTML =
        meal.name + '<br/> <small>by ' + meal.supplier + '</small>'

      new_card_content.appendChild(new_card_p)

      new_card.appendChild(new_card_content)

      new_card_row.appendChild(new_card)
    })

    new_step_content.appendChild(new_card_row)

    const new_step_actions = document.createElement('div')
    new_step_actions.className = 'step-actions'

    if (idx !== 0) {
      const new_btn = document.createElement('button')
      new_btn.className = 'waves-effect waves-dark btn-flat previous-step'
      new_btn.innerHTML = '上一天'
      new_step_actions.appendChild(new_btn)
    }

    if (idx < date.length - 1) {
      const new_btn = document.createElement('button')
      new_btn.className = 'waves-effect waves-dark btn next-step disabled'
      new_btn.innerHTML = '下一天'
      new_step_actions.appendChild(new_btn)

      const new_skip_btn = document.createElement('button')
      new_skip_btn.className =
        'waves-effect waves-dark btn-flat next-step grey lighten-3 skip'
      new_skip_btn.innerHTML = '略過'
      new_step_actions.appendChild(new_skip_btn)
    } else {
      const new_btn = document.createElement('a')
      new_btn.href = '#modal2'
      new_btn.className = 'waves-effect waves-dark btn modal-trigger disabled'
      new_btn.innerHTML = '提交'
      new_step_actions.appendChild(new_btn)

      const new_skip_btn = document.createElement('a')
      new_skip_btn.href = '#modal2'
      new_skip_btn.className =
        'waves-effect waves-dark btn-flat modal-trigger grey lighten-3 skip'
      new_skip_btn.innerHTML = '略過並提交'
      new_step_actions.appendChild(new_skip_btn)
    }

    new_step_content.appendChild(new_step_actions)

    new_step_li.appendChild(new_step_content)

    document.getElementsByClassName('stepper')[0].appendChild(new_step_li)
  })
  let stepper = document.querySelector('.stepper')
  let stepperInstace = new MStepper(stepper)
  cardEventListener()
  // M.Modal.init(document.querySelector('#modal2'))
}

function checkQueries() {
  const url = new URL(window.location.href)
  const qu = url.searchParams.get('qu')
  if (qu === 'true') {
    let instances = M.Modal.init(document.querySelector('#modal1'), {
      dismissible: false,
    })
    instances.open()
    M.Modal.getInstance(modals[2]).close()
    document.getElementById('submitQuestion').addEventListener('click', () => {
      window.location.href = '/'
      liff.closeWindow()
    })
  } else {
    M.Modal.init(document.querySelector('#modal1'))
  }
}

function eventListener() {
  checkEmployeeListener()

  document.getElementById('submit').addEventListener('click', () => {
    const post_data = {
      emp_id: EID,
      foods: data,
    }
    console.log(JSON.stringify(post_data))
    fetch(api_url + '/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post_data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  })
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
      document.getElementById('eid').classList.remove('invalid')
      document.getElementById('eid').classList.add('valid')
    } else {
      document.getElementById('eid').classList.remove('valid')
      document.getElementById('eid').classList.add('invalid')
      document.getElementById('checkEidSubmit').classList.add('disabled')
    }
  })

  document.getElementById('eid2').addEventListener('input', function (e) {
    // check employee identity
    if (e.target.value === document.getElementById('eid').value) {
      document.getElementById('eid2').classList.remove('invalid')
      document.getElementById('eid2').classList.add('valid')
      if (liff.isLoggedIn() && LUID !== '') {
        document.getElementById('checkEidSubmit').classList.remove('disabled')
      }
    } else {
      document.getElementById('eid2').classList.remove('valid')
      document.getElementById('eid2').classList.add('invalid')
      document.getElementById('checkEidSubmit').classList.add('disabled')
    }
  })

  document
    .getElementById('checkEidSubmit')
    .addEventListener('click', function () {
      // check employee identity
      EID = document.getElementById('eid').value

      // POST eid and luid
      const post_data = {
        emp_id: EID,
        line_uid: LUID,
      }
      console.log(JSON.stringify(post_data))
      fetch(api_url + '/api/v1/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post_data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Success:', data)
        })
        .catch((error) => {
          console.error('Error:', error)
        })

      M.Modal.getInstance(modals[2]).close()
    })
}

function cardEventListener() {
  for (let i = 0; i < 5; i++) {
    const cards = document.querySelectorAll(
      '.step:nth-child(' + (i + 1) + ') .card'
    )
    for (let j = 0; j < cards.length; j++) {
      cards[j].addEventListener('click', (e) => {
        // append to verify area
        const newCell = document.querySelector(
          '#verify-tbody tr:nth-child(' + (i + 1) + ') td:nth-child(2)'
        )
        newCell.innerHTML = cards[j].querySelector('.card-content p').innerHTML

        // undisabled next-step button
        cards[j].parentElement.nextSibling
          .querySelector('.waves-effect.waves-dark.btn')
          .classList.remove('disabled')
        // unselect all other cards in same row
        for (let k = 0; k < cards.length; k++) {
          if (k !== j) {
            cards[k].classList.remove('select')
          }
        }
        // select target card
        cards[j].classList.add('select')
        data[i].food_id = parseInt(cards[j].getAttribute('data-id'))
        console.log(data)
      })
    }

    const skip_btn = document.querySelectorAll(
      '.step:nth-child(' + (i + 1) + ') .skip'
    )[0]
    skip_btn.addEventListener('click', (e) => {
      // set data
      data[i].food_id = 1
      const cards = e.target.parentElement.previousSibling.getElementsByClassName(
        'card'
      )
      // unselect all other cards in same row
      for (let k = 0; k < cards.length; k++) {
        cards[k].classList.remove('select')
      }
      // disabled next step btn
      e.target.previousSibling.classList.add('disabled')
      // edit verify order table
      const newCell = document.querySelector(
        '#verify-tbody tr:nth-child(' + (i + 1) + ') td:nth-child(2)'
      )
      newCell.innerHTML = '未點餐'
    })
  }
}

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
    document.getElementById('lineLogin').classList.remove('hide')
  }
  if (liff.isLoggedIn()) {
    // check if the user is logged in/out, and disable inappropriate button
    // get profile and show
    liff
      .getProfile()
      .then(function (profile) {
        const text = profile.displayName + '，下週您想來點...'
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
