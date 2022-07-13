
function fregistrar() {
  //alert('hola')

  var registro = ''
  const x = document.forms['formReg']
  for (let i = 0; i < x.length; i++) {
    registro += x.elements[i].value + ' ';
  }

  registro += '<br>'

  if (localStorage.getItem('data') === null) {
    localStorage.setItem('data', '[]')
  }

  var old_data = JSON.parse(localStorage.getItem('data'))

  old_data.push(registro)

  localStorage.setItem('data', JSON.stringify(old_data))
  // alert('registro')
}

function fmostrar() {
  //alert('hola')
  document.getElementById('pReg').innerHTML = 'N° Nombre Direccion <br> <hr>'
  if (localStorage.getItem('data') != null) {
    var registro = JSON.parse(localStorage.getItem('data'))

    for (let i = 0; i < registro.length; i++) {
      document.getElementById('pReg').innerHTML += registro[i]
    }

  }
  else {
    alert('no hay registro')
  }
}

function limpiar() {
  localStorage.clear()
  document.getElementById('pReg').innerHTML = ''
}