import { PiGear, PiSpeakerSimpleHighFill, PiFileAudioLight } from "react-icons/pi";
import { MdStorefront, MdCable, MdOutlineCable } from "react-icons/md";
import { FcElectronics, FcElectricalThreshold, FcCableRelease, FcWebcam } from "react-icons/fc";
import { FaSolarPanel, FaPlug, FaTape, FaRegKeyboard } from "react-icons/fa6";
import { TbSolarPanel } from "react-icons/tb";
import { IoIosWater } from "react-icons/io";
import { GiCctvCamera, GiUnplugged, GiElectricalSocket, GiTriplePlier, GiSteelDoor} from "react-icons/gi";
import { SlCamrecorder } from "react-icons/sl";
import { FaComputerMouse } from "react-icons/fa6";
import { BsFillHdmiFill, BsFillTelephoneFill, BsPlugin } from "react-icons/bs";
import { TiPhoneOutline } from "react-icons/ti";
import { VscTerminalTmux, VscCircuitBoard } from "react-icons/vsc";
import { BsFillUsbDriveFill } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";
import { SiWireshark, SiPoe } from "react-icons/si";
import { LuCable } from "react-icons/lu";
import { FaBox, FaMicrophone, FaHeadphones } from "react-icons/fa";
import { FcFilingCabinet } from "react-icons/fc";
import { TbSolarPanel2 } from "react-icons/tb";
import { BsRouterFill } from "react-icons/bs";
import { CiPassport1 } from "react-icons/ci";

export const categories = [

  {
    label: "อินเวอร์เตอร์ (Inverter)",
    icon: FcElectronics,
  },
  {
    label: "พลังงานแสงอาทิตย์บนชั้นดาดฟ้า (Solar Rooftop)",
    icon: FaSolarPanel,
  },
  {
    label: "อินเวอร์เตอร์ปรับรอบมอเตอร์ หรือ วีเอสดี (Inverter adjusts motor speed or VSD)",
    icon: FcElectricalThreshold,
  },
  {
    label: "ปั๊มพลังงานแสงอาทิตย์ (Solar Pump)",
    icon: IoIosWater,
  },
  {
    label: "โซล่าเซลล์ (Solar Cell)",
    icon: TbSolarPanel,
  },
  {
    label: "เกียร์ (Gear)",
    icon: PiGear,
  },
  {
    label: "กล้องวงจรปิด (CCTV)",
    icon: GiCctvCamera,
  },
  {
    label: "สาย RG6 (RG6 Cable)",
    icon: FcCableRelease,
  },
  {
    label: "ปลั๊กไฟ (Power Plug)",
    icon: FaPlug,
  },
  {
    label: "ปลั๊กสวิตช์ (Switch Plug)",
    icon: GiUnplugged,
  },
  {
    label: "หน้ากากปลั๊กไฟ (Power Plug Mask)",
    icon: GiElectricalSocket,
  },
  {
    label: "เทปพันสายไฟ (Electrical Tape)",
    icon: FaTape,
  },
  {
    label: "เครื่องบันทึก (Recorder)",
    icon: SlCamrecorder,
  },
  {
    label: "เมาส์ (Mouse)",
    icon: FaComputerMouse,
  },
  {
    label: "แป้นพิมพ์ (Keyboard)",
    icon: FaRegKeyboard,
  },
  {
    label: "ตัวแปลง HDMI (HDMI Converter)",
    icon: BsFillHdmiFill,
  },
  {
    label: "สายโทรศัพท์ (Telephone Line)",
    icon: TiPhoneOutline,
  },
  {
    label: "สายรัดเคเบิล, สายรัดพลาสติก (Cable Ties, Plastic Straps)",
    icon: MdCable,
  },
  {
    label: "อุปกรณ์สำหรับตรวจสอบสายโทรศัพท์ (Equipment For Checking Telephone Lines)",
    icon: BsFillTelephoneFill,
  },
  {
    label: "คีมสำหรับเข้าสายโทรศัพท์ (Pliers For Entering Telephone Wires)",
    icon: GiTriplePlier,
  },
  {
    label: "เทอร์มินอลโทรศัพท์ (Telephone Terminal)",
    icon: VscTerminalTmux,
  },
  {
    label: "ขาเหล็กสำหรับยึดขั้วต่อ (Steel Legs For Fixing Terminals)",
    icon: GiSteelDoor,
  },
  {
    label: "ยูเอสบี (USB)",
    icon: BsFillUsbDriveFill,
  },
  {
    label: "เบรกเกอร์ (Circuit Breaker)",
    icon: VscCircuitBoard,
  },
  {
    label: "เบรกเกอร์หลัก (Main Breaker)",
    icon: GrHostMaintenance,
  },
  {
    label: "บาลาสไฟ (Fire Balas)",
    icon: BsPlugin,
  },
  {
    label: "ไส้ไก่พันรอบสายไฟ (Chicken Filling Wrapped Around Wires)",
    icon: SiWireshark,
  },
  {
    label: "กระดูกงูสายไฟฟ้า (Electrical Cable Keel)",
    icon: LuCable,
  },
  {
    label: "กล่องพลาสติกกันน้ำ (Waterproof Plastic Box)",
    icon: FaBox,
  },
  {
    label: "ตู้พลาสติกกันน้ำ (Waterproof Plastic Cabinet)",
    icon: FcFilingCabinet,
  },
  {
    label: "แผงเซลล์แสงอาทิตย์ (Solar Panel)",
    icon: TbSolarPanel2,
  },
  {
    label: "ลำโพงคอมพิวเตอร์ (Computer Speakers)",
    icon: PiSpeakerSimpleHighFill,
  },
  {
    label: "หูฟัง (Headphones)",
    icon: FaHeadphones,
  },
  {
    label: "ไมโครโฟน (Microphone)",
    icon: FaMicrophone,
  },
  {
    label: "เว็บแคมพร้อมขาตั้ง (WEBCAM With Stand)",
    icon: FcWebcam,
  },
  {
    label: "สายไฟ AC (AC Power Cable)",
    icon: MdOutlineCable,
  },
  {
    label: "สายสัญญาณเสียง (Audio Cable)",
    icon: PiFileAudioLight,
  },
  {
    label: "เราเตอร์ (Router)",
    icon: BsRouterFill,
  },
  {
    label: "โพสวิตช์ (Poe Switch)",
    icon: SiPoe,
  },
  {
    label: "สวิตช์ฮับ (Hub Switch)",
    icon: CiPassport1,
  },
  {
    label: "สายวีจีเอ (VGA Cable)",
    icon: MdOutlineCable,
  },
];
