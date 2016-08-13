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
                <input type="text" class='form-control' id='card'>
                <div class='input-group-addon' id='type'></div>
              </div>
            </div>
            <div class="form-group">
              <label>Name on card:</label>
              <input type="text" class='form-control'>
            </div>
            <div class='clearfix'>
              <div class="form-group form-group-mini">
                <label>Expiry date:</label>
                <input type='text' class='form-control'>
              </div>
              <div class="form-group form-group-mini">
                <label>CVV:</label>
                <input type='text' class='form-control'>
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
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
