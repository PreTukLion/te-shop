import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">หมวดหมู่ร้านค้า (Shop Categories)</h3>
            <Link href="#">มิตซูบิชิ (Mitsubishi)</Link>
            <Link href="#">ไฮวิว (Hi-view)</Link>
            <Link href="#"> ซัน (SUN)</Link>
            <Link href="#"> ลิงค์(LINK)</Link>
            <Link href="#">พานาโซนิค (Panasonic)</Link>
            <Link href="#">แคเรียร์ (Carrier)</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">บริการลูกค้า (Customer Service)</h3>
            <Link href="https://www.facebook.com/TEengineeringAndConstructionKlongSamWa/">ติดต่อเรา (Contact Us)</Link>
            <Link href="#">นโยบายการจัดส่งสินค้า (Shipping Policy)</Link>
            <Link href="#">การคืนสินค้าและการแลกเปลี่ยน (Returns & Exchanges)</Link>
            <Link href="#">คำถามที่พบบ่อย (FAQs)</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">เกี่ยวกับ (About Us)</h3>
            <p className="mb-2">
            โรงงานอุตสาหกรรม รับเหมาก่อสร้าง บ้านและสำนักงาน พร้อมติดตั้งระบบไฟฟ้าและโรงงาน
            (Industrial plant construction contractor home and office Ready to install electrical system and factory.)
            </p>
            <p>&copy; {new Date().getFullYear()} TE ENGINEERING AND CONSTRUCTION CO.,LTD . All rights reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2"> ตามเรามา (Follow Us)</h3>
            <div className="flex gap-2">
              <Link href="https://www.facebook.com/TEengineeringAndConstructionKlongSamWa/">
                <MdFacebook size={24} />
              </Link>

            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
