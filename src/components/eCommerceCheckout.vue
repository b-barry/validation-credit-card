
<template>
  <div class="hello">
    <div class="container">
    <div class='col-xs-12 col-sm-6 col-sm-offset-3'>
      <div class='page-header'>
        <h1>Order now</h1>
      </div>

      <div class='panel'>
        <div class='panel-body'>
          <form>
            <div class='form-group'>
              <label>Credit card number:</label>
              <div class='input-group'>
                <input type="number" class='form-control' id='card' v-model="creditCardNumber" v-on:keyup="updateCreditCardType">
                <span class='input-group-addon' id='type'  >{{{creditCardType}}}</span>
              </div>
            </div>
            <div class="form-group">
              <label>Name on card:</label>
              <input type="text" class='form-control'  v-model="nameCard">
            </div>
            <div class='clearfix'>
              <div class="form-group form-group-mini">
                <label>Expiry date:</label>
                <input type='date' class='form-control' v-model="expiryDate">
              </div>
              <div class="form-group form-group-mini">
                <label>CVV:</label>
                <input type='number' class='form-control' v-model="cvv">
              </div>
            </div>
            <br>
            <p>
              <button class='btn btn-primary'>Submit</button>
            </p>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  /* eslint-disable */
import { validate } from './validation-credit-card';
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      creditCardNumber: '',
      creditCardType : '',
      nameCard : '',
      expiryDate : '',
      cvv : ''
    };
  },
  ready () {
    this.creditCardType = validate(this.creditCardNumber);
  },
  methods : {
    updateCreditCardType : function (){
      this.creditCardType = validate(this.creditCardNumber);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
