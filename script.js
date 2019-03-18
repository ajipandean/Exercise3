// bit.ly/github-jsdc-b1-3
for(let i = 0; i < data.length; i++) {
  let tr = document.createElement('tr')

  for(let prop in data[i]) {
    let td = document.createElement('td')
    td.classList.add('table-data', `${prop}`)

    if(Array.isArray(data[i][prop])) {
      if(data[i][prop].length == 0) {
        let p = document.createElement('p')

        p.innerHTML = 'No ' + prop
        td.appendChild(p)
      } else {
        let ul = document.createElement('ul')

        for(let j = 0; j < data[i][prop].length; j++) {
          let li = document.createElement('li')
          let liText = document.createTextNode(data[i][prop][j])

          li.appendChild(liText)
          ul.appendChild(li)
        }
        
        td.appendChild(ul)
      }
    } else {
      let tdText = document.createTextNode(data[i][prop])

      td.appendChild(tdText)
    }

    tr.appendChild(td)
  }
  
  document.getElementById('tBody').appendChild(tr)
}

function searchFunc() {
  let found
  let input = document.getElementById("input")
  let val = input.value.toUpperCase()
  let table = document.getElementById("table")
  let tr = table.getElementsByTagName("tr")
  for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")
      for (let i = 0; i < td.length; i++) {
          if (td[i].innerHTML.toUpperCase().indexOf(val) > -1) {
              found = true
          }
      }
      if (found) {
          tr[i].style.display = "";
          found = false
      } else {
          tr[i].style.display = "none"
      }
  }
}