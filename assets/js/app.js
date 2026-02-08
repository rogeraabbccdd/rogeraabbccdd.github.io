const { reactive, ref } = Vue

const app = Vue.createApp({
  setup () {
    const cards = reactive([
      {
        title: 'UNWelcomeZ',
        img: 'unwz.png',
        description: 'VRDJ 團體',
        flip: false,
        links: [
          { type: 'web', url: 'https://unwelcomez.github.io/' }
        ]
      },
      {
        title: 'TECHMANIA',
        img: 'techmania.jpg',
        description: '免費開源音樂遊戲<br>官網製作、iOS上架及部分功能製作',
        flip: false,
        links: [
          { type: 'github', url: 'https://github.com/techmania-team' },
          { type: 'web', url: 'https://techmania-team.herokuapp.com/' }
        ]
      },
      {
        title: 'Summer Night',
        img: 'summer.jpg',
        description: 'VRChat 夏日海灘 DJ 活動場地',
        flip: false,
        links: [
          { type: 'web', url: 'https://vrchat.com/home/world/wrld_9eee6453-8c18-4ce1-a9f8-d6a0fc69530c' }
        ]
      },
      {
        title: '統神端火鍋',
        img: 'hotpot.png',
        description: '保持平衡，不要讓統神跌倒',
        flip: false,
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/AsiaGodTone-Hotpot-Game' },
          { type: 'web', url: 'https://rogeraabbccdd.github.io/AsiaGodTone-Hotpot-Game/' }
        ]
      },
      {
        title: '早安可可產生器',
        img: 'asacoco.png',
        description: '紀念 VTuber 桐生可可',
        flip: false,
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/Asacoco-Generator' },
          { type: 'web', url: 'https://rogeraabbccdd.github.io/Asacoco-Generator/' }
        ]
      },
      {
        title: '發大財產生器',
        img: 'fadacai.jpg',
        description: '跟著韓總一起發大財!',
        flip: false,
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/Fadacai-Generator' },
          { type: 'web', url: 'https://rogeraabbccdd.github.io/Fadacai-Generator/#/' },
          { type: 'youtube', url: 'https://www.youtube.com/watch?v=VUHiZcP0G4o' },
          { type: 'youtube', url: 'https://www.youtube.com/watch?v=SMHf-PwyT58' },
          { type: 'youtube', url: 'https://www.youtube.com/watch?v=UEjJcfPJo7c' }
        ]
      },
      {
        title: 'DinBenDon',
        description: '泰山職業訓練場用 <br>學生訂便當統計系統',
        img: 'dinbendon.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/PHP-Dinbendon' },
          { type: 'web', url: 'https://dinbendon.kento520.tw/' }
        ]
      },
      {
        title: '網頁前端課程講義',
        description: 'JavaScript 課程講義',
        img: 'f2e.png',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/F2E-book' },
          { type: 'web', url: 'https://rogeraabbccdd.github.io/F2E-book/' }
        ]
      },
      // {
      //   title: '網頁設計乙級解析',
      //   description: '國家技術士網頁設計乙級 <br>術科試題解析',
      //   img: 'bquiz.png',
      //   links: [
      //     { type: 'web', url: 'https://bquiz.kento520.tw/' }
      //   ]
      // },
      // {
      //   title: '泰山職訓網頁班',
      //   description: '泰山職訓網頁班課程介紹頁 <br>',
      //   img: 'taishan.png',
      //   links: [
      //     { type: 'web', url: 'https://wdaweb.github.io/' }
      //   ]
      // },
      {
        title: '易RP',
        description: '以 LINE 生態系量身打造的企業資源管理系統 <br>Line Chatbot 2020 競賽前十名作品',
        img: 'erp.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/line-erp' }
        ]
      },
      {
        title: 'Steam 查價機器人',
        description: '以 Node.js 製作的 Line 機器人 <br>查詢遊戲的目前最低價以及歷史最低價',
        img: 'steam.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/Linebot-Deals' },
          { type: 'github', url: 'https://github.com/rogeraabbccdd/Discordbot-Deals' },
          { type: 'line', url: 'https://line.me/R/ti/p/%40504mcsmm' },
          { type: 'discord', url: 'https://discordapp.com/oauth2/authorize?client_id=634902541687324702&scope=bot&permissions=28832' }
        ]
      },
      // {
      //   title: 'SAO Markdown',
      //   description: 'SAO風格的簡易Markdown筆記本 <br>為手機和SAO Utils桌面網頁工具設計',
      //   img: 'sao.png',
      //   links: [
      //     { type: 'github', url: 'https://github.com/rogeraabbccdd/SAO-Markdown' },
      //     { type: 'web', url: 'https://rogeraabbccdd.github.io/SAO-Markdown/' }
      //   ]
      // },
      {
        title: 'BFVTW Hackers',
        description: '戰地風雲五 <br>台灣社群外掛回報系統',
        img: 'bfvtw.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/BFVTW-Hackers' },
          { type: 'web', url: 'https://rogeraabbccdd.github.io/BFVTW-Hackers/' }
        ]
      },
      {
        title: '財哥語錄 API',
        description: '<a class="text-white" href="https://www.facebook.com/caigezhuanyebinlangtan">財哥專業檳榔攤</a>的語錄 API <br>每天 0 點自動更新內容',
        img: 'zack.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/API-ZackBetelNut' },
          { type: 'web', url: 'https://api.kento520.tw/zack/' }
        ]
      },
      {
        title: '鳥類小百科',
        description: '新北市土城國小圖書館活動網頁 <br>搭配Aurasma製作AR互動小百科',
        img: 'bird.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/TTCPS-Birds' },
          { type: 'youtube', url: 'https://www.youtube.com/watch?v=_V6kBJohrMc' }
        ]
      },
      {
        title: 'VSCode Dark Red',
        description: 'VSCode顏色主題<br>以黑色為主，紅色為輔<br>搭配 Dracula 程式語言配色',
        img: 'vsred.png',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/vscode-dark-red' },
          { type: 'web', url: 'https://marketplace.visualstudio.com/items?itemName=rogeraabbccdd.dark-red-theme' }
        ]
      },
      {
        title: 'GitKraken 中文',
        description: '熱門 Git 工具的中文翻譯補丁',
        img: 'gitkraken.png',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/GitKraken-zh-tw' }
        ]
      },
      {
        title: 'Findjobs',
        description: '2018勞動黑客松第三名',
        img: 'findjobs.png',
        links: [
          { type: 'news', url: 'https://www.facebook.com/mol.labor/posts/2053068398083771' },
          { type: 'web', url: 'http://220.128.133.15/findjobs/public/' }
        ]
      },
      {
        title: 'Rankme',
        description: 'CSGO伺服器插件<br>玩家數據統計和排名系統<br>論壇累計超過二十萬次點閱',
        img: 'rankme.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/Kento-Rankme' },
          { type: 'am', url: 'https://forums.alliedmods.net/showthread.php?p=2467665' }
        ]
      },
      {
        title: 'KDTAG',
        description: 'CSGO伺服器插件<br>在計分板顯示玩家的國家和KD值',
        img: 'kdtag.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/CSGO-KD-Tag' },
          { type: 'am', url: 'https://forums.alliedmods.net/showthread.php?p=2550070' }
        ]
      },
      {
        title: 'Touchdown',
        description: 'CSGO伺服器插件<br>從S4 League移植的遊戲模式',
        img: 'touchdown.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/CSGO-Touchdown' },
          { type: 'am', url: 'https://forums.alliedmods.net/showthread.php?p=2523954' }
        ]
      },
      {
        title: 'CSGO 大亂鬥',
        description: 'CSGO伺服器插件<br>仿任天堂大亂鬥的遊戲模式',
        img: 'smash.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/CSGO-Super-Smash-Bros' },
          { type: 'youtube', url: 'https://www.youtube.com/watch?v=FLj4FEwV6pE' },
          { type: 'am', url: 'https://forums.alliedmods.net/showthread.php?p=324961' }
        ]
      },
      {
        title: 'Damage Text',
        description: 'CSGO伺服器插件<br>顯示傷害數字',
        img: 'dmgtext.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/CSGO-Damage-Text' },
          { type: 'youtube', url: 'https://www.youtube.com/watch?v=qKMxJLE4FJ8' },
          { type: 'am', url: 'https://forums.alliedmods.net/showthread.php?t=303760' }
        ]
      },
      {
        title: 'Custom MVP Anthem',
        description: 'CSGO伺服器插件<br>使用自訂MVP音樂',
        img: 'unknown.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/CSGO-MVP' },
          { type: 'youtube', url: 'https://youtu.be/3hqnPqIJPQY' },
          { type: 'am', url: 'https://forums.alliedmods.net/showthread.php?p=2514835' }
        ]
      },
      {
        title: 'Chicken Pet',
        description: 'CSGO伺服器插件<br>召喚小雞當作玩家寵物<br>可自訂寵物裝飾品',
        img: 'chicken.png',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/CSGO-Chicken-Pet' },
          { type: 'youtube', url: 'https://www.youtube.com/watch?v=vURagVdJuH8' },
          { type: 'am', url: 'https://forums.alliedmods.net/showthread.php?t=309545' }
        ]
      },
      {
        title: 'Custom Radio Sounds',
        description: 'CSGO伺服器插件<br>將遊戲內建無線電改為自訂音效',
        img: 'unknown.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/CSGO-Custom-Radio-Sounds' },
          { type: 'youtube', url: 'https://www.youtube.com/watch?v=lvqaCkStSDM' },
          { type: 'am', url: 'https://forums.alliedmods.net/showthread.php?p=2609949' }
        ]
      },
      {
        title: '羅馬競技生死鬥',
        description: 'CSGO伺服器插件<br>仿羅馬競技生死鬥的遊戲模式',
        img: 'rome.jpg',
        links: [
          { type: 'github', url: 'https://github.com/rogeraabbccdd/CSGO-Custom-Radio-Sounds' },
          { type: 'youtube', url: 'https://www.youtube.com/watch?v=jbV8OouVwBk' }
        ]
      }
      // {
      //   title: 'Kahoot字體',
      //   description: '瀏覽器腳本<br>使Kahoot的中文字放大<br>並將字體改為微軟正黑體',
      //   img: 'kahoot.jpg',
      //   links: [
      //     { type: 'github', url: 'https://github.com/rogeraabbccdd/kahoot-font' },
      //     { type: 'greasy', url: 'https://greasyfork.org/zh-TW/scripts/37573-kahoot-font' }
      //   ]
      // }
    ])
    const mixes = reactive([
      { title: 'ElectroliVR Vol.21', genre: 'House', id: 'electrolivr-vol21' },
      { title: 'IN/UNReal:Nova Vol.1', genre: 'Eurobeat', id: 'inunrealnova-vol1' },
      { title: 'J-Core Life UPRISING', genre: 'J-Core / Hardcore', id: 'j-core-life-uprising' },
      { title: 'MONDAY RELIEF 123rd', genre: 'House', id: 'monday-relief-123rd' },
      { title: 'UNWPA Vol.1', genre: 'Future Bounce', id: 'unwpa-vol1' },
      { title: 'UNWPA Vol.2', genre: 'Eurobeat', id: 'unwpa-vol2' },
      { title: 'イロクラ!! #8', genre: 'Anime / Vtuber / VOCALOID<br>Remix', id: 'irokura-ep8' },
      { title: 'Pioneer DJ Open Deck', genre: 'Dubstep, Hardcore', id: 'pioneer-dj-open-deck' },
      { title: 'MONDAY RELIEF 145th', genre: 'House', id: 'monday-relief-145th' },
      { title: 'UNWPA Vol.3', genre: '-', id: 'unwpa-vol3' },
      { title: 'UNWPA Vol.4', genre: '-', id: 'unwpa-vol4' },
      { title: 'ElectroliVR Vol.27', genre: 'Eurobeat', id: 'electrolivr-vol27' },
      { title: 'UNWPA Vol.5', genre: 'Touhou', id: 'unwpa-vol5' },
      { title: 'UNWPA Vol.6', genre: 'Rhythm Games', id: 'unwpa-vol6' },
    ])
    const mixplayer = ref('electrolivr-vol21')

    const year = ref(new Date().getFullYear())

    const content = ref(null)

    const tab = ref(0)

    const scrollTo = id => {
      const el = document.getElementById(id)
      window.scrollTo({
        top: el.offsetTop - 56,
        behavior: 'smooth'
      })
    }

    const gotoMix = mix => {
      window.open('https://www.mixcloud.com/kento520/' + mix)
    }
    return { cards, mixes, mixplayer, year, content, tab, scrollTo, gotoMix }
  }
})

app.mount('#app')
