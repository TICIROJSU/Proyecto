    function obtenerDescripcionSexo(codigoSexo) {
                        switch (codigoSexo) {
                            case "M":
                                return "MASCULINO";
                            case "F":
                                return "FEMENINO";
                            default:
                                return "Desconocido";
                        }
                    }


    function llenarOpcionesSexo(codigoSexo) {
                        const selectSexo = document.getElementById('Sexo');
                        selectSexo.innerHTML = ''; 
                        const codigosSexo = ["M", "F"];
                        codigosSexo.forEach(codigo => {
                            const descripcion = obtenerDescripcionSexo(codigo);
                            const opcion = document.createElement('option');
                            opcion.value = codigo;
                            opcion.text = descripcion;
                            selectSexo.add(opcion);
                        });
                        if (codigosSexo.includes(codigoSexo)) {
                            selectSexo.value = codigoSexo;
                        } else {
                            console.error('Código de sexo no reconocido:', codigoSexo);
                        }
                    }

    function obtenerDescripcionGradoInstruccion(codigoGradoInstruccion) {
                        switch (codigoGradoInstruccion) {
                            case "01":
                                return "SIN ESTUDIO";
                            case "02":
                                return "PRIMARIA";
                            case "03":
                                return "SECUNDARIA";
                            case "04":
                                return "TÉCNICO";
                            case "05":
                                return "SUPERIOR";
                            case "06":
                                return "INICIAL";
                            default:
                                return "Desconocido";
                        }
                    }

    function llenarOpcionesGradoInstruccion(codigoGradoInstruccion) {
                    const selectGradoInstruccion = document.getElementById('GradoInstruccion');
                    selectGradoInstruccion.innerHTML = ''; 
                    const codigosGradoInstruccion = ["01", "02", "03", "04", "05", "06"];
                    codigosGradoInstruccion.forEach(codigo => {
                        const descripcion = obtenerDescripcionGradoInstruccion(codigo);
                        const opcion = document.createElement('option');
                        opcion.value = codigo;
                        opcion.text = descripcion;
                        selectGradoInstruccion.add(opcion);
                    });
                    if (codigosGradoInstruccion.includes(codigoGradoInstruccion)) {
                        selectGradoInstruccion.value = codigoGradoInstruccion;
                    }
                }


    function obtenerDescripcionTipoSeguro(codigoTipoSeguro) {
                        switch (codigoTipoSeguro) {
                            case "01":
                                return "SIN SEGURO";
                            case "02":
                                return "SIS";
                            case "03":
                                return "ESSALUD";
                            case "04":
                                return "MILITAR";
                            case "05":
                                return "SOAT";
                            case "06":
                                return "PRIVADO";
                            case "07":
                                return "OTRO";
                            default:
                                return "Desconocido";
                        }
                    }

    function llenarOpcionesTipoSeguro(codigoTipoSeguro) {
                        const selectTipoSeguro = document.getElementById('tipoSeguro');
                        selectTipoSeguro.innerHTML = ''; 
                        const codigosTipoSeguro = ["01", "02", "03", "04", "05", "06", "07"];
                        codigosTipoSeguro.forEach(codigo => {
                            const descripcion = obtenerDescripcionTipoSeguro(codigo);
                            const opcion = document.createElement('option');
                            opcion.value = codigo;
                            opcion.text = descripcion;
                            selectTipoSeguro.add(opcion);
                        });
                        if (codigosTipoSeguro.includes(codigoTipoSeguro)) {
                            selectTipoSeguro.value = codigoTipoSeguro;
                        }
                     }


    function llenarOpcionesReligion(codigoReligion) {
                        const selectReligion = document.getElementById('religion');
                        selectReligion.innerHTML = '';

                        const codigosReligion = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
                        codigosReligion.forEach(codigo => {
                            const descripcion = obtenerDescripcionReligion(codigo);
                            const opcion = document.createElement('option');
                            opcion.value = codigo;
                            opcion.text = descripcion;
                            selectReligion.add(opcion);
                        });

                        if (codigosReligion.includes(codigoReligion)) {
                            selectReligion.value = codigoReligion;
                        }
                    }

    function obtenerDescripcionReligion(codigoReligion) {
                        switch (codigoReligion) {
                            case "01":
                                return "CATOLICO(A)";
                            case "02":
                                return "EVANGELICO(A)";
                            case "03":
                                return "CRISTIANO(A)";
                            case "04":
                                return "TESTIGO DE JEHOVA";
                            case "05":
                                return "MORMON";
                            case "06":
                                return "PROTESTANTE";
                            case "07":
                                return "AGNOSTICO(A)";
                            case "08":
                                return "OTRO";
                            case "09":
                                return "ADVENTISTA";
                            default:
                                return "Desconocido";
                        }
                    }


    function llenarOpcionesGrupoSanguineo(codigoGrupoSanguineo) {
                        const selectGrupoSanguineo = document.getElementById('tipoSangre');
                        selectGrupoSanguineo.innerHTML = '';

                        const codigosGrupoSanguineo = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
                        codigosGrupoSanguineo.forEach(codigo => {
                            const descripcion = obtenerDescripcionGrupoSanguineo(codigo);
                            const opcion = document.createElement('option');
                            opcion.value = codigo;
                            opcion.text = descripcion;
                            selectGrupoSanguineo.add(opcion);
                        });

                        if (codigosGrupoSanguineo.includes(codigoGrupoSanguineo)) {
                            selectGrupoSanguineo.value = codigoGrupoSanguineo;
                        }
                    }    


    function obtenerDescripcionGrupoSanguineo(codigoGrupoSanguineo) {
                        switch (codigoGrupoSanguineo) {
                            case "01":
                                return "AB POSITIVO";
                            case "02":
                                return "AB NEGATIVO";
                            case "03":
                                return "A POSITIVO";
                            case "04":
                                return "A NEGATIVO";
                            case "05":
                                return "B POSITIVO";
                            case "06":
                                return "B NEGATIVO";
                            case "07":
                                return "O POSITIVO";
                            case "08":
                                return "O NEGATIVO";
                            case "09":
                                return "No determinado";
                            default:
                                return "Desconocido";
                        }
                    }

    function llenarOpcionesEstadoCivil(codigoEstadoCivil) {
                        const selectEstadoCivil = document.getElementById('EstadoCivil');
                        selectEstadoCivil.innerHTML = '';

                        const codigosEstadoCivil = ["01", "02", "03", "04", "05"];
                        codigosEstadoCivil.forEach(codigo => {
                            const descripcion = obtenerDescripcionEstadoCivil(codigo);
                            const opcion = document.createElement('option');
                            opcion.value = codigo;
                            opcion.text = descripcion;
                            selectEstadoCivil.add(opcion);
                        });

                        if (codigosEstadoCivil.includes(codigoEstadoCivil)) {
                            selectEstadoCivil.value = codigoEstadoCivil;
                        }
                    }

    function obtenerDescripcionEstadoCivil(codigoEstadoCivil) {
                        switch (codigoEstadoCivil) {
                            case "01":
                                return "SOLTERO(A)";
                            case "02":
                                return "CASADO(A)";
                            case "03":
                                return "VIUDO(A)";
                            case "04":
                                return "DIVORCIADO(A)";
                            case "05":
                                return "CONVIVIENTE";
                            default:
                                return "Desconocido";
                        }
                    }

    function mostrarMensajeModal(mensaje) {
                      document.getElementById('mensajeModalTexto').innerText = mensaje;
                      $('#mensajeModal1').modal('show');
                    }



    async function fetchData(documento) {
                    try {
                      const response = await fetch(`http://127.0.0.1:8000/Historia_SIPA_DNI/${documento}`);
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
  
    function mostrarCoincidencias() {
                    var IAP = document.getElementById('f_apellidoPaterno').value;
                    var IAM = document.getElementById('f_apellidoMaterno').value;
                    var url = 'http://127.0.0.1:8000/buscar_pacientes_SIPA?IAP=' + IAP + '&IAM=' + IAM;
                    fetch(url)
                       .then(response => response.json())
                       .then(data => {
                          var modalContent = '<table class="table">';
                          modalContent += '<thead><tr><th>N° HC</th><th>PATERNO</th><th>MATERNO</th><th>NOMBRE</th><th>DOCUMENTO</th><th>DIRECCION</th><th>NACIMIENTO</th></tr></thead>';
                          modalContent += '<tbody>';
                          
                          data.pacientes.forEach(paciente => {
                             modalContent += '<tr>';
                             modalContent += '<td>' + paciente.IHC + '</td>';
                             modalContent += '<td>' + paciente.IAP + '</td>';
                             modalContent += '<td>' + paciente.IAM + '</td>';
                             modalContent += '<td>' + paciente.INO + '</td>';
                             modalContent += '<td>' + paciente.IDNI + '</td>';
                             modalContent += '<td>' + paciente.IDI + '</td>';
                             modalContent += '<td>' + moment(paciente.IFN).format('DD/MM/YYYY') + '</td>';
                             modalContent += '</tr>';
                          });
  
                          modalContent += '</tbody>';
                          modalContent += '</table>';
  
                          document.getElementById('modalBody').innerHTML = modalContent;
                          $('#mensajeModal').find('table').css('font-size', '13px');
                          $('#mensajeModal').modal('show');
                       })
                       .catch(error => console.error('Error en la solicitud AJAX:', error));
                 }
             
  
  
  
  
      
  
async function obtenerNuevoIHC() {
                  const urlIHC = 'http://127.0.0.1:8000/obtener_valor_ihc_en_blanco';
                  
                  try {
                      const response = await fetch(urlIHC);
                      const data = await response.json();
  
                      if (data.HC_Siguiente) {
                          return data.HC_Siguiente.toString();
                      } else {
                          console.error('Error al obtener nuevo valor de IHC');
                          return null;
                      }
                  } catch (error) {
                      console.error('Error en la solicitud para obtener valor de IHC:', error);
                      return null;
                  }
              }
  
async function guardarDatos() {
          const url = 'http://127.0.0.1:8000/Insert_SIPAHC';
          const nuevoIHC = await obtenerNuevoIHC();
  
          if (nuevoIHC === null) {
              return;
          }
              const data = {
                ITP: 'C',
                IHC: nuevoIHC,
                IAP: document.getElementById('apellidoPaterno').value,
                IAM: document.getElementById('apellidoMaterno').value,
                IAS: document.getElementById('apellidoMaterno').value,
                INO: document.getElementById('nombre').value,
                IOC: document.getElementById('ocupacion').value,
                ISE: document.getElementById('Sexo').value,
                IFN: new Date(document.getElementById('fechaNacimiento').value).toISOString().split('T')[0],
                IPC: '130101',
                ILN: document.getElementById('lugarNacimiento').value,
                INP: document.getElementById('nPadre').value,
                INM: document.getElementById('nMadre').value,
                IDI: document.getElementById('direccion').value,
                IFA: new Date().toISOString(),
                IDNI: document.getElementById('nro_Documento').value,
                IOB: document.getElementById('antecedentes').value,
                ITF: document.getElementById('telefono').value,
                ITC: document.getElementById('telefono').value,
                ITS: document.getElementById('tipoSeguro').value,
                INS: '0',
                IGS: document.getElementById('tipoSangre').value,
                IEC: document.getElementById('EstadoCivil').value,
                IDA: document.getElementById('nombrePadre').value,
                IPT: document.getElementById('parentesco').value,
                IDP: document.getElementById('telefonoPadre').value,
                IRG: document.getElementById('religion').value,
                IGI: document.getElementById('GradoInstruccion').value,
                ICE: document.getElementById('centroEducativo').value,
                IDB: '0',
                ITU: 'M',
                IUS: '098',
                IFC: new Date().toISOString(),
                ITK: 0,
                IHJ: 0,
              };
  
              fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
                .then(response => response.json())
                .then(data => {
                  console.log('Success:', data);
                })
                .catch(error => {
                  console.error('Error:', error);
                });
            }

          document.getElementById('fechaNacimiento').addEventListener('change', function() {
            var fechaNacimiento = new Date(this.value);
            var fechaActual = new Date();
            var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        
            
            if (fechaActual.getMonth() < fechaNacimiento.getMonth() || (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
              edad--;
            }
            document.getElementById('edadActual').value = edad + ' años';
          });
     