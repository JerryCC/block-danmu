const variables = {
    bilibiliPlayerIds: ['div.bilibili-player'],
    danmuElementIds: ['div.bilibili-player-video-danmaku']
}

let deleteElement = {
  if (document.querySelector(bilibiliPlayer)) {
      const elementName = 'div.bilibili-player-video-danmaku'
      var element = document.querySelector(elementName)
      if (element === null) console.debug('Element ${elementName} does not exist')
      else elemenet.parentElement.removeChild(element)
  }
}

chrome.tabs
