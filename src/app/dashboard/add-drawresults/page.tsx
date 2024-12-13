'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddStudents = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    drawDate: '',
    typeDigit: '',
    threeDigitOn: '',
    twoDigitOn: '',
    twoDigitLow: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/drawresults', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess('เพิ่มบุคลากรเรียบร้อยแล้ว');
        setForm({ 
          drawDate: '',
          typeDigit: '',
          threeDigitOn: '',
          twoDigitOn: '',
          twoDigitLow: ''  
        });
        router.push('/'); // กลับไปหน้าหลักหลังจากเพิ่มข้อมูล
      } else {
        setError(data.error || 'เกิดข้อผิดพลาด');
      }
    } catch (error) {
      console.error('Error adding employee:', error);
      setError('เกิดข้อผิดพลาด');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">เพิ่มข้อมูล</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">วัน/เดือน/ปี</label>
          <input
            type="date"
            name="drawDate"
            value={form.drawDate}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

       <div className="mb-4">
          <label className="block text-sm font-medium mb-1">รายการ</label>
          
          <select
            name="typeDigit"
            value={form.typeDigit}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >

            <option value="">เลือกหมวดหมู่</option>
            <option value="director">ผู้อำนวยการ</option>
            <option value="teacher">ครูผู้สอน</option>
            <option value="staff">ภารโรง</option>
          </select>
          
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">3 on</label>
          <input
            type="text"
            name="threeDigitOn"
            value={form.threeDigitOn}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">2 on</label>
          <input
            type="text"
            name="twoDigitOn"
            value={form.twoDigitOn}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">2 on</label>
          <input
            type="text"
            name="twoDigitLow"
            value={form.twoDigitLow}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          เพิ่ม
        </button>
        
      </form>
    </div>
  );
};

export default AddStudents
