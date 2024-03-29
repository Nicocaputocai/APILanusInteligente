module.exports = {
  index: function (req, res) {
    return res.status(200).json({
      // local:{
      //     bomberos:{
      //         vista: 'http://localhost:4000/api/bomberos',
      //         documentacion:'http://localhost:4000/api/bomberos/doc'
      // },
      // clubes:{
      //   vista: 'http://localhost:4000/api/club',
      // documentacion:'http://localhost:4000/api/club/doc'},
      // Educacion: {
      // vista:'http://localhost:4000/api/education',
      // documentacion:'http://localhost:4000/api/education/doc'
      // },
      // salud:{
      //   vista: 'http://localhost:4000/api/health',
      // documentacion:'http://localhost:4000/api/health/doc'
      // },
      //seguridad:{
      //  vista:'http://localhost:4000/api/security',
      //documentacion:'http://localhost:4000/api/security/doc'
      //},
      //  transporte:{
      //    vista:'http://localhost:4000/api/transport',
      //  documentacion:'http://localhost:4000/api/transport/doc'
      //}
      //},
      remote: {
        clubes: {
          datos: "https://api.desarrolloi.org/api/club",
          },
          Educacion: {
            datos: "https://api.desarrolloi.org/api/education",
          },
          "Dependencias Municipales": {
            datos: "https://api.desarrolloi.org/api/municipalDependence",
          },
          "Obra pública nacional en Lanús":{
            datos: "https://api.desarrolloi.org/api/publicWork",
          },
          "Plazas y Parques":{
            datos:"https://api.desarrolloi.org/api/square-park"
          },
          salud: {
            datos: "https://api.desarrolloi.org/api/health",
          },
          seguridad: {
            datos: "https://api.desarrolloi.org/api/security",
          },
          transporte: {
            datos: "https://api.desarrolloi.org/api/transport",
          },
        },
      
    });
  },
};
