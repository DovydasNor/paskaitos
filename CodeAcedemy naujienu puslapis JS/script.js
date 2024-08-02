let contentElement = document.querySelector('#content-id')

let containerElement = document.createElement('div')
containerElement.classList.add('container')
contentElement.append(containerElement)

let mainElement = document.createElement('section')
mainElement.classList.add('main')
containerElement.append(mainElement)

let h1Element = document.createElement('h1')
h1Element.textContent = 'Naujienos'
mainElement.append(h1Element)
console.dir(h1Element)

// nr 1 big-link:
let bigWrapperElement = document.createElement('div')
bigWrapperElement.classList.add('big-wrapper')
mainElement.append(bigWrapperElement)

let bigLinkElement = document.createElement('a')
bigLinkElement.classList.add('big-link')
bigLinkElement.setAttribute('href', '#')
bigWrapperElement.append(bigLinkElement)

let big2BoxElement = document.createElement('div')
big2BoxElement.classList.add('big2-box')
bigLinkElement.append(big2BoxElement)

let big2Element = document.createElement('div')
big2Element.classList.add('big2')
big2BoxElement.append(big2Element)

let imgElement = document.createElement('img')
imgElement.setAttribute('src', 'images/Serbintaitė-big.jpg')
imgElement.setAttribute('alt', 'Serbintaite foto')
big2Element.append(imgElement)

let bigContentElement = document.createElement('div')
bigContentElement.classList.add('content')
big2BoxElement.append(bigContentElement)

let spanBlueElement = document.createElement('span')
spanBlueElement.classList.add('blue-text')
spanBlueElement.textContent = 'KARJERA'
bigContentElement.append(spanBlueElement)

let h2Content = document.createElement('h2')
h2Content.textContent = 'Kaip junior’ui išnaudoti „LinkedIn“ savo naudai?'
bigContentElement.append(h2Content)

let dateSpanElement = document.createElement('span')
dateSpanElement.classList.add('date')
dateSpanElement.textContent = '2024-05-28'
bigContentElement.append(dateSpanElement)

// nr 2 big link:
let bigWrapperElement2 = document.createElement('div')
bigWrapperElement2.classList.add('big-wrapper')
mainElement.append(bigWrapperElement)

let bigLinkElement2 = document.createElement('a')
bigLinkElement2.classList.add('big-link')
bigLinkElement2.setAttribute('href', '#')
bigWrapperElement.append(bigLinkElement2)

let big2BoxElement2 = document.createElement('div')
big2BoxElement2.classList.add('big2-box')
bigLinkElement2.append(big2BoxElement2)

let big2Element2 = document.createElement('div')
big2Element2.classList.add('big2')
big2BoxElement2.append(big2Element2)

let imgElement2 = document.createElement('img')
imgElement2.setAttribute('src', 'images/Pauliaus-big.png')
imgElement2.setAttribute('alt', 'Paulius foto')
big2Element2.append(imgElement2)

let bigContentElement2 = document.createElement('div')
bigContentElement2.classList.add('content')
big2BoxElement2.append(bigContentElement2)

let spanBlueElement2 = document.createElement('span')
spanBlueElement2.classList.add('blue-text')
spanBlueElement2.textContent = 'SĖKMĖS ISTORIJOS'
bigContentElement2.append(spanBlueElement2)

let h2Content2 = document.createElement('h2')
h2Content2.textContent = 'Sėkmės istorija – įsidarbinimas į Asteri'
bigContentElement2.append(h2Content2)

let dateSpanElement2 = document.createElement('span')
dateSpanElement2.classList.add('date')
dateSpanElement2.textContent = '2024-05-23'
bigContentElement2.append(dateSpanElement2)

// small links elements:
let smallWrapperElement = document.createElement('div')
smallWrapperElement.classList.add('small-wrapper')
mainElement.append(smallWrapperElement)

let smallBoxLinkElement = document.createElement('a')
smallBoxLinkElement.classList.add('small-box-link')
smallBoxLinkElement.setAttribute('href', '#')
smallWrapperElement.append(smallBoxLinkElement)

let smallBoxElement = document.createElement('div')
smallBoxElement.classList.add('small-box')
smallBoxLinkElement.append(smallBoxElement)

