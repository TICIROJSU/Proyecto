

    function mostrarMensajeModal(mensaje) {
                      document.getElementById('mensajeModalTexto').innerText = mensaje;
                      $('#mensajeModal1').modal('show');
                    }



    async function fetchData(documento) {
                    try {
                      const response = await fetch(`http://150.10.1.33:8000/Historia_SIPA_DNI/${documento}`);
                      if (response.status === 404) {

                          mostrarMensajeModal('No se encontró resultados en la búsqueda por el documento.');
                          return;
                      }

                      const data = await response.json();
                      document.getElementById('nombre').value = data.INO;
                      document.getElementById('apellidoPaterno').value = data.IAP;
                      document.getElementById('apellidoMaterno').value = data.IAM;
                      document.getElementById('fechaNacimiento').value = data.IFN.split('T')[0];
                      document.getElementById('direccion').value = data.IDI;
                      document.getElementById('telefono').value = data.ITC;
                      document.getElementById('ocupacion').value = data.IOC;
                      document.getElementById('nro_Documento').value = data.IDNI;
                      document.getElementById('nPadre').value = data.INP;
                      document.getElementById('nMadre').value = data.INM;
                      document.getElementById('nro_HC').value = data.IHC;
                      const codigosReligion = data.IRG;
                      llenarOpcionesReligion(codigosReligion); 
                      document.getElementById('GradoInstruccion').value = data.IGI;
                      document.getElementById('centroEducativo').value = data.ICE;
                      document.getElementById('fechaActualizacion').value = data.IFA.split('T')[0];
                      document.getElementById('nombrePadre').value = data.IDA;
                      document.getElementById('parentesco').value = data.IPT;
                      document.getElementById('telefonoPadre').value = data.IDP;
                      document.getElementById('lugarNacimiento').value = data.ILN;
                      const codigosGrupoSanguineo = data.IGS;
                      llenarOpcionesGrupoSanguineo(codigosGrupoSanguineo);  
                      const codigoTipoSeguro = data.ITS;
                      llenarOpcionesTipoSeguro(codigoTipoSeguro);
                      const codigoGradoInstruccion = data.IGI;
                      llenarOpcionesGradoInstruccion(codigoGradoInstruccion);
                      const codigoSexo = data.ISE;
                      llenarOpcionesSexo(codigoSexo);
                      const codigoEstadoCivil = data.IEC;
                      llenarOpcionesEstadoCivil(codigoEstadoCivil);
                    } catch (error) {
                      console.error('Error al obtener datos del paciente:', error);
                    }
                  }

    function filtrar2() {
                    var numeroDocumento = document.getElementById('dni').value;
                    fetchData(numeroDocumento);
                  }


    async function consultarDNI() {
                      const dni = document.getElementById('dni').value;
                      const url = 'https://apisted.servited.dev/reniec/consultadni';

                      const body = {
                        dni: dni
                      };

                      const token = 'eyJhbGciOiJIUzI1NiJ9.VTJGc2RHVmtYMSt4aE5ocjVmVEEzY21PZWRtaG11VGxPR3ZnY3h3WVZITDRzNEJaRlc1emtFVUJpcmJ1RGZRb1luMzlvdlFpREVVelRVQUFWNVN6Mmc9PQ.7VYDg2pBMPbU2UOW54EGkDb8MxrMCPOHDYjpNpv1MmY';

                      const headers = {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${token}`,
                        'fuente': 'database'
                      };

                      try {
                        const response = await fetch(url, {
                          method: 'POST',
                          headers: headers,
                          body: JSON.stringify(body)
                        });

                        if (!response.ok) {
                          throw new Error('Error en la solicitud');
                        }

                        const data = await response.json();
                        document.getElementById('nombre').value = data.data.personales.preNombres;
                        document.getElementById('apellidoPaterno').value = data.data.personales.apellidoPaterno;
                        document.getElementById('apellidoMaterno').value = data.data.personales.apellidoMaterno;
                        document.getElementById('f_apellidoPaterno').value = data.data.personales.apellidoPaterno;
                        document.getElementById('f_apellidoMaterno').value = data.data.personales.apellidoMaterno;
                        document.getElementById('resultado').style.display = 'block';
                      } catch (error) {
                        console.error('Error:', error);
                      }
                    }
              

                
                    document.getElementById('fechaNacimiento').addEventListener('change', function () {
                      var fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
                      var hoy = new Date();
                      var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
                      if (hoy.getMonth() < fechaNacimiento.getMonth() || (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
                        edad--;
                      }
                      document.getElementById('edadActual').value = edad;
                      var camposAcompanante = ['nombrePadre', 'parentesco', 'telefonoPadre'];
                      camposAcompanante.forEach(function (campo) {
                        document.getElementById(campo).disabled = edad >= 15;
                      });
                    });
              
                   document.getElementById('f_apellidoMaterno').addEventListener('keyup', function (event) {
                        if (event.keyCode === 13) {
                           mostrarCoincidencias();
                        }
                     });
 