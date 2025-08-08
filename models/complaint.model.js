class Complaint {
  constructor(category, message) {
    this.category = category;
    this.message = message;
    this.createdAt = { type: Date, default: new Date() };
  }
}
