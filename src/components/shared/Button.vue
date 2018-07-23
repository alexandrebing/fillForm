<template>
    <button class="padrao" :class="estilo" @click="clicked()">{{titulo}}</button>
</template>

<script>

export default {
        props: {
        titulo:{
            required: true,
            type: String
        },
        estilo: String,

    },
    
    methods: {
        clicked(){
            console.log(this.estilo)
            this.$emit('clicked')
        }
        
    },
}
</script>


<style>

.padrao{
    font-size: 20px;
    height: 50px;
    width: 300px;
    margin: 0px 75px 0px 75px;
}

.submit{
    background-color: rgba(0, 128, 248, 0.87);
    color: white;
    border: none;
    border-radius: 5px;
}

</style>
