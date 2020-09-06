import Vue from 'vue';
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'
import VuetifyToast from 'vuetify-toast-snackbar'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  },
});

const VuetifyObj =  new Vuetify({
    icons: {
      iconfont: 'mdiSvg',
    },
});

Vue.use(VuetifyToast, {$vuetify: VuetifyObj.framework, y: "top"})

export default VuetifyObj