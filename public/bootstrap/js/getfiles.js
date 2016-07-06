(function(){
  $.ajax({
    type: 'post',
    url: '/getfiles',
    dataType: 'json'
  }).done( data => {
    console.log(data)
    let html = ''
    data.fileList.map(_item => {
      html += `<li><a href="/express/${_item}" target="_blank">${_item}</a></li>`
    })
    $('#J_allfiles').html(html)
  })
})()