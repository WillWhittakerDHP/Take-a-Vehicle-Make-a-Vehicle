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


export class Service extends Model<
  InferAttributes<Service>,
  InferCreationAttributes<Service>
> {
  declare service_id: CreationOptional<number>;
  declare title: string;
  declare can_be_scheduled: boolean;
  declare differential_scheduling: boolean;
  declare ui_description_set_id: ForeignKey<UIDescription['ui_description_set_id']>;
  declare appointment_part_1: ForeignKey<AppointmentPart['appointment_part_id']>;
  declare appointment_part_2: ForeignKey<AppointmentPart['appointment_part_id']>;
  declare appointment_part_3: ForeignKey<AppointmentPart['appointment_part_id']>;
  declare appointment_part_4: ForeignKey<AppointmentPart['appointment_part_id']>;

  // calculateTime() {
  //   time = this.appointment_part_1.base_time + this.appointment_part_1.rate_over_base_time * 
  // }
  declare addAppointmentPart: BelongsToManyAddAssociationMixin<AppointmentPart, AppointmentPart['appointment_part_id']>;
  declare addAppointmentParts: BelongsToManyAddAssociationMixin<
  AppointmentPart[],
  AppointmentPart['appointment_part_id'][]
  >;
}

export function ServiceFactory(sequelize: Sequelize): typeof Service {
  Service.init(
    {
      service_id: {
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
      differential_scheduling: {
        type: DataTypes.BOOLEAN,
      },
      // ui_description_set_id: {
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
      tableName: 'services',
      // Set to false to remove the `created_at` and `updated_at` columns
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return Service;
}