let smallElement = document.createElement('div')
smallElement.classList.add('small')
smallBoxElement.append(smallElement)

let smallImg = document.createElement('img')
smallImg.setAttribute('src', 'images/Ovidijus.jpeg')
smallImg.setAttribute('alt', 'Ovidijus foto')
smallElement.append(smallImg)

let smallContentElement = document.createElement('div')
smallContentElement.classList.add('small-content')
smallBoxElement.append(smallContentElement)

let smallBlueText = document.createElement('span')
smallBlueText.classList.add('blue-text')
smallBlueText.textContent = 'SĖKMĖS ISTORIJOS'
smallContentElement.append(smallBlueText)

let smallH2 = document.createElement('h2')
smallH2.textContent = 'Sėkmės istorija – įsidarbinimas į Bentley Systems'
smallContentElement.append(smallH2)

let smallDate = document.createElement('span')
smallDate.classList.add('date')
smallDate.textContent = '2024-04-25'
smallContentElement.append(smallDate)


let smallBoxLinkElement2 = document.createElement('a')
smallBoxLinkElement2.classList.add('small-box-link')
smallBoxLinkElement2.setAttribute('href', '#')
smallWrapperElement.append(smallBoxLinkElement2)

let smallBoxElement2 = document.createElement('div')
smallBoxElement2.classList.add('small-box')
smallBoxLinkElement2.append(smallBoxElement2)

let smallElement2 = document.createElement('div')
smallElement2.classList.add('small')
smallBoxElement2.append(smallElement2)

let smallImg2 = document.createElement('img')
smallImg2.setAttribute('src', 'images/Milda.jpg')
smallImg2.setAttribute('alt', 'Milda foto')
smallElement2.append(smallImg2)

let smallContentElement2 = document.createElement('div')
smallContentElement2.classList.add('small-content')
smallBoxElement2.append(smallContentElement2)

let smallBlueText2 = document.createElement('span')
smallBlueText2.classList.add('blue-text')
smallBlueText2.textContent = 'SĖKMĖS ISTORIJOS'
smallContentElement2.append(smallBlueText2)

let smallH22 = document.createElement('h2')
smallH22.textContent = 'Sėkmės istorija – įsidarbinimas į Fresh media'
smallContentElement2.append(smallH22)

let smallDate2 = document.createElement('span')
smallDate2.classList.add('date')
smallDate2.textContent = '2024-04-25'
smallContentElement2.append(smallDate2)



let smallBoxLinkElement3 = document.createElement('a')
smallBoxLinkElement3.classList.add('small-box-link')
smallBoxLinkElement3.setAttribute('href', '#')
smallWrapperElement.append(smallBoxLinkElement3)

let smallBoxElement3 = document.createElement('div')
smallBoxElement3.classList.add('small-box')
smallBoxLinkElement3.append(smallBoxElement3)

let smallElement3 = document.createElement('div')
smallElement3.classList.add('small')
smallBoxElement3.append(smallElement3)

let smallImg3 = document.createElement('img')
smallImg3.setAttribute('src', 'images/Giedrius.jpg')
smallImg3.setAttribute('alt', 'Giedrius foto')
smallElement3.append(smallImg3)

let smallContentElement3 = document.createElement('div')
smallContentElement3.classList.add('small-content')
smallBoxElement3.append(smallContentElement3)

let smallBlueText3 = document.createElement('span')
smallBlueText3.classList.add('blue-text')
smallBlueText3.textContent = 'SĖKMĖS ISTORIJOS'
smallContentElement3.append(smallBlueText3)

let smallH23 = document.createElement('h2')
smallH23.textContent = 'Sėkmės istorija – įsidarbinimas į Visma Tech'
smallContentElement3.append(smallH23)

let smallDate3 = document.createElement('span')
smallDate3.classList.add('date')
smallDate3.textContent = '2024-04-25'
smallContentElement3.append(smallDate3)


let smallBoxLinkElement4 = document.createElement('a')
smallBoxLinkElement4.classList.add('small-box-link')
smallBoxLinkElement4.setAttribute('href', '#')
smallWrapperElement.append(smallBoxLinkElement4)

let smallBoxElement4 = document.createElement('div')
smallBoxElement4.classList.add('small-box')
smallBoxLinkElement4.append(smallBoxElement4)

