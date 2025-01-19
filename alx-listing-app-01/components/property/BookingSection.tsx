import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [totalPayment, setTotalPayment] = useState<number>(0);

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckInDate(e.target.value);
    calculateTotalPayment(e.target.value, checkOutDate);
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOutDate(e.target.value);
    calculateTotalPayment(checkInDate, e.target.value);
  };

  const calculateTotalPayment = (checkIn: string, checkOut: string) => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const numberOfNights = timeDiff / (1000 * 3600 * 24);
      setTotalPayment(price * numberOfNights);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      {/* Check-in Date Picker */}
      <div className="mt-4">
        <label className="block text-sm font-semibold">Check-in</label>
        <input
          type="date"
          value={checkInDate}
          onChange={handleCheckInChange}
          className="border p-2 w-full mt-2"
        />
      </div>

      {/* Check-out Date Picker */}
      <div className="mt-4">
        <label className="block text-sm font-semibold">Check-out</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={handleCheckOutChange}
          className="border p-2 w-full mt-2"
        />
      </div>

      {/* Total Payment */}
      {checkInDate && checkOutDate && (
        <div className="mt-4">
          <p>
            Total payment: <strong>${totalPayment}</strong>
          </p>
        </div>
      )}

      {/* Reserve Button */}
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
