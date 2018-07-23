<template>
<div>
    <p>I'm child</p>
   
    <g-child :key="name" v-for="name in names.length" :name="names[name-1]" :index="name-1" @remove="remove($event)" />
</div>
    
</template>
<script>
import GranChild from "./GranChild"
export default {
    props:{
        names:{
            required: true,
            type: Array
        }
    },

    components:{
        'g-child': GranChild
    },

    methods: {
        remove(item){
            this.$emit("removeItem", item)
        },

        modify(item){
            this.names[item].nome = "Modified"
        }
    }
    
}
</script>
<style>

</style>
