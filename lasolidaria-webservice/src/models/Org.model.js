const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const OrgSchema = new Schema({
    org_logo: {
        type: String,
        required: true
    },
    org_name: {
        type: String,
        trim: true,
        required: true
    },
    org_birthdate: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    org_address: {
    address: {
        type: String,
        trim: true,
        required: true
    }, 
    city: {
        type: String,
        required: true
    }, 
    department: {
        type: String,
        required: true
    }
    },
    org_contact: {
    org_email: {
        type: String,
        trim: true,
        required: true
    },
    org_phones: {
        type: String,
        trim: true,
        required: true
    }
    },
    org_lead: {
    lead_name: {
        type: String,
        trim: true,
        required: true
    }, 
    lead_birthdate: {
        type: Date,
        required: true
    }, 
    lead_email: {
        type: String,
        trim: true,
        required: false
    },
    lead_id: {
        type: String,
        trim: true,
        required: true
    } 
    },
    org_info : {
        org_resume: {
            type: String,
            trim: true,
            required: false
        },
        org_statement: {
            type: String,
            trim: true,
            required: false
        },
        org_sm: {
            type: String,
            trim: true,
            required: false
        }
    },
    org_docs: {
        type: String,
        trim: true,
        required: true
    }

},{timestamps: true});

module.exports = Mongoose.model("Org", OrgSchema);