const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Cars',
      image: './assets/images/land-rover-c1.jpg',
      url: 'https://www.landrover.com.br/vehicles/range-rover-evoque/index.html',
      description: 'Land Rover',
      brand: 'Vue Mastery',
      inventory: 11,
      inStock: false,
      details: ['Vmax = 230', '0-100 = 7.6s', '1997 cc'],
      variants: [
        { id: 1234, color: '#001a00', image: './assets/images/land-rover-c1.jpg'},
        { id: 2345, color: '#fefbcd', image: './assets/images/land-rover-c2.jpg'}
      ]
    }
  },
  methods: {
    addToCart(){
      this.cart += 1
    },
    removeFromCart(){
      if(this.cart >= 1){
        this.cart -= 1
      }
    },
    updateImage(image) {
      this.image = image
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    }
  }
})