let smallElement4 = document.createElement('div')
smallElement4.classList.add('small')
smallBoxElement4.append(smallElement4)

let smallImg4 = document.createElement('img')
smallImg4.setAttribute('src', 'images/Marius.jpeg')
smallImg4.setAttribute('alt', 'Marius foto')
smallElement4.append(smallImg4)

let smallContentElement4 = document.createElement('div')
smallContentElement4.classList.add('small-content')
smallBoxElement4.append(smallContentElement4)

let smallBlueText4 = document.createElement('span')
smallBlueText4.classList.add('blue-text')
smallBlueText4.textContent = 'NAUJIENOS'
smallContentElement4.append(smallBlueText4)

let smallH24 = document.createElement('h2')
smallH24.textContent = 'Už verslo partnerystes „CodeAcademy“ programavimo akademijoje bus atsakingas IT ekspertas Marius Pareščius'
smallContentElement4.append(smallH24)

let smallDate4 = document.createElement('span')
smallDate4.classList.add('date')
smallDate4.textContent = '2024-04-16'
smallContentElement4.append(smallDate4)

// All news button:
let allNewsButtonElement = document.createElement('a')
allNewsButtonElement.classList.add('visos-link')
allNewsButtonElement.setAttribute('href', '#')
smallWrapperElement.append(allNewsButtonElement)

let allNewsElement = document.createElement('div')
allNewsElement.classList.add('visos-naujienos')
allNewsButtonElement.append(allNewsElement)

let allNewsParElement = document.createElement('p')
allNewsParElement.textContent = 'Visos naujienos'
allNewsElement.append(allNewsParElement)

let allNewsImgElement = document.createElement('img')
allNewsImgElement.setAttribute('src', 'images/arrow_forward_ios_24dp_FILL0_wght400_GRAD0_opsz24.svg')
allNewsElement.append(allNewsImgElement)

// Videos section:
let videosWrapperElement = document.createElement('div')
videosWrapperElement.classList.add('irasai-wrapper')
mainElement.append(videosWrapperElement)

let bigVideoElement = document.createElement('div')
bigVideoElement.classList = 'big-video'
videosWrapperElement.append(bigVideoElement)

let iframeElement = document.createElement('iframe')
iframeElement.setAttribute('src', 'https://www.youtube.com/embed/Rz6bswWbPqw?si=hQr1EQgQmh4u6i-P')
iframeElement.setAttribute('title', 'YouTube video player')
iframeElement.setAttribute('width', '560')
iframeElement.setAttribute('height', '315')
bigVideoElement.append(iframeElement)

let videosH2Element = document.createElement('h2')
videosH2Element.textContent = '#6 Studentės istorija: sėkmė slypi disciplinoje'
bigVideoElement.append(videosH2Element)

// small videos:
let smallVideoBoxElement = document.createElement('div')
smallVideoBoxElement.classList.add('small-video-box')
videosWrapperElement.append(smallVideoBoxElement)


let smallVideoElement = document.createElement('div')
smallVideoElement.classList = 'small-video'
smallVideoBoxElement.append(smallVideoElement)

let smallIframeElement = document.createElement('iframe')
smallIframeElement.setAttribute('src', 'https://www.youtube.com/embed/yovsPjuDElw?si=uzIbDVyp--58_tM3')
smallIframeElement.setAttribute('title', 'YouTube video player')
smallIframeElement.setAttribute('width', '560')
smallIframeElement.setAttribute('height', '315')
smallVideoElement.append(smallIframeElement)

let smallVideosH2Element = document.createElement('h2')
smallVideosH2Element.textContent = '#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien'
smallVideoElement.append(smallVideosH2Element)


let smallVideoElement2 = document.createElement('div')
smallVideoElement2.classList = 'small-video'
smallVideoBoxElement.append(smallVideoElement2)

let smallIframeElement2 = document.createElement('iframe')
smallIframeElement2.setAttribute('src', 'https://www.youtube.com/embed/7X4iX-D6ymQ?si=BbrGst9YICGmlAJH')
smallIframeElement2.setAttribute('title', 'YouTube video player')
smallIframeElement2.setAttribute('width', '560')
smallIframeElement2.setAttribute('height', '315')
smallVideoElement2.append(smallIframeElement2)

