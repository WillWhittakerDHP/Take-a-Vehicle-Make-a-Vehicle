import { Model, DataTypes, 
  // Optional,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  type ForeignKey,
  type BelongsToManyAddAssociationMixin,
  type Sequelize } from 'sequelize';
  
import { Service } from '../userModels/Services.js';
import { AdditionalService } from '../userModels/AdditionalServices.js';
import { AvailabilityOption } from '../userModels/AvailabilityOptions.js';
import { DwellingAdjustment } from '../userModels/DwellingAdjustments.js';
// import { User } from '../appointmentModels/userInformation.js';
// import { Property } from '../appointmentModels/propertyInformation.js';
// import { Address } from '../appointmentModels/addressInformation.js';

export class AppointmentInstance extends Model <InferAttributes<AppointmentInstance>, InferCreationAttributes<AppointmentInstance>
> {
  declare appointment_instance_id: CreationOptional<number>;
  // declare quoteOnly: boolean
  declare differential_scheduling: boolean;
  declare inspector_time: number;
  // declare inspector_time_start: number;
  // declare inspector_time_end: number;
  declare on_site_time: number;
  // declare on_site_time_start: number;
  // declare on_site_time_end: number;
  // declare user_id: ForeignKey<User['user_id']>;
  // declare address_information: ForeignKey<Address['address_id']>;
  // declare property_information: ForeignKey<Property['property_id']>;
  declare service_id: ForeignKey<Service['service_id']>; 
  declare additional_service_id: ForeignKey<AdditionalService['additional_service_id']>; 
  declare availability_option_id: ForeignKey<AvailabilityOption['availability_option_id']>;
  declare dwelling_adjustment_id: ForeignKey<DwellingAdjustment['dwelling_adjustment_id']>;  

  declare addService: BelongsToManyAddAssociationMixin<Service, Service['service_id']>;
  declare addServices: BelongsToManyAddAssociationMixin<
  Service[],
  Service['service_id'][]
  >;

  declare addAdditionalService: BelongsToManyAddAssociationMixin<AdditionalService, AdditionalService['additional_service_id']>;
  declare addAdditionalServices: BelongsToManyAddAssociationMixin<
  AdditionalService[],
  AdditionalService['additional_service_id'][]
  >;

  declare addAvailabilityOption: BelongsToManyAddAssociationMixin<AvailabilityOption, AvailabilityOption['availability_option_id']>;
  declare addAvailabilityOptions: BelongsToManyAddAssociationMixin<
  AvailabilityOption[],
  AvailabilityOption['availability_option_id'][]
  >;

  declare addDwellingAdjustment: BelongsToManyAddAssociationMixin<DwellingAdjustment, DwellingAdjustment['dwelling_adjustment_id']>;
  declare addDwellingAdjustments: BelongsToManyAddAssociationMixin<
  DwellingAdjustment[],
  DwellingAdjustment['dwelling_adjustment_id'][]
  >;
  
}

export function AppointmentInstanceFactory(sequelize: Sequelize): typeof AppointmentInstance {
  AppointmentInstance.init(
    {
      appointment_instance_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quoteOnly: {
        type: DataTypes.BOOLEAN,  
      },
        differential_scheduling: {
        type: DataTypes.BOOLEAN,  
      },
        inspector_time: {
        type: DataTypes.INTEGER,  
      },
        inspector_time_start: {
        type: DataTypes.INTEGER,  
      },
        inspector_time_end: {
        type: DataTypes.INTEGER,  
      },
        on_site_time: {
        type: DataTypes.INTEGER,  
      },
        on_site_time_start: {
        type: DataTypes.INTEGER,  
      },
        on_site_time_end: {
        type: DataTypes.INTEGER,
      },
        user_id: {
        type: DataTypes.INTEGER,  
      },
        address_information: {
        type: DataTypes.INTEGER,  
      },
        property_information: {
        type: DataTypes.INTEGER,  
      },
        service_id: { 
        type: DataTypes.INTEGER,  
      },
        additional_service_id: { 
        type: DataTypes.INTEGER,  
      },
        availability_option_id: {
        type: DataTypes.INTEGER,  
      },
        dwelling_adjustment_id: {  
        type: DataTypes.INTEGER,  
      },
    },
    {
      sequelize,
      tableName: 'appointments',

      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return AppointmentInstance;
}