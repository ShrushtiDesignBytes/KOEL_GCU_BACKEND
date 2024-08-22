module.exports = (sequelize, DataTypes) => {
    const Alerts = sequelize.define("alerts", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        faultCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        faultType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alertCategory: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        resolved:  {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        additionalInfo: {
            type: DataTypes.JSON,
            allowNull: false
        }

    },
        {
            freezeTableName: true,
            timestamps: true
        });


    return Alerts
}
