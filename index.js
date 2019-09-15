import { elements } from "./base";
import Search from "./search";
var months = [
    
    'Jan' ,
    'Feb' ,
    'Mar' ,
    'Apr' ,
    'May' ,
    'Jun',
    'Jul' ,
    'Aug' ,
    'Sep' ,
    'Oct' ,
    'Nov' ,
    'Dec' 
];
var words=[
     'zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twevel','thirteen','fourteen','fiveteen','sixteen','seventeen','eighteen','nineteen'
]
/*elements.buttontype.addEventListener("click",async ()=>{
    elements.center.textContent="";
    elements.imm.textContent="";
    elements.description.textContent="";
    elements.classcontent.textContent="";
    const input=elements.inputtype.value;
    console.log(input);
    if(input)
    {
        
        var searchresults=new Search(input)
        console.log(searchresults);
        try
        {
            var output=await searchresults.getResults();
            var out= output.data.name;
            var des=output.data.description.en;
            var img= document.createElement("IMG");
            img.setAttribute("src", output.data.image.small);
            img.setAttribute("class","image");
            var hr=document.createElement("HR");
            var country_origin=output.data.country_origin;
            var link=output.data.links.blockchain_site;
            var rank=output.data.market_cap_rank;
            var price=output.data.market_data.current_price.usd;
            var supply=output.data.market_data.circulating_supply;
            var totalsupply=output.data.market_data.total_supply;
            var totalvolume=output.data.market_data.total_volume.usd;
           // var site="Blockchain links:"
            //var site_info="hhhh"
            console.log(out);
            console.log(des);
            console.log(img);

        }catch(e)
        {
           console.log(e);
        }
        console.log(elements.center);
        elements.center.textContent=out;
        console.log(elements.imm);
        elements.imm.setAttribute("style","background-color: white")
        elements.imm.insertAdjacentElement("afterbegin",img);
        elements.imm.insertAdjacentElement("beforeend",hr);
        elements.description.setAttribute("style","background-color: gray")
        elements.description.insertAdjacentHTML("afterbegin",`<p>country_origin:${country_origin}</p>
                                                              <p>Blockchain_site:</p>
                                                              <ul>
                                                              <li>${link[0]}</li>
                                                              <li>${link[1]}</li>
                                                              </ul>
                                                              <p>market_cap_rank:${rank}</p>
                                                              <p>current price:$${price}</p>
                                                              <p>circulating_supply:${supply}</p>
                                                              <p>totalsupply:${totalsupply}</p>
                                                              <p>totalvolume:$${totalvolume}</p>

        
        
        
                                                 `);
        $(elements.classcontent).html(des);
        //elements.site.textContent=
        //elements.siteinfo.textContent=

     
    
    }
})*/
elements.leftbox.addEventListener("click",async ()=>{
    elements.rightbox.style.background="gray";
    elements.leftbox.style.background="black";
    elements.leftbox.style.color="white";
   elements.cell.forEach((el)=>{
       el.textContent="";
   })
  
    const searchresults=new Search();
    const results=await searchresults.getResults();
    
    
    const arr1=results.data.response.holidays;
    console.log(arr1)
    const dell=new Date("2018-09-14");
    let time=dell.getTime();
    const arr2=arr1.filter((el)=>
    {
        
        const stringdate=el.date.iso;
        
        const date1=new Date(stringdate);
        const time1=date1.getTime();
        
        if(time1 > time)
        {
            return el;
        }
        
    });
    console.log(arr2[0].date.datetime.day)
    const len=arr2.length
    elements.table.addEventListener("click",(el)=>{
        let splin=el.target.textContent.split(' ');
        let index=(months.indexOf(splin[1]))+1;
        console.log(splin,index);
        for(let i=0;i<arr2.length;i++)
        {
            console.log(i);
            if(((arr2[i].date.datetime.day)==splin[0])&&((arr2[i].date.datetime.month)==index))
            {
                console.log(arr2[i].name);
                elements.heading.textContent=arr2[i].name;
                elements.para.textContent=(arr2[i].date.datetime.day)+" "+(months[(arr2[i].date.datetime.month)-1]);
                  // elements.result.textContent=arr2[i].name;
                elements.form.style.display="block";
                
                break;
            }
        }
        
    });
    let count=0;
   elements.cell.forEach((el)=>{
     
     
       el.textContent=(arr2[count].date.datetime.day)+" "+(months[(arr2[count].date.datetime.month)-1])
       count=count+1;


   })
   
   
    //const size =len/10
   // const string=size.toString();
    //console.log(string);
    //const stringarr=string.split(".");
    //console.log(stringarr);
    //const one=parseInt(stringarr[0]);
   // const two=parseInt(stringarr[1]);
    //console.log(one,two);
    //elements.content2.textContent="";
  /* for( var i=0;i<one;i++)
   {
        elements.content2.insertAdjacentHTML("beforeend",`
        <div class="row${i}">
            <button class="column${i}1">hoo</button>
            <button class="column${i}2">hoo</button>
            <button class="column${i}3">hoo</button>
            <button class="column${i}4">hoo</button>
            <button class="column${i}5">hoo</button>
            <button class="column${i}6">hoo</button>
            <button class="column${i}7">hoo</button>
            <button class="column${i}8">hoo</button>
            <button class="column${i}9">hoo</button>
            <button class="column${i}10">hoo</button>
         </div> `)
   }*/

    
    
    
    
});
elements.rightbox.addEventListener("click",async ()=>{
    elements.leftbox.style.background="gray";
    elements.rightbox.style.background="black";
    elements.rightbox.style.color="white";
   elements.cell.forEach((el)=>{
       el.textContent="";
   })
    const searchresultsr=new Search();
    const resultsr=await searchresultsr.getResults();
    
    const arr=resultsr.data.response.holidays;
    console.log(arr)
    const dater=new Date("2018-09-14");
    let timer=dater.getTime();
    var arrr=arr.filter((el)=>
    {
        
        var stringdater=el.date.iso;
        
        var dater1=new Date(stringdater);
        var timer1=dater1.getTime();
        
        if(timer1 < timer)
        {
            return el;
        }
        
    });
    console.log(arrr)
    elements.table.addEventListener("click",(el)=>{
        let splin=el.target.textContent.split(' ');
        let index=(months.indexOf(splin[1]))+1;
        console.log(splin,index);
        for(let i=0;i<arrr.length;i++)
        {
            console.log(i);
            if(((arrr[i].date.datetime.day)==splin[0])&&((arrr[i].date.datetime.month)==index))
            {
                elements.heading.textContent=arrr[i].name;
                elements.para.textContent=(arrr[i].date.datetime.day)+" "+(months[(arrr[i].date.datetime.month)-1]);
                  // elements.result.textContent=arr2[i].name;
                elements.form.style.display="block";
                break;
            }
        }
        
    });
    let count=0;
    elements.cell.forEach((el)=>{
      
        el.textContent=(arrr[count].date.datetime.day)+" "+(months[(arrr[count].date.datetime.month)-1])
        count=count+1;
 
 
    })

    
    
    
});


elements.cancel.addEventListener(("click"),()=>{
    elements.form.style.display="none";
})
