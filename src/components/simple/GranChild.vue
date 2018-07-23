<template>
    <div>
        <input type="text" v-model.lazy="name.nome" >
        <button @click="remove(name-1)">remove</button>
        <button @click="modify(name-1)">modify</button>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            required: true,
            type: Object
        },
        index:{
            required: true,
            type: Number
        }

    },

    methods:{
         remove(item){
            this.$emit("remove", item)
        },
    }
    
}
</script>

<style>

</style>
