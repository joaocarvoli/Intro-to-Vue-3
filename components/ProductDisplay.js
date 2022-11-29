app.component('product-display', {
  template:
  /*html*/
  `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:class="{ 'out-of-stock-img': !inStock }" v-bind:src="image" alt="">
        </div>
        <div class="cart">Cart({{ cart }})</div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory >= 0">Almost sold out</p>
          <p v-else>Out of Stock</p>
          <p>This cars is a <a v-bind:href="url">{{ description }}</a></p>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)"
            class="color-circle"
            v-bind:style="{ backgroundColor: variant.color}">
          </div>
          
          <button 
            class="button" 
            :class="{ disabledButton: !inStock}"
            :disabled="!inStock" 
            v-on:click="addToCart"
          >Add to Cart</button>
          <button class="button2" v-on:click="removeFromCart">Remove from Cart</button>
        </div>
      </div>
    </div>`,
    data() {
      return {
        product: 'Cars',
        selectedVariant: 0,
        url: 'https://www.landrover.com.br/vehicles/range-rover-evoque/index.html',
        description: 'Land Rover',
        brand: 'Vue Mastery',
        inventory: 11,
        details: ['Vmax = 230', '0-100 = 7.6s', '1997 cc'],
        variants: [
          { id: 1234, color: '#001a00', image: './assets/images/land-rover-c1.jpg', quantity: 0, onSale: true},
          { id: 2345, color: '#fefbcd', image: './assets/images/land-rover-c2.jpg', quantity: 28, onSale: false}
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
      updateVariant(index) {
        this.selectedVariant = index
      }
    },
    computed: {
      title() {
        return this.brand + ' ' + this.product
      },
      image(){
        return this.variants[this.selectedVariant].image
      },
      inStock(){
        return this.variants[this.selectedVariant].quantity
      }
    }
})