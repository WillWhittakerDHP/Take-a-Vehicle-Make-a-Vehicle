import { Model, DataTypes, 
  // Optional,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  type ForeignKey,
  type BelongsToManyAddAssociationMixin,
  type Sequelize } from 'sequelize';
  

import type { AppointmentPart } from '../adminModels/AppointmentParts.js';
import { DwellingType } from '../adminModels/DwellingTypes.js';


export class DwellingAdjustment extends Model<
  InferAttributes<DwellingAdjustment>,
  InferCreationAttributes<DwellingAdjustment>
> {
  declare dwelling_adjustment_id: CreationOptional<number>;
  declare dwelling_type_id: ForeignKey<DwellingType['dwelling_type_id']>;
  declare appointment_part_1: ForeignKey<AppointmentPart['appointment_part_id']>;
  declare appointment_part_2: ForeignKey<AppointmentPart['appointment_part_id']>;
  declare appointment_part_3: ForeignKey<AppointmentPart['appointment_part_id']>;
  declare appointment_part_4: ForeignKey<AppointmentPart['appointment_part_id']>;

  declare addAppointmentPart: BelongsToManyAddAssociationMixin<AppointmentPart, AppointmentPart['appointment_part_id']>;
  declare addAppointmentParts: BelongsToManyAddAssociationMixin<
  AppointmentPart[],
  AppointmentPart['appointment_part_id'][]
  >;
}

export function DwellingAdjustmentFactory(sequelize: Sequelize): typeof DwellingAdjustment {
  DwellingAdjustment.init(
    {
      dwelling_adjustment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      // dwelling_type_id: {
      //   type: DataTypes.STRING,
      // },
      // appointment_part_1: {
      //   type: DataTypes.INTEGER,
      // },
      // appointment_part_2: {
      //   type: DataTypes.INTEGER,
      // },
      // appointment_part_3: {
      //   type: DataTypes.INTEGER,
      // },
      // appointment_part_4: {
      //   type: DataTypes.INTEGER,
      // },
    },
    {
      sequelize,
      // Manually define the table name
      tableName: 'dwelling_adjustments',
      // Set to false to remove the `created_at` and `updated_at` columns
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return DwellingAdjustment;
}
