function fntGuardaPersona(){
    Swal.fire({
        title: 'Desea guardar al alumno?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Guardado!', '', 'success')
          $.ajax({
            url: "/application/controllers/AlumnosController.php",
            succes: crear()
          })
          
        } else if (result.isDenied) {
          Swal.fire('Alumno no guardado', 'Usted ha decidio no guardar al alumno', 'error')
        }
      })
}

