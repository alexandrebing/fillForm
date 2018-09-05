<template>
        <tr>
                <th><input class="input text-input" type="text" v-model="inputValues.activity"></th>
                <th><input class="input num-input" type="number" :min="checkMin" :max="maxValue" v-model.lazy="inputValues.start" @change="inputChanged()"></th>
                <th><input class="input num-input" type="number" :min="minValue" :max="checkMax" v-model.lazy="inputValues.end" @change="inputChanged()"></th>
                <th><my-button titulo="x" estilo="remove" @clicked="removeActivity()"/></th>
                <!--<th><div class="mark" :class="isValid"></div></th>-->
                <th>
                    <img src="../icons/red-warning.png" alt="warning" height="25px" v-if="!isValid">
                    <img src="../icons/green-check.png" alt="check" height="25px" v-if="isValid">
                </th>
        </tr>
</template>

<script>
import Input from './Input';
import Button from './Button'
export default {
    props:{
        inputValues:{
            required: true,
            type: Object
        },
        previousActivity: {
            type: Object
        },
        nextActivity:{
            type: Object
        }
    },

    components:{
        'my-input': Input,
        'my-button': Button
    },

    mounted(){

    },
    
    computed:{

        checkMin(){
            if(this.previousActivity){
                return this.previousActivity.end
            }
            return 0

        },

        checkMax(){
            if(this.nextActivity){
                return this.nextActivity.start
            }
            return 24
        },

        maxValue(){
            return this.inputValues.end -1
        },

        minValue(){
            return Number(this.inputValues.start) + 1

        },

        changeName(){
            this.inputValues.activity = "Modificado"
        },

        isValid(){
            if (this.inputValues.valid){
                return true
            }
            return false
        }
    },

    methods:{
        removeActivity(){
            this.$emit("activityRemoved")
        },

        inputChanged(){
            this.$emit("inputChanged")
            this.checkValidity()
        },

        checkValidity(){ //mudar para o computed?
            let equalPrevious = true
            let equalNext = true
            if(this.previousActivity){
                equalPrevious = (this.inputValues.start == this.previousActivity.end)
            } 
            if(this.nextActivity){
                equalNext = this.inputValues.end == this.nextActivity.start
            }

            if(equalPrevious && equalNext){
                this.inputValues.valid = true
            } else {
                this.inputValues.valid = false
            }
                

        }
       
    }

    
}
</script>

<style>
input{
    font-size: 20px;
    margin: 3px;
    border: none;
}

.mark{
    margin: 0 auto;
    border:solid white 1px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
}

.valid{
    background-color: rgba(0, 128, 248);
}

.invalid{
    background-color: rgb(184, 33, 33);
}

.text-input{
    width: 300px;
}

.num-input{
    width: 80px;

}

</style>
