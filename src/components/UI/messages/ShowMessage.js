import Swal from 'sweetalert2';

export default function ShowMessage(props) {
  Swal.fire({
    title: props.txtTitle,
    icon: props.txtIcon,
    text: props.txtText,
  });
}
