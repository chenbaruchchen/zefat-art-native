 

import { useState , useEffect} from "react"
import List from "../../list"
import Form from "../add/form/form"

import { Text } from "react-native"

import file from '../../../data/shelonim.xlsx'
import {getExcelFromImportsName} from '../../../scripts/excel'
export default function App(){
    
    const [chosen,setChosen]=useState(null)
    const [shelonim,setShelonim]=useState(null)
 
    useEffect(()=>{
        async function getShelonim(params) {
            let data= await getExcelFromImportsName(file)
            setShelonim(data)
           }
           getShelonim()
         

    },[])
  
    useEffect(()=>{
console.log(shelonim?.SheetNames)
    },[shelonim])
    const items=['1','b','3']
    if (chosen===null) {
        if (shelonim===null) {}
        
         return<List onChosen={setChosen} items={items}/>
     } 
    
   if (shelonim!==null) {
    console.log(shelonim.sheets)
     return <Form shelon={shelonim.sheets[chosen]}/>
   
   } 
    return <Text>dsdsdsd</Text>
//   return <Text>ddsdsdsdsd</Text>
    
   
}

