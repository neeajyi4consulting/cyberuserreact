module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'display': 'Oswald',
      'condensed':'Open Sans Condensed',
      'shippori':'Shippori Antique',
      'abril':'Abril Fatface',
      'zilla':'Zilla Slab',
      'satisfy':'Satisfy',
      'dm':'DM Serif Display',
      'playfair':'Playfair Display',
      'garamond':'EB Garamond',
      'acme':'Acme',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
