import {
  Model,
  Column,
  Table,
  AutoIncrement,
  PrimaryKey,
  DataType,
  HasMany,
  Unique,
} from "sequelize-typescript";

@Table({
  timestamps: true, //timestamps created at, update at 에 시간 넣을때 사용하는 값
  paranoid: true, //delete at 에 시간적을때 사용해야하는 값
  underscored: true,
  tableName: "test-table",
})
export class Test extends Model<Test> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: "no",
  })
  no!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: "num",
  })
  num!: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "str",
  })
  str!: string;
}
