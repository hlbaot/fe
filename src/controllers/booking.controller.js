const BookingService = require("../services/booking.service");

class BookingController {
  static async createBooking(req, res) {
    try {
      const bookingData = req.body;
      const newBooking = await BookingService.createBooking(req.params.package_id, bookingData);
      if (!newBooking) return res.status(400).json({success: false, message: "Thiếu thông tin cần thiết"});
      return res.status(201).json({ success: true, message: "Đăng ký lịch thành công!", booking: newBooking});
    } catch (error) {
      return res.status(500).json({success: false, message: error.message});
    }
  }

  static async getAllBookings(req, res) {
    try {
      const bookings = await BookingService.getBooking();
      if (!bookings) {
        return res.status(404).json({
          success: false,
          message: "Không có dữ liệu đặt lịch",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Lấy danh sách đặt lịch thành công",
        bookings: bookings,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = BookingController;
