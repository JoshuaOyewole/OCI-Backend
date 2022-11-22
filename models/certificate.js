const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    certificateID: {
        type: String,
        required: true,
        maxLength: 100,
    },
    studentID: {
        type: String,
        required: true,
        maxLength: 100,
    },
}, { timestamps: true });

module.exports = mongoose.model('Certificate', CertificateSchema);
