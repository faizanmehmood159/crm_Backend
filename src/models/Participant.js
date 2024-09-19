
const mongoose = require("mongoose");

const ParticipantSchema = new mongoose.Schema({
  salutation: { type: String, required: true },
  title: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  addressType: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String, required: true },
  street: { type: String, required: true },
  postalCode: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  repeatEmail: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  remarks: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

ParticipantSchema.methods.updateStatus = async function (newStatus) {
  this.status = newStatus;
  await this.save();
  return this;
};

const Participant = mongoose.model("Participant", ParticipantSchema);

module.exports = Participant;
