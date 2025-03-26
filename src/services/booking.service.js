const Booking = require('../models/Booking.model');
const BookingDTO = require('../DTO/booking.dto');

class BookingService {
    static async createBooking(package_id, bookingData) {
        try {
            bookingData = {name, email, phone, shoot_date, shoot_time, address};
            const booking = await Booking.create(package_id, bookingData);
            return new BookingDTO(booking);
        } catch (error) {
            throw new Error('Failed to create booking');
        }
    }

    static async getBooking(){
        try {
            const getBooking = await Booking.findAll();
            if(!getBooking) throw new Error('Không có đơn đặt hàng nào!!');
            return getBooking.map((booking) => new BookingDTO(booking));
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = BookingService;
