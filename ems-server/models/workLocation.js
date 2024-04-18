import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const workSchema = new Schema({
  country1: {
        type: String,
        
      },
      state1: {
        type: String,
        
      },
      district1: {
        type: String,
        
      },
      mandal1: {
          type: String,
        
        },
        village1: {
          type: String,
         
        },
    });
    const work = mongoose.model('work',workSchema);

    export default work;