import { Model, DataTypes, 
  // Optional,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  type ForeignKey,
  type BelongsToManyAddAssociationMixin,
  type Sequelize } from 'sequelize';

import type { AppointmentPart } from '../adminModels/AppointmentParts.js';
import { UIDescription } from '../adminModels/UIDescriptions.js';


export class AdditionalService extends Model<
  InferAttributes<AdditionalService>,
  InferCreationAttributes<AdditionalService>
> {
  declare additional_service_id: CreationOptional<number>;
  declare title: string;
  declare can_be_scheduled: boolean;
  declare ui_description_set: ForeignKey<UIDescription['ui_description_set_id']>;
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

export function AdditionalServiceFactory(sequelize: Sequelize): typeof AdditionalService {
  AdditionalService.init(
    {
      additional_service_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      can_be_scheduled: {
        type: DataTypes.BOOLEAN,
      },
      // ui_description_set: {
      //   type: DataTypes.INTEGER,
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
      tableName: 'additional_services',
      // Set to false to remove the `created_at` and `updated_at` columns
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return AdditionalService;
}
