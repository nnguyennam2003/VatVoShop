import Swal from "sweetalert2";

export default function AlertSweet({onclose}) {
  Swal.fire({
    title: "Thêm vào giỏ hàng thành công!",
    text: "Thanh toán ngay để có những ưu đãi hấp dẫn!",
    icon: "success",
    confirmButtonColor: "#4FED66",
    confirmButtonText: `OK`,
  }).then((result) => {
    if (result.isConfirmed) {
      onclose();
    }
  });
}
