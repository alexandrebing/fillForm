<template>
    <input class="my-input"  :type="tipo" :class="classe" :min="minimo" :max="maximo" :value="getValue" >
</template>

<script>
export default {
    props: {
        tipo: {
            required: true,
            type:String,
        },
        classe: {
            type:String 
        },
        minimo:{
            type: Number
        },
        maximo:{
            type: Number
        }
    },

    computed:{
        getValue(){
            if(this.tipo == "number"){
                return this.minimo
            }
            return "Selecione a opção"

        }

    }
    
}
</script>

<style>
.my-input{
    font-size: 20px;
}

</style>
