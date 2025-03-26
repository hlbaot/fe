class BookingDTO {
  constructor(booking) {
    this.id = booking.id;
    this.name = booking.name;
    this.email = booking.email;
    this.phone = booking.phone;
    this.shoot_date = booking.shoot_date;
    this.shoot_time = booking.shoot_time;
    this.address = booking.address;
    this.package_id = booking.package_id;
  }
}

module.exports = BookingDTO;
