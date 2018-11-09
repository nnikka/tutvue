<template>
  <div class="hello">
    <h1>Hello world 1 </h1>
    
    <div  v-for="(item, index) in arr" :id="index">
      <AppComp :number="item"></AppComp>
    </div>

    <button v-on:click="addItem()">Add</button>
    <button @click="deleteItem()">Delete</button>
    <button @click="change()">Change</button>
    <button @click="changeSet()">Change-set</button>
  </div>
</template>

<script>
import Comp from './comp'

export default {
  components: {
    AppComp: Comp
  },
  data () {
    return {
      arr: [1, 2, 3]
    }
  },
  methods: {
    addItem() {
      this.arr.push(1)
    },
    deleteItem() {
      this.arr.splice(this.arr.length - 1, 1)
    },
    change() {
      this.arr[0] = 20
      console.log(this.arr)
    },
    changeSet() {
      this.arr[0] = 15
      this.$set(this.arr, 0, this.arr[0])
    }
  },

  beforeCreate() {
    console.log("World1 beforeCreate")
  },

  created() {
    console.log("World1 created")
  },

  beforeMount() {
    console.log("World1 beforeMount")
  },

  mounted() {
    console.log("World1 mounted")
  },

  beforeUpdate() {
    console.log("World1 beforeUpdate")
  },

  updated() {
    console.log("World1 updated")
  },

  beforeDestroy() {
    console.log("World1 beforeDestroy")
  },

  destroyed() {
    console.log("World1 destroyed")
  },


}
</script>
