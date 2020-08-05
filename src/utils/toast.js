import { toast } from 'react-toastify';

function toaster(type, message, options = {}) {
    const opt = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        ...options};
    if(!message) {
        toast.error('please put message', opt);
    }

    if(type === 'success') {
        toast.success(message, opt);
    } else if(type === 'error') {
        toast.error(message, opt);
    } else if(type === 'info'){
        toast.info(message, opt);
    } else {
        toast(message, opt);
    }
}

export default toaster;
