import { Schema, model } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const TemplateSchema = new Schema({
    templateName: String,
    templateContent: Object,
    createdBy: ObjectId, // ID of user who created  or we can rename it as just {userId}
    createdAt: { type: Date, default: Date.now }, // ISODate
    updatedAt: { type: Date, default: Date.now }, // ISODate
});

TemplateSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

export const Template = model('Template', TemplateSchema);
