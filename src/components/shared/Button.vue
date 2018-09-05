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
}

.submit{
    background-color: rgba(0, 128, 248, 0.87);
    color: white;
    border: none;
    border-radius: 5px;
    margin: 0px 75px 0px 75px;
}

.remove{
    background-color: rgb(184, 33, 33);
    color: white;
    text-align: center;
    line-height: 25px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 5px;
}

.check{
    background-color: rgb(11, 57, 207);
    color: white;
    text-align: center;
    line-height: 32px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 5px;
}

.check:hover{
    background-color:rgb(21, 46, 131);
}

.remove:hover{
    background-color: rgb(109, 32, 32);
}

</style>