let smallVideosH2Element2 = document.createElement('h2')
smallVideosH2Element2.textContent = 'Susipažink su mūsų įdarbinimo partneriais – Danske Bank!'
smallVideoElement2.append(smallVideosH2Element2)

// All videos button:
let allVideosButtonElement = document.createElement('a')
allVideosButtonElement.classList.add('visos-link')
allVideosButtonElement.setAttribute('href', '#')
smallVideoBoxElement.append(allVideosButtonElement)

let allVideosElement = document.createElement('div')
allVideosElement.classList.add('visos-naujienos')
allVideosButtonElement.append(allVideosElement)

let allVideosParElement = document.createElement('p')
allVideosParElement.textContent = 'Visi vaizdo įrašai'
allVideosElement.append(allVideosParElement)

let allVideosImgElement = document.createElement('img')
allVideosImgElement.setAttribute('src', 'images/arrow_forward_ios_24dp_FILL0_wght400_GRAD0_opsz24.svg')
allVideosElement.append(allVideosImgElement)

// Aside section:
let asideElement = document.createElement('aside')
containerElement.append(asideElement)

let playerWrapperElement = document.createElement('div')
playerWrapperElement.classList.add('player-wrapper')
asideElement.append(playerWrapperElement)

let playerWrapperH2 = document.createElement('h2')
playerWrapperH2.textContent = 'Podcastai ir radijo laidos'
playerWrapperElement.append(playerWrapperH2)

// Podcast Playlist:
let playerElement = document.createElement('div')
playerElement.classList.add('player')
playerWrapperElement.append(playerElement)

let upElement = document.createElement('div')
upElement.classList.add('virsus')
playerElement.append(upElement)

let upImgElement = document.createElement('img')
upImgElement.setAttribute('src', 'images/technologiju ritmu.png')
upImgElement.setAttribute('alt', 'some kind of image')
upElement.append(upImgElement)

let upRandomDivElement = document.createElement('div')
upElement.append(upRandomDivElement)

let upRandomDivParElement = document.createElement('p')
upRandomDivParElement.textContent = 'Trukmė: 7:55'
upRandomDivElement.append(upRandomDivParElement)

let playElement = document.createElement('div')
playElement.classList.add('play')
upElement.append(playElement)

let playButton = document.createElement('button')
playElement.append(playButton)

let playButtonImg = document.createElement('img')
playButtonImg.setAttribute('src', 'images/play_arrow_24dp_FILL0_wght400_GRAD0_opsz24.svg')
playButtonImg.setAttribute('alt', 'play button')
playButton.append(playButtonImg)

let downElement = document.createElement('div')
downElement.classList.add('apacia')
playerElement.append(downElement)

let downElementH3 = document.createElement('h3')
downElementH3.textContent = 'Pojūčius pirštų galiukams sugražinti gali smegenų implantas'
downElement.append(downElementH3)

let downElementSpan = document.createElement('span')
downElementSpan.classList.add('date')
downElementSpan.textContent = '2021-09-02'
downElement.append(downElementSpan)


let playerElement2 = document.createElement('div')
playerElement2.classList.add('player')
playerWrapperElement.append(playerElement2)

let upElement2 = document.createElement('div')
upElement2.classList.add('virsus')
playerElement2.append(upElement2)

let upImgElement2 = document.createElement('img')
upImgElement2.setAttribute('src', 'images/technologiju ritmu.png')
upImgElement2.setAttribute('alt', 'some kind of image')
upElement2.append(upImgElement2)

let upRandomDivElement2 = document.createElement('div')
upElement2.append(upRandomDivElement2)

let upRandomDivParElement2 = document.createElement('p')
upRandomDivParElement2.textContent = 'Trukmė: 7:54'
upRandomDivElement2.append(upRandomDivParElement2)

let playElement2 = document.createElement('div')
playElement2.classList.add('play')
upElement2.append(playElement2)

let playButton2 = document.createElement('button')
playElement2.append(playButton2)

let playButtonImg2 = document.createElement('img')
playButtonImg2.setAttribute('src', 'images/play_arrow_24dp_FILL0_wght400_GRAD0_opsz24.svg')
playButtonImg2.setAttribute('alt', 'play button')
playButton2.append(playButtonImg2)

