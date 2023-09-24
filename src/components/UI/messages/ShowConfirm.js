import Swal from 'sweetalert2';

export default function showConfirm(
  onConfirm,
  title = '¿Está seguro?',
  buttonTextConfirm = 'Borrar'
) {
  Swal.fire({
    title: title,
    confirmButtonText: buttonTextConfirm,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: 'rgb( 108, 117, 125)',
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
    }
  });
}
