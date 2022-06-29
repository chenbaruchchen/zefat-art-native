import * as XLSX from "xlsx";

import fileName from '../data/shelonim.xlsx'

export function getExcelFromImportsName(importsName) {

    var data=null
    data=   fetch(importsName).then((res)=>{
       
        data=res.body.getReader().read().then((fileRead)=>{
          
   let buffer=fileRead.value.buffer
    data=XLSX.read(buffer,{type:"buffer"})
   return data
       })
           
   return data
          
           
       }).catch((err)=>{
         console.error(err)
      } )
 return data        
}
export function readFile() {

    fetch(fileName).then((res)=>{
       
     res.body.getReader().read().then((fileRead)=>{
        console.log(fileRead);
let buffer=fileRead.value.buffer
console.log(buffer)
console.log( XLSX.read(buffer,{type:"buffer"}))
    })

       

       
        
    }).catch((err)=>  console.error(err))
     


}



 