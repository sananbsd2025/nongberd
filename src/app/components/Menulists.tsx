import Link from "next/link";
import Image from "next/image";

export default function MenuListPage() {
  return (
    <div className="p-4">
      <div className="divide-y divide-gray-400">
        <div className="bg-blue-600 p-2 rounded-sm">
          <a href="" className="font-bold text-white">
            ข้อมูลพื้นฐาน
          </a>
        </div>

        <div className="flex-col grid grid-cols-1 divide-y gap-2 text-blue-500 pt-2">
          <div className="flex">
            <div>
              <img
                src="/images/0.gif"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110 py-1.5"
              />
            </div>

            <div>
              <Link href="/info" className="mx-2 p-1">
                ข้อมูลพื้นฐานโรงเรียน
              </Link>
            </div>
          </div>
          <div className="flex">
            <div>
              <img
                src="/images/0.gif"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110 py-1.5"
              />
            </div>

            <div>
              <Link href="/history" className="mx-2 p-1">
                ประวัติหน่วยงาน
              </Link>
            </div>
          </div>

          <div className="flex">
            <div>
              <img
                src="/images/0.gif"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110 py-1.5"
              />
            </div>

            <div>
              <Link href="/vision" className="mx-2 p-1">
                วิสัยทัศน์ / ปรัชญา
              </Link>
            </div>
          </div>
          <div className="flex">
            <div>
              <img
                src="/images/0.gif"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110 py-1.5"
              />
            </div>

            <div>
              <Link href="/kk_sch" className="mx-2 p-1">
                คณะกรรมการสถานศึกษา
              </Link>
            </div>
          </div>
          {/* <Link href="/employeelist" className="mx-2">
            บุคลากรทางการศึกษา
          </Link> */}
          <div className="flex">
            <div>
              <img
                src="/images/0.gif"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110 py-1.5"
              />
            </div>

            <div>
              <Link href="/eservice" className="mx-2 p-1">
                e-service
              </Link>
            </div>
          </div>
          <div className="flex">
            <div>
              <img
                src="/images/0.gif"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110 py-1.5"
              />
            </div>

            <div>
              <Link href="/dashboard" className="mx-2 p-1">
                ผู้ดูแลระบบ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
