function saveUpdateAlert(vale, value2) {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: vale + ' has been ' + value2,
        showConfirmButton: false,
        timer: 2500
    });
}

function unSucsessUpdateAlert(vale) {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: vale + 'Updated Unsuccessfully',
        showConfirmButton: false,
        timer: 1500
    })
}

function yesNoAlertDelete(value) {
    Swal.fire({
        title: 'Do you want to Delete the \n' + value + ' ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: `Don't Delete`,
    }).then((result) => {
        if (result.isConfirmed) {
            if (deleteCustomer(value)) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Delete Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                $(this).remove();
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Delete Unsuccessfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } else if (result.isDenied) {
            Swal.fire(value + ' Delete Canceled!', '', 'info')
        }
    });
}

function yesNoAlertIDelete(value) {
    Swal.fire({
        title: 'Do you want to Delete the \n' + value + ' ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: `Don't Delete`,
    }).then((result) => {
        if (result.isConfirmed) {
            if (deleteItems(value)) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Delete Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                $(this).remove();
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Delete Unsuccessfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } else if (result.isDenied) {
            Swal.fire(value + ' Delete Canceled!', '', 'info')
        }
    });
}
