<template>
    <tr>
        <th><p>{{inputValues.activity}}</p></th>
        <th><input class="text-input" type="text" v-model="currentActivity.activity" @change="changed()"/></th>
        <th><input class="num-input" type="number" :min="checkMin" :max="maxValue" v-model.lazy="currentActivity.start" @change="changed()"/></th>
        <th><input class="num-input" type="number" :min="minValue" :max="24" v-model.lazy="currentActivity.end" @change="changed()"/></th>
        <th><div class="remove" @click="removeActivity()">x</div></th>
        <th><div class="check" @click="changeName()">?</div></th>
    </tr>    
</template>

<script>
import Input from './Input';
export default {
    props:{
        inputValues:{
            required:true,
            type: Object
        },
        previousActivity:{
            type:Object
        },
        index:{
            required: true,
            type: Number
        }
    },

    data: () => {
        return{
            currentActivity: Object

        }
    },

    components:{
        'my-input': Input
    },

    mounted(){
        this.currentActivity = this.inputValues
    },
    
    computed:{

        checkMin(){
            if(this.previousActivity){
                return this.previousActivity.end
            }
            return 0

        },

        maxValue(){
            return this.inputValues.end -1
        },

        minValue(){
            return Number(this.inputValues.start) + 1

        },

        changeName(){
            this.inputValues.activity = "Modificado"
        }
    },

    methods:{
        changed(){
            console.log(this.index)
            debugger
            this.currentActivity.position = this.index
            debugger
            this.$emit('activityUpdated', this.currentActivity)
        },

        removeActivity(){
            this.$emit("activityRemotion", this.index)
            document.getElementById("in1").value = this.currentActivity.activity;
        },
    }

    
}
</script>

<style>
input{
    font-size: 20px;
    margin: 3px;
    border: none;
}

tr{
    margin-top: 10px;
}

.text-input{
    width: 300px;
}

.num-input{
    width: 80px;

}

.remove{
    background-color: rgb(184, 33, 33);
    color: white;
    text-align: center;
    line-height: 28px;
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