let downElement2 = document.createElement('div')
downElement2.classList.add('apacia')
playerElement2.append(downElement2)

let downElementH32 = document.createElement('h3')
downElementH32.textContent = 'Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“'
downElement2.append(downElementH32)

let downElementSpan2 = document.createElement('span')
downElementSpan2.classList.add('date')
downElementSpan2.textContent = '2021-08-25'
downElement2.append(downElementSpan2)


let playerElement3 = document.createElement('div')
playerElement3.classList.add('player')
playerWrapperElement.append(playerElement3)

let upElement3 = document.createElement('div')
upElement3.classList.add('virsus')
playerElement3.append(upElement3)

let upImgElement3 = document.createElement('img')
upImgElement3.setAttribute('src', 'images/technologiju ritmu.png')
upImgElement3.setAttribute('alt', 'some kind of image')
upElement3.append(upImgElement3)

let upRandomDivElement3 = document.createElement('div')
upElement3.append(upRandomDivElement3)

let upRandomDivParElement3 = document.createElement('p')
upRandomDivParElement3.textContent = 'Trukmė: 9:22'
upRandomDivElement3.append(upRandomDivParElement3)

let playElement3 = document.createElement('div')
playElement3.classList.add('play')
upElement3.append(playElement3)

let playButton3 = document.createElement('button')
playElement3.append(playButton3)

let playButtonImg3 = document.createElement('img')
playButtonImg3.setAttribute('src', 'images/play_arrow_24dp_FILL0_wght400_GRAD0_opsz24.svg')
playButtonImg3.setAttribute('alt', 'play button')
playButton3.append(playButtonImg3)

let downElement3 = document.createElement('div')
downElement3.classList.add('apacia')
playerElement3.append(downElement3)

let downElementH33 = document.createElement('h3')
downElementH33.textContent = 'Kaip gyvensime 2031-aisiais? 10 esminių prognozių'
downElement3.append(downElementH33)

let downElementSpan3 = document.createElement('span')
downElementSpan3.classList.add('date')
downElementSpan3.textContent = '2021-08-18'
downElement3.append(downElementSpan3)


let playerElement4 = document.createElement('div')
playerElement4.classList.add('player')
playerWrapperElement.append(playerElement4)

let upElement4 = document.createElement('div')
upElement4.classList.add('virsus')
playerElement4.append(upElement4)

let upImgElement4 = document.createElement('img')
upImgElement4.setAttribute('src', 'images/technologiju ritmu.png')
upImgElement4.setAttribute('alt', 'some kind of image')
upElement4.append(upImgElement4)

let upRandomDivElement4 = document.createElement('div')
upElement4.append(upRandomDivElement4)

let upRandomDivParElement4 = document.createElement('p')
upRandomDivParElement4.textContent = 'Trukmė: 9:22'
upRandomDivElement4.append(upRandomDivParElement4)

let playElement4 = document.createElement('div')
playElement4.classList.add('play')
upElement4.append(playElement4)

let playButton4 = document.createElement('button')
playElement4.append(playButton4)

let playButtonImg4 = document.createElement('img')
playButtonImg4.setAttribute('src', 'images/play_arrow_24dp_FILL0_wght400_GRAD0_opsz24.svg')
playButtonImg4.setAttribute('alt', 'play button')
playButton4.append(playButtonImg4)

let downElement4 = document.createElement('div')
downElement4.classList.add('apacia')
playerElement4.append(downElement4)

let downElementH34 = document.createElement('h3')
downElementH34.textContent = 'Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“'
downElement4.append(downElementH34)

let downElementSpan4 = document.createElement('span')
downElementSpan4.classList.add('date')
downElementSpan4.textContent = '2021-08-11'
downElement4.append(downElementSpan4)


// Events:
let eventsWrapper = document.createElement('div')
eventsWrapper.classList.add('renginiai-wrapper')
asideElement.append(eventsWrapper)

let events = document.createElement('div')
events.classList.add('renginiai')
eventsWrapper.append(events)

let eventsImgBox = document.createElement('div')
eventsImgBox.classList.add('renginiai-img')
events.append(eventsImgBox)

