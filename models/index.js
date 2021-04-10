

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            name: {
                type: String,
                required: [true,'Name of Exercise is required'],
                trim: true,
            },
            type: {
                type: String,
                required: [true,'Type of Exercise is required'],
                trim: true,
            },
            weight: {
                type: Number,
                min: [0,'Weight cannot be less than 0'],
                default:0
            },
            sets: {
                type: Number,
                min: [0, 'Sets cannot be less than 0'],
                default:0
            },
            reps: {
                type: Number,
                min:[0,'Reps cannot be less than 0'],
                default:0
            },
            duration: {
                type: Number,
                required: [true,'Duration is required'],
                default:0
            },
            distance: {
                type: Number,
                default:0,
                min: [0, 'Distance cannot be less than 0'],
            },
        },
    ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
