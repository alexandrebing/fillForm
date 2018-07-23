<template>
<div>
    <div class="conteiner">

        <h1>{{titulo}}</h1>
        <h2>{{inputValues[0]}}</h2>
        <table class="center">
            <tr>
                <th>Atividade</th>
                <th>Inicio</th>
                <th>Fim</th>
            </tr>
            <my-line :key="activity" v-for="activity in activities" :inputValues="inputValues[activity - 1]" :index="activity - 1" :previousActivity="inputValues[activity - 2]" @activityUpdated="updateActivity($event)" @activityRemotion="removeActivity($event)" />
        </table>

    </div>
    <div class="button-div">

        <my-button titulo="Inserir atividade" estilo="submit" @clicked="insertNewActivity()"></my-button>
        <my-button titulo="Inserir pré cadastrado" estilo="submit"></my-button>

    </div>

</div>
    
</template>

<script>
import Input from '../shared/Input';
import Line from '../shared/Line';
import Button from '../shared/Button'
export default {
    props:{
        titulo:{
            required: true,
            type: String
        },
        inputValues:{
            type: Array
        },
        activities:{
            required: true,
            type: Number
        },
    },

    data: () => {
        return{
            modifiedInput: Object
        }
    },
    
    components: {
        'my-input': Input,
        'my-line': Line,
        'my-button': Button
    },

    mounted(){
        if(this.inputValues.length == 0){
            //Will turn into a function for reuse modifyActivity(position).
            this.modifyActivity(0, "Insira sua nova atividade", 0, 1)
        }
    },

    // computed(){

    // },

    methods:{
        logInfo(){
            console.log(this.inputValuesList);
        },

        test(){
            console.log(this.inputValues)
        },

        insertNewActivity(){
            let index = this.activities - 1
            if (this.inputValues[index].end >= 24){
                alert("Não é possível inserir novas atividades para esse dia.\nModifique sua agenda antes de prosseguir")
                return
            }
            let lastActivityEnd = Number(this.inputValues[index].end)
            let newActivity = {
                day: this.titulo,
                activity: "Insira sua atividade",
                start: lastActivityEnd,
                end: lastActivityEnd + 1
            }

            console.log(newActivity)

            this.$emit('activityAdded', newActivity)

        },

        updateActivity(changedActivity){
            let currentPosition = changedActivity.position
            this.modifyActivity(currentPosition, changedActivity.activity, changedActivity.start, changedActivity.end);
        },

        modifyActivity(currentPosition, newActivity, newStart, newEnd){
            this.modifiedInput = {
                day: this.titulo,
                position: currentPosition,
                activity: newActivity,
                start: newStart,
                end: newEnd
            }
            this.$emit('listChanged', this.modifiedInput)
        },

        removeActivity(index){
            if(this.inputValues.length == 1){
                alert("Os dias devem ter pelo menos uma atividade.")
                return
            }
            if(confirm("Remover atividade " + (index + 1))){
                let remotionData = {
                    day: this.titulo,
                    position: index
                }
                this.$emit("activityRemotion", remotionData)

                alert("Atividade removida")
                console.log(this.inputValues)
            }
            
        }
    }
    
}
</script>

<style scoped>

li{
    display: block;
}

.conteiner{
    background-color: rgba(255, 255, 255, 0.4);
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    height: 350px;
    overflow-y: auto;
}

.button-div{
    margin-top: 50px
}

.special{
    display: inline;
}

.center{
    margin: 0 auto;
    width: 90%;
    text-align: left;
}

</style>