module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:[
    ["component", 
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]
  // ],
  // ignore: [
  //   './src/lib/mui/js/mui.js',
  //   './src/lib/mui/js/mui.min.js',
  //   './src/lib/mui/js/mui.picker.js',
  //   './src/lib/mui/js/mui.poppicker.js'
  // ]
}
