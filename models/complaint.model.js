class Complaint {
  constructor(category, message) {
    this.category = category;
    this.message = message;
    this.createdAt = new Date();
  }
}

export default Complaint
