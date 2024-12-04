// import { Model, DataTypes, 
//   // Optional,
//   type InferAttributes,
//   type InferCreationAttributes,
//   type CreationOptional,
//   // type ForeignKey,
//   // type BelongsToManyAddAssociationMixin,
//   type Sequelize } from 'sequelize';
  

// export class Address extends Model <InferAttributes<Address>, InferCreationAttributes<Address>
// > {
//   declare address_id: CreationOptional<number>;
//   declare number: number;
//   declare street: string;
//   declare apt: string;
//   declare city: string;
//   declare state: string;
//   declare zip_code: number;


// }

// export function AddressFactory(sequelize: Sequelize): typeof Address {
//   Address.init(
//     {
//       address_id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       title: {
//         type: DataTypes.STRING,
//       },
//       number: {
//         type: DataTypes.INTEGER,
//       },
//       street: {
//         type: DataTypes.STRING,
//       },
//       apt: {
//         type: DataTypes.STRING,
//       },
//       city: {
//         type: DataTypes.STRING,
//       },
//       state: {
//         type: DataTypes.STRING,
//       },
//       zip: {
//         type: DataTypes.INTEGER,
//       },
//     },
//     {
//       sequelize,
//       modelName: 'addresses',
//       timestamps: false,
//       underscored: true,
//       freezeTableName: true,
//     }
//   );

//   return Address;
// }