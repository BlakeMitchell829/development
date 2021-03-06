module.exports = function(sequelize, DataTypes) {
    let Listing = sequelize.define('Listing', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: 'Electronics',
        },
        qty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        primary: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.DECIMAL(13, 2),
        },
        pictures: {
            type: DataTypes.TEXT('long'),
            set: function(value) {
                this.setDataValue('pictures', JSON.stringify(value));
            },
            // get: function() {
            //     return JSON.parse(this.getDataValue('pictures'));
            // },
        },
    });
    return Listing;
};
