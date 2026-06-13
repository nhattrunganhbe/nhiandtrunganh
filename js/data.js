/* =========================================================================
   data.js  —  NƠI BẠN TỰ ĐIỀN MỌI THỨ 💕
   -------------------------------------------------------------------------
   File này chứa TẤT CẢ câu chữ & nội dung của trang web.
   Bạn chỉ cần sửa trong file này, KHÔNG cần đụng tới các file khác.
   Sửa xong thì lưu lại (Ctrl+S) và mở lại trang web là thấy thay đổi.

   GỢI Ý: ảnh đang được chia tạm vào từng nơi/từng mục. Bạn cứ kéo tên file
   ảnh sang nơi đúng của nó là được — tên file nào thuộc nơi nào thì bạn rõ
   nhất 😊
   ========================================================================= */

/* -------------------------------------------------------------------------
   1) TỰA ĐỀ ở phần mở đầu chính (Hero)
   ------------------------------------------------------------------------- */
const TIEU_DE = "You and Me";
const TIEU_DE_PHU = "TA 💕 Nhi";

// Tiêu đề của 3 mục bên dưới — đổi tuỳ thích (có thể thêm emoji):
const TIEU_DE_NOI = "mình đi đâu thế bố ơi";
const TIEU_DE_ANH_DEP = "";
const TIEU_DE_BAN_DO = "and our jouney continue...📍";

// Dòng chữ nhỏ ở cuối trang:
const CHU_CUOI_TRANG = "11 đứa vợ nhé💕";

/* -------------------------------------------------------------------------
   2) ẢNH ĐẠI DIỆN ở phần mở đầu (đổi sang ảnh bạn thích nhất)
   ------------------------------------------------------------------------- */
const ANH_DAI_DIEN = "images/omnhautrongthanhmay.jpg";

/* -------------------------------------------------------------------------
   3) CHUỖI MÀN HÌNH MỞ ĐẦU "TEASER"
   - Mỗi dòng là MỘT màn hình: 1 câu nhắn + chữ trên nút bấm.
   ------------------------------------------------------------------------- */
const TEASER = [
  { loiNhan: "vợ ơi~~", nut: "Dạ?" },
  { loiNhan: "hihi, có cái này", nut: "cho e xem" },
  { loiNhan: "ấn zô đi", nut: "💕" },
];

/* -------------------------------------------------------------------------
   4) NHỮNG NƠI TA ĐÃ ĐI QUA
   - Mỗi nơi: tên + ghi chú + danh sách ảnh (anh: [...]) + toạ độ (lat/lng).
   - Trên trang, ảnh chiếm gần hết khung hình; BẤM 1 LẦN để xem ảnh tiếp theo.
   - Muốn thêm/bớt ảnh của một nơi: thêm/bớt dòng trong anh: [ ... ].
   ------------------------------------------------------------------------- */
const NHUNG_NOI = [
  {
    ten: "Hồ Gươm",
    ghiChu: "first date nè vợ",
    lat: 21.0287,
    lng: 105.8524,
    anh: ["images/chess.jpg"],
  },
  {
    ten: "Sở thú Hà Nội",
    ghiChu: "xem thú mãi mới nhận ra bạn cute nhất là vợ hề hề",
    lat: 21.0339,
    lng: 105.8118,
    anh: [
      "images/vuonthuhanoi.jpg",
      "images/concong.jpg",
      "images/thangmaydisothu.jpg",
      "images/lion.jpg",
    ],
  },
  {
    ten: "Bảo tàng Hà Nội",
    ghiChu: "suprise",
    lat: 21.0036,
    lng: 105.7889,
    anh: ["images/baotanghanoi.jpg", "images/vouongtrada.jpg"],
  },
  {
    ten: "Hồ Tây",
    ghiChu: "lơi tình yêu bắt đầu, rạp xiếc a ko có ảnh vợ ạ :))",
    lat: 21.0667,
    lng: 105.8189,
    anh: ["images/AIxam.jpg"],
  },
];

/* -------------------------------------------------------------------------
   5) ĐỊA ĐIỂM ẨN GIẤU — NƠI TỤI MÌNH SẮP ĐI 🤫
   - Hiện ra dưới dạng một tấm thẻ khoá; bấm vào mới mở ra lời nhắn bí mật.
   - loiNhanKhoa: chữ hiện khi còn khoá.  loiNhanMo: chữ hiện sau khi mở.
   ------------------------------------------------------------------------- */
const NOI_AN_GIAU = {
  loiNhanKhoa: "đi đâu tiếp vợ nhỉ?",
  tieuDe: "LS chứ còn đâu :))",
  loiNhanMo: "đưa vợ đi tắm 100 cái thác",
  // (Tuỳ chọn) thêm 1 ảnh gợi ý, để trống "" nếu chưa có:
  anh: ["images/anhmauson.jpg"],
};

/* -------------------------------------------------------------------------
   6) ẢNH ĐẸP + VIDEO (mục riêng để khoe ảnh/clip đẹp)
   - type: "image" cho ảnh, "video" cho clip.
   ------------------------------------------------------------------------- */
const ANH_DEP = [
  {
    type: "image",
    src: "images/dovonau.jpg",
  },
  {
    type: "image",
    src: "images/nghi_ve_vo.jpg",
  },
  { type: "video", src: "images/7931530488397.mp4" },
  {
    type: "image",
    src: "images/namtrengiuong.jpg",
  },
  {
    type: "image",
    src: "images/hinhxam.jpg",
  },
  {
    type: "image",
    src: "images/huntrongthangmay.jpg",
  },
  {
    type: "image",
    src: "images/chuptrongbongtoi.jpg",
  },
  {
    type: "image",
    src: "images/chupbanglaptop.jpg",
  },
  { type: "video", src: "images/7931530461719.mp4" },
  { type: "video", src: "images/7931530452912.mp4" },
];

/* -------------------------------------------------------------------------
   7) LỜI NHẮN (xen giữa phần ảnh đẹp)
   ------------------------------------------------------------------------- */
const LOI_NHAN = [
  "anh biết nhiều lần a vô tâm khiến e buồn, tính a hay kiểu lúc có thì luôn mặc định là có mà không biết giữ gìn",
   "nhưng mà anh cũng rất biết ơn vì cuộc đời đã cho a gặp e, người luôn quan tâm lo lắng cho anh, yêu anh. "
];
