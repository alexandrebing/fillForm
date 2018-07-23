<template>
    <div>
        <h1>Hello World</h1>
        <div>
            <p>form</p>
            <child-component :names="names" @removeItem="remove($event)"/>
            <button @click="add()">add</button>
        </div>
    </div>
</template>
 <script>
 import Child from "./Child";
 export default {
     data: ()=>{
         return{
             names: [{
                        nome:"Inserir nome",
                        idade: 0
                     }]
         }
     },

     components:{
         'child-component': Child
     },

     methods:{
         remove(index){
             this.names.splice(index,1)
             console.log(this.names)
         },

         add(){
             this.names.push({nome: "Inserir nome", idade: 0})
         }
     }
     
 }
 </script>
 
 <style>
 input{
     margin: 0 auto;
     margin-top: 15px;
 }

 .center{
     display: block;
 }
 
 </style>
 