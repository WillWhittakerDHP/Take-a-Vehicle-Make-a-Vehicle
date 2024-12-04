import { Model, DataTypes, 
  // Optional,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  // type ForeignKey,
  // type BelongsToManyAddAssociationMixin,
  type Sequelize } from 'sequelize';
  

export class ParticipantType extends Model<
  InferAttributes<ParticipantType>,
  InferCreationAttributes<ParticipantType>
> {
  declare participant_type_id: CreationOptional<number>;
  declare participant_type: string;
  declare participant_description: string;
  declare visibility: boolean;
}

export function ParticipantTypeFactory(sequelize: Sequelize): typeof ParticipantType {
  ParticipantType.init(
    {
      participant_type_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      participant_type: {
        type: DataTypes.STRING,
      },
      participant_description: {
        type: DataTypes.STRING,
      },
      visibility: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'participant_types',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return ParticipantType;
}
