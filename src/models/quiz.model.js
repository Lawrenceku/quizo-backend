module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
  
    const Option = sequelize.define('Option', {
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });
  
    Question.associate = (models) => {
      Question.hasMany(models.Option, {
        as: 'options',
        foreignKey: 'questionId',
        onDelete: 'CASCADE',
      });
    };
  
    Option.associate = (models) => {
      Option.belongsTo(models.Question, {
        foreignKey: 'questionId',
        as: 'question',
      });
    };
  
    return { Question, Option };
  };