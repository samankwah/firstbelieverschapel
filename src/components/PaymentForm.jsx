import React, { useState } from "react";
import Telecel from "../assets/telecel.png";
import AT from "../assets/at.png";
import MTN from "../assets/mtn.png";
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";

const PaymentForm = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [category, setCategory] = useState("");
  const [remarks, setRemarks] = useState("");
  const [membershipId, setMembershipId] = useState("");

  const publicKey = "pk_live_320ce15a099337350f917d93d2129d0eb2d01a23";

  const componentProps = {
    email,
    amount: amount * 100,
    currency: "GHS",
    metadata: {
      name,
      phone,
      category,
      remarks,
      membershipId,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for donating to us! We do not take it for granted!"),
    onClose: () => alert("Wait! You need to donate, don't go!"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Proceeding with the payment...");
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-100 shadow-md rounded-lg p-6 pt-24">
      <div className="bg-[#DA0037] text-white text-center py-3 rounded-t-lg">
        <h1 className="text-xl font-bold">Donate</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}

        <div className="grid grid-cols-2 gap-4 mt-2">
          <input
            type="text"
            placeholder="First Name"
            className="border rounded-md p-2 w-full"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <select className="border rounded-md p-2 w-full">
            <option value="Ghana (+233)">Ghana (+233)</option>
            {/* Add more country codes if needed */}
          </select>
          <input
            type="text"
            placeholder="Phone Number"
            className="col-span-2 border rounded-md p-2 w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border rounded-md p-2 w-full mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Payment Options */}
        <h2 className="text-gray-700 font-semibold mt-6">
          Select Payment Option
        </h2>
        <div className="flex justify-evenly items-center mt-2">
          <Link
            type="button"
            className={`rounded-lg p-2 w-20 ${
              paymentOption === "MTN" ? "bg-gray-200 border-gray-400" : ""
            }`}
            onClick={() => setPaymentOption("MTN")}
          >
            <img src={MTN} alt="MTN" className="w-full h-auto" />
          </Link>

          <Link
            type="button"
            className={`rounded-lg p-2 w-24 ${
              paymentOption === "Tigo" ? "bg-gray-200 border-gray-400" : ""
            }`}
            onClick={() => setPaymentOption("Tigo")}
          >
            <img src={AT} alt="Tigo" className="w-full h-auto" />
          </Link>

          <Link
            type="button"
            className={`rounded-lg p-2 w-24 ${
              paymentOption === "Visa" ? "bg-gray-200 border-gray-400" : ""
            }`}
            onClick={() => setPaymentOption("Visa")}
          >
            <img src={Telecel} alt="Visa" className="w-full h-auto" />
          </Link>
        </div>

        {/* Category and Amount */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <select
            className="border rounded-md p-2 w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">--Choose Category--</option>
            <option value="Tithe">Tithe</option>
            <option value="Offering">Offering</option>
            <option value="Seed">Seed</option>
          </select>
          <div className="flex items-center border rounded-md">
            <span className="p-2 bg-gray-100 border-r">GH₵</span>
            <input
              type="number"
              placeholder="Amount"
              className="p-2 w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Additional Information */}
        <h2 className="text-gray-700 font-semibold mt-6">
          Additional Payment Information (Optional)
        </h2>
        <input
          type="text"
          placeholder="Membership Id"
          className="border rounded-md p-2 w-full mt-2"
          value={membershipId}
          onChange={(e) => setMembershipId(e.target.value)}
        />
        <textarea
          placeholder="Additional remarks"
          className="border rounded-md p-2 w-full mt-2"
          rows="3"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        ></textarea>

        {/* Paystack Payment Button */}
        <PaystackButton
          className="bg-[#DA0037] text-white py-2 px-6 rounded-md w-full mt-6 hover:bg-red-800"
          {...componentProps}
        />
      </form>

      <p className="text-center text-gray-500 text-sm mt-4">
        PayStack ©2024 Powered by FutureDev
      </p>
    </div>
  );
};

export default PaymentForm;
