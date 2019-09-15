
import axios from 'axios';
import{key,proxy} from './config';
export default class Search{
 /* constructor(query){
      this.query=query;
      console.log(query)
  }*/
  async  getResults()
{
   
    try{
           const res=await axios(`${proxy}https://calendarific.com/api/v2/holidays?country=IN&year=2018&api_key=01ba4c0556bb4683172785eb55cb59cf98ca89b8`) ;
           
           return res;
            
    }catch(e){
        alert(e);

    }
 
}
}
