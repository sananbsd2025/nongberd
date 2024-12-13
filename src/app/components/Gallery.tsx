import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h1
        className="rounded text-xl font-bold mb-6 bg-gray-500 p-2 mx-auto 
      flex justify-center text-white"
      >
        ภาพกิจกรรม
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              src="/images/454500485_475234132016972_2855237308876847977_n.jpg"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
              width={300}
            />
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              กิจกรรมวันแม่แห่งชาติ 12 สิงหามหาราชินี
            </div>
            <p className="text-gray-700 text-base">
              กิจกรรมวันแม่แห่งชาติ 12 สิงหามหาราชินี นายประเสริฐ กองสุข
              ผู้อำนวยการโรงเรียนบ้านหนองเบิด พร้อมด้วยบุคลากรทางการศึกษา
              ข้าราชการครู นักเรียน ผู้ปกครอง
              ร่วมจัดกิจกรรมเทิดพระเกียรติแม่ของแผ่นดิน
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://bit.ly/49u86JF" target="_blank">
                อ่านเพิ่มเติม
              </a>
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">

<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              src="/images/460633395_502595745947477_1163362938859667494_n.jpg"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
              width={300}
            />
          </div>


          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              การแข่งขันขับร้องสรภัญญะสืบทอดประเพณี
            </div>
            <p className="text-gray-700 text-base">
              การเข้าร่วมการแข่งขันขับร้องสรภัญญะสืบทอดประเพณีทอดเทียน ณ
              วัดบ้านเมืองน้อย
              ตัวแทนนักเรียนและครูผู้ฝึกสอนร่วมสืบสานประเพณีอันดีงามของชาวอีสาน
              โดยนำนักเรียนเข้าร่วมการแข่งขันการขับร้องสรภัญญะแบบทีม
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://bit.ly/4g3FIjV" target="_blank">
                อ่านเพิ่มเติม
              </a>
            </span>
          </div>
        </div>
        <div
          className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          <img
            className="w-full"
            src="/images/460466659_502601475946904_3331817346557850094_n.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              การประชุมเครือข่ายสวัสดิการเมืองทุ่งวิทย์สัญจรครั้งที่ 9
            </div>
            <p className="text-gray-700 text-base">
              20 กันยายน 2567
              โรงเรียนบ้านหนองเบิดจัดการประชุมเครือข่ายสวัสดิการเมืองทุ่งวิทย์สัญจรครั้งที่
              9 /2567 นายประเสริฐ กองสุข
              ผู้อำนวยการโรงเรียนให้การต้อนรับผู้บริหารโรงเรียน
              และคณะครูกรรมการในเครือข่ายสวัสดิการและมอบผักบุ้งสวย ๆ
              ปลอดสารผลผลิตจากทางโรงเรียนให้แก่คณะที่มาร่วมประชุม
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://bit.ly/3OLvrNu" target="_blank">
                อ่านเพิ่มเติม
              </a>
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          <img
            className="w-full"
            src="/images/467492813_545297698343948_3379257794565447325_n.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              กิจกรรมทำกระทงเพื่อสืบสานประเพณีที่ดีงามของไทย
            </div>
            <p className="text-gray-700 text-base">
              วันที่ 14 พฤศจิกายน 2567 นายประเสริฐ กองสุข
              ผู้อำนวยการโรงเรียนบ้านหนองเบิดพร้อมด้วยคณะครู บุคลากร และนักเรียน
              ร่วมกันจัดกิจกรรมทำกระทงเพื่อสืบสานประเพณีที่ดีงามของไทย
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://bit.ly/41uVEHL" target="_blank">
                อ่านเพิ่มเติม
              </a>
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          <img
            className="w-full"
            src="/images/467521747_545306028343115_2302564985038695465_n.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              การแข่งขันงานศิลปหัตถกรรมนักเรียน
            </div>
            <p className="text-gray-700 text-base">
              วันที่ 15 พฤศจิกายน 2567 คณะครู
              บุคลากรทางการศึกษาและนักเรียนโรงเรียนบ้านหนองเบิดเข้าร่วมการแข่งขันงานศิลปหัตถกรรมนักเรียนครั้งที่
              72 ระดับเครือข่าย ประจำปีการศึกษา 2567 ณ โรงเรียนเวฬุวันวิทยา
              สพป.ร้อยเอ็ด เขต 1
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://bit.ly/41oFYW8" target="_blank">
                อ่านเพิ่มเติม
              </a>
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          <img
            className="w-full"
            src="/images/469416897_557376353802749_2733527599147672460_n.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              การแข่งขันกีฬา-กรีฑา เครือข่าย
            </div>
            <p className="text-gray-700 text-base">
              คณะครูและบุคลากรทางการศึกษา เข้าร่วมการแข่งขันกีฬา -
              กรีฑาเครือข่ายเวฬุวัน ณ สนามโรงเรียนบ้านเขวาทุ่ง ประจำปี 2567
              ระหว่าง 2 - 6 ธ.ค.2567
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://bit.ly/41rzvd8" target="_blank">
                อ่านเพิ่มเติม
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
