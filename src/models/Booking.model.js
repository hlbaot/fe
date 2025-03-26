const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database.config");
const Package = require("./Package.model");

const Booking = sequelize.define(
  "Bookings",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    package_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Packages",
        key: "id",
      },
    },
    shoot_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    shoot_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "confirmed", "completed", "cancelled"),
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    tableName: "Bookings",
    timestamps: true,
  }
);

// Define the relationship
Booking.belongsTo(Package, { foreignKey: "package_id" });
Package.hasMany(Booking, { foreignKey: "package_id" });

module.exports = Booking;
