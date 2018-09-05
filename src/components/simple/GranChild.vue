<template>
    <div>
        <div :key="item" v-for="item in name.length">
            <input type="text" v-model.lazy="name[item-1].nome" >
            <input type="number" v-model.lazy="name[item-1].idade">
            <input type="text" v-model="name[item-1].sexo">
            <button @click="remove()">remove</button>
            <button @click="modify(name-1)">modify</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            required: true,
            type: Array
        },
        index:{
            required: true,
            type: Number
        }

    },

    methods:{
         remove(){
            this.$emit("remove", this.index)
        },
    }
    
}
</script>

<style>

</style>
