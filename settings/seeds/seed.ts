import { AppointmentPart } from '../models/adminModels/AppointmentParts.js';
import AppointmentPartSeedData from './adminSeeds/AppointmentPartsSeedData.json' with { type: 'json' };

export const seedDatabase = async () => {
  try{
    const AppointmentParts = await AppointmentPart.bulkCreate(AppointmentPartSeedData, 
  //     {
  //   validate: true,
  // }
);
  console.log(AppointmentParts);
} catch (error) {console.log (error)}

  };
