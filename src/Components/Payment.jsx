


export default function Payment(){



 let list=   [
        {
          "Name": "hi",
          "id": 1
        } ,
         {
            "Name": "hello",
            "id": 2
          },
          {
            "Name": "list",
            "id": 3
          },
          {
            "Name": "react",
            "id": 4
          }
      ]


       function renderlist() {
           return list.map((val)=>{
               <li>{val.Name}</li>
           })
           return 

          
      }
    return <div>Payme</div>
}