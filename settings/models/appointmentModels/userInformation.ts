// import { Model, DataTypes, 
//   // Optional,
//   type InferAttributes,
//   type InferCreationAttributes,
//   type CreationOptional,
//   type ForeignKey,
//   // type BelongsToManyAddAssociationMixin,
//   type Sequelize } from 'sequelize';
// import { ParticipantType } from './ParticipantTypes';
  

// export class User extends Model <InferAttributes<User>, InferCreationAttributes<User>
// > {
//   declare user_id: CreationOptional<number>;
//   declare participant_type: ForeignKey<ParticipantType['participant_type_id']>;
//   declare firstName: string;
//   declare lastName: string;
//   declare email: string;
// }

// export function UserFactory(sequelize: Sequelize): typeof User {User.init(
//     {
//       user_id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       // participant_type: {
//       //   type: DataTypes.INTEGER,
//       // },
//       firstName: {
//         type: DataTypes.STRING
//       },
//       lastName: {
//         type: DataTypes.STRING
//       },
//     },
//     {
//       sequelize,
//       modelName: 'users',
//       timestamps: false,
//       underscored: true,
//       freezeTableName: true,
//     }
//   );

//   return User;
// }