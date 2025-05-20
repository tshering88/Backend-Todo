import { Schema, model } from "mongoose";
import { ITodo } from "../types/authTypes";



const UserSchema: Schema = new Schema<ITodo>({
  text: { type: String, required: true, },
  completed: { type: Boolean, required: true }
 
}, {
    timestamps: true
}
)

export default model<ITodo>("Todo", UserSchema);
