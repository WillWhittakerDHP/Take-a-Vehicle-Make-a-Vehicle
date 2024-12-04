// 	import { Model, DataTypes, 
//   // Optional,
//   type InferAttributes,
//   type InferCreationAttributes,
//   type CreationOptional,
//   type ForeignKey,
//   // type BelongsToManyAddAssociationMixin,
//   type Sequelize } from 'sequelize';
// import { ParticipantType } from './ParticipantTypes';
  

// export class Property extends Model <InferAttributes<Property>, InferCreationAttributes<Property>
// > {
//   declare property_id: CreationOptional<number>;
//   declare above_grade_sq_ft: number;
//   declare below_grade_sq_ft: number;
//   declare bedroom_number: number; 
//   declare bathroom_number: number;
//   declare foundation_type: string; 

// }

// export function PropertyFactory(sequelize: Sequelize): typeof Property {Property.init(
// {
//   property_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   above_grade_sq_ft: {
//     type: DataTypes.INTEGER,
//   },
//   below_grade_sq_ft: {
//     type: DataTypes.INTEGER,
//   },
//   bedroom_number: {
//     type: DataTypes.INTEGER,
//   },
//   bathroom_number: {
//     type: DataTypes.INTEGER,
//   },
//   foundation_type: {
//     type: DataTypes.STRING,
//   }
// },
// {sequelize,
// modelName: 'properties',
// timestamps: false,
// underscored: true,
// freezeTableName: true,
// }
// );

//   return Property;
// }