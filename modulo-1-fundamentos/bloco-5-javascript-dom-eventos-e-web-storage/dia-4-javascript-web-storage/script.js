const savedData = {}

window.onload = () => {
  if (localStorage.length) {
    const recoveredData = JSON.parse(localStorage.getItem('savedPreferences'));
    if (recoveredData.backgroundColor) {documentBody.style.backgroundColor = recoveredData.backgroundColor};
    if (recoveredData.color) {documentParagraph.forEach(p => {
      p.style.color = recoveredData.color
    })}
    if (recoveredData.fontSize) {documentParagraph.forEach(p => {
      p.style.fontSize = recoveredData.fontSize
    })}
    if (recoveredData.lineHeight) {documentParagraph.forEach(p => {
      p.style.lineHeight = recoveredData.lineHeight
    })}
    if (recoveredData.fontFamily) {documentParagraph.forEach(p => {
      p.style.fontFamily = recoveredData.fontFamily
    })}
    console.log(recoveredData)
    console.log(recoveredData.backgroundColor)
  }
}

const buttonsBgColor = document.querySelectorAll('.bg-color');
const buttonsFontColor = document.querySelectorAll('.font-color');
const buttonsFontSize = document.querySelectorAll('.font-size');
const buttonsFontLineHeight = document.querySelectorAll('.font-line-height');
const buttonsFontFamily = document.querySelectorAll('.font-family');
const documentBody = document.querySelector('body');
const documentParagraph = document.querySelectorAll('main p');
const buttonSave = document.querySelector('#save-settings-btn');



buttonsBgColor[0].addEventListener('click', () => {
documentBody.style.backgroundColor = 'black'
})

buttonsBgColor[1].addEventListener('click', () => {
documentBody.style.backgroundColor = 'white'
})

buttonsBgColor[2].addEventListener('click', () => {
documentBody.style.backgroundColor = 'gray'
})


const alterParagraphStyle = (target, index, color, styleValue) => {
 target[index].addEventListener('click', () => {
   documentParagraph.forEach(element =>{
     element.style[color] = styleValue;
   })
 })
}

alterParagraphStyle(buttonsFontColor, 0, 'color', 'black')
alterParagraphStyle(buttonsFontColor, 1, 'color', 'white')
alterParagraphStyle(buttonsFontColor, 2, 'color', 'gray')

alterParagraphStyle(buttonsFontSize, 0, 'fontSize', '1em')
alterParagraphStyle(buttonsFontSize, 1, 'fontSize', '1.5em')
alterParagraphStyle(buttonsFontSize, 2, 'fontSize', '2em')

alterParagraphStyle(buttonsFontLineHeight, 0, 'lineHeight', '1.25em')
alterParagraphStyle(buttonsFontLineHeight, 1, 'lineHeight', '1.5em')
alterParagraphStyle(buttonsFontLineHeight, 2, 'lineHeight', '1.75em')

alterParagraphStyle(buttonsFontFamily, 0, 'fontFamily', 'Arial')
alterParagraphStyle(buttonsFontFamily, 1, 'fontFamily', 'Times New Roman')
alterParagraphStyle(buttonsFontFamily, 2, 'fontFamily', 'Courier New')

buttonSave.addEventListener('click', () => {
  if (documentBody.style.backgroundColor) {savedData.backgroundColor = documentBody.style.backgroundColor};
  if (documentParagraph[0].style.color) {savedData.color = documentParagraph[0].style.color;};
  if (documentParagraph[0].style.fontSize) {savedData.fontSize = documentParagraph[0].style.fontSize; };
  if (documentParagraph[0].style.lineHeight) {savedData.lineHeight = documentParagraph[0].style.lineHeight;};
  if (documentParagraph[0].style.fontFamily) {savedData.fontFamily = documentParagraph[0].style.fontFamily;};
  if (Object.keys(savedData).length) {localStorage.setItem('savedPreferences', JSON.stringify(savedData))};
})

