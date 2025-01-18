import { Schema, model } from "mongoose";

// User Schema
const plantSchema = new Schema({
  name: { type: String, required: true },
  strain: { type: String, required: true },
  productCategory: { type: String, required: true },
     inventoryName: { type: String, required: true },
     itemDetail: { type: String, required: true },
     unitMeasure: { type: String, required: true },
     unitOnHand: { type: Number, required: true },
     unitCost: { type: Number, required: true },
     unitPrice: { type: Number, required: true },
     targetQuantity: { type: Number, required: true },
     newPlant: { type: Boolean, required: true },
     plantOrigin: { type: String, required: true },
     plantOriginDate: { type: Date, required: true },
     plantStage: { type: String, required: true },
     image:{ type: String, required: true }
});

// Export Model
export default model("User", plantSchema);