<template>
    <div>

        <div class="centralized">
            <Carousel :perPage="1">
                <Slide :key="index" v-for="index in activities.length">
                    <day :day="days[index-1]"
                    :dayIndex="index-1"
                    :activities="activities[index-1]" 
                    @activityAdded="addActivity($event)"
                    @activityRemoved="removeActivity($event)"
                    @copyPreviousDay="copyPreviousDay($event)"/>

                </Slide>
            </Carousel>
           <!--
            <day :key="activity" v-for="activity in activities.length" 
                :activities="activities[activity-1]"
                :day="days[activity-1]"
                :dayIndex="activity-1"
                @activityAdded="addActivity($event)"
                @activityRemoved="removeActivity($event)" />
            -->

            <button @click="info()">info</button>    
        </div>
        
    </div>
</template>
<script>
import { Carousel, Slide} from 'vue-carousel';
import DayActivities from '../shared/DayActivities';
import Button from '../shared/Button';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default {

    components: {
        Carousel,
        Slide,
        'day': DayActivities,
        'my-button': Button
    },

    data: ()=>{
        return{
            days:["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"],
            activities:[[{
                activity: "Insira sua atividade",
                start: 0,
                end: 1,
                valid: true
            }],[{
                activity: "Insira sua atividade",
                start: 0,
                end: 1,
                valid: true
            }],[{
                activity: "Insira sua atividade",
                start: 0,
                end: 1,
                valid: true
            }],
            [{
                activity: "Insira sua atividade",
                start: 0,
                end: 1,
                valid: true
            }],
            [{
                activity: "Insira sua atividade",
                start: 0,
                end: 1,
                valid: true
            }],
            [{
                activity: "Insira sua atividade",
                start: 0,
                end: 1,
                valid: true
            }],
            [{
                activity: "Insira sua atividade",
                start: 0,
                end: 1,
                valid: true
            }]
            ]
        }
    },

    computed:{

    },

    methods:{
        addActivity(data){
            let index = data.index
            if(!data.activity)
                data.activity = "Insira sua atividade"
            this.activities[index].push({
                activity:data.activity,
                start: data.newActivityStart,
                end: data.newActivityEnd,
                valid: true
                }
            )
        },

        removeActivity(data){
            let dayIndex = data.day
            let positionIndex = data.position
            console.log(data)
            this.activities[dayIndex].splice(positionIndex, 1)
        },

        copyPreviousDay(dayIndex){
            console.log(dayIndex)
            if(this.activities[dayIndex-1]){
                this.copyAllActivities(dayIndex, dayIndex - 1)
            }
        },

        copyAllActivities(currentDayIndex, previousDayIndex){
            let activitiesLength = this.activities[currentDayIndex].length
            this.activities[currentDayIndex].splice(0,activitiesLength)  
            for(let i = 0; i < this.activities[previousDayIndex].length; i++){
                let activityToAdd = {
                    activity: this.activities[previousDayIndex][i].activity,
                    newActivityStart: this.activities[previousDayIndex][i].start,
                    newActivityEnd: this.activities[previousDayIndex][i].end,
                    index: currentDayIndex
                }    
                this.addActivity(activityToAdd)
            }
        },

        info(){
            console.log(this.activities)
        }
     
    }
    
}
</script>
<style scoped>
.carousel-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.centralized{
    margin: 0 auto;
}

</style>
