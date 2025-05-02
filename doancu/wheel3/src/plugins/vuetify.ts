import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default createVuetify({
  theme: { defaultTheme: 'dark' },
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})