let eventsImg = document.createElement('img')
eventsImg.setAttribute('src', 'images/CA_event-1024x576.png')
eventsImg.setAttribute('alt', 'event image')
eventsImgBox.append(eventsImg)

let dateIcon = document.createElement('div')
dateIcon.classList.add('date-icon')
events.append(dateIcon)

let dateDay = document.createElement('div')
dateDay.classList.add('day')
dateIcon.append(dateDay)

let dateDayH4 = document.createElement('h4')
dateDayH4.textContent = '18'
dateDay.append(dateDayH4)

let dateMonth = document.createElement('div')
dateMonth.classList.add('month')
dateIcon.append(dateMonth)

let dateMonthSpan = document.createElement('h4')
dateMonthSpan.textContent = 'BIR'
dateDay.append(dateMonthSpan)

let eventContent = document.createElement('div')
eventContent.classList.add('renginiai-content')
events.append(eventContent)

let eventContentSpan = document.createElement('span')
eventContentSpan.textContent = 'Upės g. 21, Greenhall 1, 10 aukštas ir Online'
eventContent.append(eventContentSpan)

let eventContentH3 = document.createElement('h3')
eventContentH3.textContent = 'Java: Kodėl ji vis dar svarbi IT rinkoje?'
eventContent.append(eventContentH3)


let dateIcon2 = document.createElement('div')
dateIcon2.classList.add('date-icon')
events.append(dateIcon2)

let dateDay2 = document.createElement('div')
dateDay2.classList.add('day')
dateIcon2.append(dateDay2)

let dateDayH42 = document.createElement('h4')
dateDayH42.textContent = '30'
dateDay2.append(dateDayH42)

let dateMonth2 = document.createElement('div')
dateMonth2.classList.add('month')
dateIcon2.append(dateMonth2)

let dateMonthSpan2 = document.createElement('h4')
dateMonthSpan2.textContent = 'GEG'
dateDay2.append(dateMonthSpan2)

let eventContent2 = document.createElement('div')
eventContent2.classList.add('renginiai-content')
events.append(eventContent2)

let eventContentSpan2 = document.createElement('span')
eventContentSpan2.textContent = 'Upės g. 21, Greenhall 1, 10 aukštas ir Online'
eventContent2.append(eventContentSpan2)

let eventContentH32 = document.createElement('h3')
eventContentH32.textContent = 'CodeAcademy galimybės verslui'
eventContent2.append(eventContentH32)


let dateIcon3 = document.createElement('div')
dateIcon3.classList.add('date-icon')
events.append(dateIcon3)

let dateDay3 = document.createElement('div')
dateDay3.classList.add('day')
dateIcon3.append(dateDay3)

let dateDayH43 = document.createElement('h4')
dateDayH43.textContent = '24'
dateDay3.append(dateDayH43)

let dateMonth3 = document.createElement('div')
dateMonth3.classList.add('month')
dateIcon3.append(dateMonth3)

let dateMonthSpan3 = document.createElement('h4')
dateMonthSpan3.textContent = 'GEG'
dateDay3.append(dateMonthSpan3)

let eventContent3 = document.createElement('div')
eventContent3.classList.add('renginiai-content')
events.append(eventContent3)

let eventContentSpan3 = document.createElement('span')
eventContentSpan3.textContent = 'Upės g. 21, Greenhall 1, 10 aukštas ir Online'
eventContent3.append(eventContentSpan3)

let eventContentH33 = document.createElement('h3')
eventContentH33.textContent = 'COMIC CON BALTICS 2024'
eventContent3.append(eventContentH33)

// Events all news button:
let allEventsButtonElement = document.createElement('a')
allEventsButtonElement.classList.add('visos-link')
allEventsButtonElement.setAttribute('href', '#')
eventsWrapper.append(allEventsButtonElement)

let allEventsElement = document.createElement('div')
allEventsElement.classList.add('visos-naujienos')
allEventsButtonElement.append(allEventsElement)

let allEventsParElement = document.createElement('p')
allEventsParElement.textContent = 'Daugiau'
allEventsElement.append(allEventsParElement)

let allEventsImgElement = document.createElement('img')
allEventsImgElement.setAttribute('src', 'images/arrow_forward_ios_24dp_FILL0_wght400_GRAD0_opsz24.svg')
allEventsElement.append(allEventsImgElement)