# neteast-music-vue

### Deployed link:
https://neteast.netlify.com/

### It is a mobile first responsive web app for listening music from Neteast cloud platform which is using a open source API: 
https://github.com/Binaryify/NeteaseCloudMusicApi

### The stack is based on Vue, VueX, VueRouter, Vuetify, Axios, PWA, SCSS, Jest, Nightwatch, Eslint, Babel and others.

## need a env file to start this app
```
.env
.env.development
VUE_APP_baseURL=Your Server URL 
```

![picture 01](https://github.com/tatoMa/neteast-cloud-music-player/blob/master/01.jpg?raw=true)

![picture 02](https://github.com/tatoMa/neteast-cloud-music-player/blob/master/02.jpg?raw=true)

![picture 03](https://github.com/tatoMa/neteast-cloud-music-player/blob/master/03.png?raw=true)

Backend
- [x] compressed api by g-zip
- [x] proxy settings

Frontend
- [ ] add full PWA support?
- [ ] Progressive Loading? different layout or resources based on device types and network speed
- [ ] download music function
- [ ] redo player animation and transaction
- [ ] UX/UI logic refactor
- [ ] add Skeleton loaders
- [ ] Lyric sync
- [ ] player loop/random function
- [ ] Home page desktop view add playlist, player, and lyric page
- [ ] Notification for non-playable music
- [ ] Right player drawer for desktop view
- [ ] Dynamic switch IOS and other platform config
- [x] Fixed safari issue and related issues on IOS platform
- [x] Fixed desktop safari playing issues
- [x] Home page restructure for desktop view
- [x] theme and color settings
- [x] setting page
- [x] album page
- [x] artist page
- [x] large image adaptive loading
- [x] music progress slider click and jump to time function
- [x] Lyric display
- [x] fix Chrome security policy don't allow instantiate AudioContext before load audio source 
- [x] fix music url request 403 error (by adding referrer head into index page)
- [x] reduce the bundle size and loading size(to homepage 440k total)
- [x] material icon tree-shaking (Reduce 300K after build the bundle)
- [x] message tab with styled component and function
- [x] click and play music without wipeout playlist
- [x] audio analyser and synchronizer effect by web api and drawing on canvas
- [x] playlist tab in player
- [x] player tabs and sections
- [x] music wave effect (removed)
- [x] player buttons
- [x] slider for volume control
- [x] slider for audio progress
- [x] full screen player mode
- [x] animated transition
- [x] hot music page Tabs and sections
- [x] theme switch (dark and light)
- [x] pagination for all list
- [x] add to playlist function
- [x] play all music in list function
- [x] responsive design implement
- [x] search
- [x] navigation drawer
- [x] hot music page 
- [x] player controller
- [x] state management init
- [x] utils and apis
- [x] hot playlists page 


### need a env file to start this app
```
.env
VUE_APP_baseURL=Your URL
```

#### Project setup
```
npm install
```

##### Compiles and hot-reloads for development
```
npm run serve
```

##### Compiles and minifies for production
```
npm run build
```

##### Run your unit tests
```
npm run test:unit
```

##### Run your end-to-end tests
```
npm run test:e2e
```

##### Lints and fixes files
```
npm run lint
```

##### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
