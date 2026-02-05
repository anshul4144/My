import { useState } from "react";
import "./Booking.css";
import API_URL from "../../config";


function Booking() {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/api/booking`
, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service,
        name,
        phone,
        address,
        date
      })
    });

    const data = await res.json();
    if (data.success) {
      alert("Booking Saved Successfully! 🎉");
      setService("");
      setName("");
      setPhone("");
      setAddress("");
      setDate("");
    } else {
      alert("Error saving booking");
    }
  };

  return (
    <div className="booking-page">

      <h1>Book a Service</h1>
      <p>Please fill the details below to book a service.</p>

      <form className="booking-form" onSubmit={handleSubmit}>

        <select 
          required 
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>
          <option>Plumber</option>
          <option>Electrician</option>
          <option>Painter</option>
          <option>Carpenter</option>
        </select>

        <input 
          type="text" 
          placeholder="Your Name" 
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="tel" 
          placeholder="Phone Number" 
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input 
          type="text" 
          placeholder="Address" 
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input 
          type="date" 
          required 
          min={new Date().toISOString().split("T")[0]}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit">Confirm Booking</button>
      </form>

    </div>
  );
}

export default Booking;
