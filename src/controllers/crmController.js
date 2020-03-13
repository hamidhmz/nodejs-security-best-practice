const mongoose = require('mongoose');
const { ContactSchema } = require('../models/crmModel');

const Contact = mongoose.model('Contact', ContactSchema);

module.exports.addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

module.exports.getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

module.exports.getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

module.exports.updateContact = (req, res) => {
    Contact.findOneAndUpdate(
        { _id: req.params.contactId },
        req.body,
        { new: true },
        (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        }
    );
};

module.exports.deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactId }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact' });
    });
};
