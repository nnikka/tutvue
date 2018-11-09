<template>
    <div>
        <p>Comp element <strong>{{number}}</strong></p>
    </div>    
</template>

<script>
    export default {
        props: ['number'],
        data() {
            return {
                
            }
        },

        beforeCreate() {
            console.log("Component " + "not here yet " + " beforeCreate")
        },

        created() {
            console.log("Component " + "not here yet " + " created")
        },

        beforeMount() {
            console.log("Component " + this.number + " beforeMount")
        },

        mounted() {
            console.log("Component " + this.number + " mounted")
        },

        beforeUpdate() {
            console.log("Component " + this.number + " beforeUpdate")
        },

        updated() {
            console.log("Component " + this.number + " updated")
        },

        beforeDestroy() {
            console.log("Component " + this.number + " beforeDestroy")
        },

        destroyed() {
            console.log("Component " + this.number + " destroyed")
        },
    }
</script>