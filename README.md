# Kỷ niệm của tụi mình 💕

Một trang web nhỏ, dễ thương (tone hồng pastel) để lưu giữ kỷ niệm với người yêu:
màn hình mở đầu tạo tò mò → những nơi hai đứa đã đi qua → bản đồ hành trình → lời nhắn.

---

## 1. Mở thử trên máy

Nhấp đúp vào file **`index.html`** là trang mở ngay trong trình duyệt. Không cần cài gì cả.

> Mẹo: nếu bản đồ không hiện, hãy chắc chắn máy đang có mạng (bản đồ tải từ internet).

---

## 2. Sửa nội dung (chỉ cần sửa 1 file)

Mở file **`js/data.js`** bằng Notepad (hoặc VS Code) — **tất cả câu chữ nằm ở đây**:

| Mục trong data.js | Là gì |
|---|---|
| `TIEU_DE` | Tựa đề lớn ở đầu trang |
| `TIEU_DE_PHU` | Câu phụ nhỏ bên dưới tựa đề |
| `ANH_DAI_DIEN` | Ảnh nền lớn ở đầu trang |
| `TEASER` | Các màn hình mở đầu: mỗi dòng = 1 câu nhắn + chữ trên nút |
| `NHUNG_NOI` | Mỗi nơi: tên + ghi chú + **danh sách ảnh** (`anh: [...]`) + toạ độ. Trên trang **bấm 1 lần để xem ảnh tiếp theo** |
| `NOI_AN_GIAU` | Địa điểm bí mật "sắp đi" — thẻ khoá, bấm mới mở |
| `ANH_DEP` | Ảnh đẹp & **video** (`type: "image"` hoặc `"video"`) |
| `LOI_NHAN` | Các lời nhắn (xen giữa phần ảnh đẹp) |

Sửa xong **lưu lại (Ctrl+S)** rồi mở lại `index.html`.

### Thêm một màn teaser
Copy một dòng trong `TEASER` rồi sửa, ví dụ:
```js
{ loiNhan: "anh có điều muốn nói nè 🥰", nut: "Nói đi~" },
```

### Thêm một nơi mới (có nhiều ảnh)
Copy một khối trong `NHUNG_NOI` rồi sửa. Phần `anh: [...]` là danh sách ảnh của
nơi đó — trên trang sẽ **bấm 1 lần để chuyển sang ảnh tiếp theo**:
```js
{
  ten: "Tên nơi đó",
  ghiChu: "Ghi chú/kỷ niệm của bạn ở đây 💗",
  lat: 21.0000, lng: 105.0000,
  anh: [
    "images/anh-a.jpg",
    "images/anh-b.jpg",
  ],
},
```

### Thêm ảnh/video vào mục "Ảnh đẹp"
```js
{ type: "image", src: "images/anh.jpg" },   // ảnh
{ type: "video", src: "images/clip.mp4" },  // video
```

---

## 3. Sắp xếp ảnh cho đúng nơi

Hiện ảnh của bạn đang được **chia tạm** vào các nơi trong `NHUNG_NOI`. Tên file là
mã số nên mình không biết tấm nào ở đâu — bạn chỉ cần **kéo dòng tên file ảnh** sang
đúng nơi của nó trong `data.js` là xong.

- Bỏ thêm ảnh/video mới vào thư mục **`images/`** rồi thêm tên file vào `data.js`.
- Ảnh đang khá nặng (vài MB/tấm). Nên **nén bớt** (vd dùng tinypng.com) để trang tải
  nhanh hơn, nhất là khi xem trên điện thoại.

---

## 4. Lấy toạ độ (lat / lng) cho bản đồ

1. Mở **Google Maps**, tìm địa điểm.
2. **Bấm chuột phải** ngay điểm đó → dòng đầu hiện 2 số, ví dụ `21.0287, 105.8524`.
3. Số đầu là `lat`, số sau là `lng` — điền vào `data.js`.

> Nơi nào chưa có toạ độ thì vẫn hiện ở phần kỷ niệm, chỉ là không có ghim trên bản đồ.

---

## 5. Đưa lên mạng để có link gửi cho người ấy

**Cách dễ nhất — Netlify Drop (không cần tài khoản):**
1. Vào **https://app.netlify.com/drop**
2. Kéo-thả nguyên thư mục `love-memories` vào trang đó.
3. Vài giây sau có ngay một đường link để gửi 💌

**Cách ổn định hơn — GitHub Pages:**
1. Tạo repo trên GitHub, tải toàn bộ file lên.
2. Vào **Settings → Pages**, chọn nhánh `main`, thư mục `/root`.
3. Đợi một lát, GitHub cho bạn một link cố định.

---

Made with 💕
