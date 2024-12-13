"use client";

import { useState } from "react";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    fristname: "",
    lastname: "",
    g_level: "",
    grade: "",
    age: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message);

      if (res.ok) {
        setFormData({
          fristname: "",
          lastname: "",
          g_level: "",
          grade: "",
          age: "",
        });
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">เพิ่มข้อมูลนักเรียน</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            ชื่อ
          </label>
          <input
            type="text"
            name="fristname"
            placeholder="ชื่อ"
            value={formData.fristname}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            นามสกุล
          </label>
          <input
            type="text"
            name="lastname"
            placeholder="นามสกุล"
            value={formData.lastname}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            อายุ
          </label>
          <input
            type="number"
            name="age"
            placeholder="อายุ"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="g_level"
            name="g_level"
            value={formData.g_level}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">-- เลือกระดับชั้น --</option>
            <option value="อนุบาล 1">อนุบาล 1</option>
            <option value="อนุบาล 2">อนุบาล 2</option>
            <option value="อนุบาล 3">อนุบาล 3</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            เกรด
          </label>
          <input
            type="text"
            name="grade"
            placeholder="เกรด"
            value={formData.grade}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddStudent;
