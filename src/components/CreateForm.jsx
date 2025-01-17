import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export default function CreateForm(){
     const [name, setName] = useState("")
     const [strain, setStrain] = useState("")
     const [productCategory, setProductCategory] = useState("")
     const [inventoryName, setInventoryName] = useState("")
     const [itemDetail, setItemDetail] = useState("")
     const [unitMeasure, setUnitMeasure] = useState("")
     const [unitOnHand, setUnitOnHand] = useState(0)
     const [unitCost, setUnitCost] = useState(10.99)
     const [targetQuantity, setTargetQuantity] = useState(1)
     const [newPlant, setNewPlant] = useState(false)  
     const [plantOrigin, setPlantOrigin] = useState("")
     const [plantOriginDate, setPlantOriginDate] = useState("")
     const [plantStage, setPlantStage] = useState("")
     const [image, setImage] = useState("")
     const queryClient = useQueryClient()

     const mutation = useMutation({
          mutationFn: (newPlant) => axios.post("/api/plants", newPlant),
          onSuccess: () => {
               queryClient.invalidateQueries(["plants"])
               setName("")
               setStrain("")
               setProductCategory("")
               setInventoryName("")
               setItemDetail("")
               setUnitMeasure("")
               setUnitOnHand(0)
               setUnitCost(10.99)
               setTargetQuantity(1)
               setNewPlant(false)
               setPlantOrigin("")
               setPlantOriginDate("")
               setPlantStage("")
               setImage("")
          },
     })

     const handleSubmit = (e)=> {
          e.preventDefault()
          mutation.mutate({
               name,strain,productCategory,inventoryName,
               itemDetail,unitMeasure,unitOnHand: Number(unitOnHand),
               unitCost: Number(unitCost),
               targetQuantity: Number(targetQuantity),
               newPlant,plantOrigin,
               plantOriginDate: new Date(plantOriginDate).toISOString(),
               plantStage,
               image
          })
     }

     return(
          <form onSubmit={handleSubmit}>
               <input 
               type="text"
               placeholder="Name"
               value={name}
               onChange={(e)=> setName(e.target.value)}
               required  
               />
               <input
               type="text"
               placeholder="Strain"
               value={strain}
               onChange={(e)=> setStrain(e.target.value)}
               required
               />
               <input 
               type="text"
               placeholder="Product Category"
               value={productCategory}
               onChange={(e)=> setProductCategory(e.target.value)}
               required
               />
               <input
               type="text"
               placeholder="Inventory Name"
               value={inventoryName}
               onChange={(e)=> setInventoryName(e.target.value)}
               required
               />
               <input
               type="text"
               placeholder="Item Detail"
               value={itemDetail}
               onChange={(e)=> setItemDetail(e.target.value)}
               required
               />
               <input
               type="text"
               placeholder="Unit Measure"
               value={unitMeasure}
               onChange={(e)=> setUnitMeasure(e.target.value)}
               required
               />
               <input
               type="number"
               placeholder="Unit On Hand"
               value={unitOnHand}
               onChange={(e)=> setUnitOnHand(e.target.value)}
               required
               />
               <input
               type="number"
               placeholder="Unit Cost"
               value={unitCost}
               onChange={(e)=> setUnitCost(e.target.value)}
               required
               />
               <input
               type="number"
               placeholder="Target Quantity"
               value={targetQuantity}   
               onChange={(e)=> setTargetQuantity(e.target.value)}
               required
               />
               <input
               type="checkbox"
               checked={newPlant}
               onChange={(e)=> setNewPlant(e.target.checked)}
               />
               <input
               type="text"
               placeholder="Plant Origin"
               value={plantOrigin}
               onChange={(e)=> setPlantOrigin(e.target.value)}
               />
          </form>
     )
     
     
}
