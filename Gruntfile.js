//Gruntfile.js
module.exports = function (grunt) {
  grunt.initConfig({

    // Watch task config
    watch: {
      sass: {
        files: "assets/scss/*.scss",
        tasks: ['sass']
      },
      cssmin: {
        files: ["assets/css/*.css","!assets/css/*.min.css"],
        tasks: ['cssmin']
      },
      uglify: {
        files: ["assets/js/*.js", "!assets/js/*.min.js"],
        tasks: ['uglify']
      },
      imagemin: {
        files: ['assets/img/*.{png,jpg,gif,svg}'],
        tasks: ['newer:imagemin'],
        options: {
          spawn: false,
        }
       }
    },

    // Sass task config
    sass: {
        dev: {
            files: {
                // fichero destino  // fichero .scss
                "assets/css/ualm.css" : "assets/scss/ualm.scss"
            }
        }
    },

    // BrowserSync task config
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "assets/css/*.css",
            "assets/js/*.js",
            "*.html",
            "backend/*.html"
          ]
        },
        options: {
          watchTask: true,
          proxy: "http://neuronswork.local/NeuronsWork/UALM/"
          }
        }
      },

    // UnCSS task config
    uncss: {
        dist: {
            options: {
               //Estilos que queremos limpiar
               stylesheets : ['assets/css/bootstrap.min.css'],

               //Estilos que no queremos limpiar
               ignoreSheets: [/ualm.css/],
            },
            files: {
                    //Archivo css de salida    //Scanea las clases, ids, etc de este html
                    'assets/css/bootstrap.min.css': ['index.html']
            }
        }
    },

    // Cssmin task config
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {//Fichero combinado   //Ficheros que vamos a combinar, 2 .css
                'assets/css/ualm.min.css': ['assets/css/ualm.css', 'assets/css/bootstrap.min.css']
        }
      }
    },

    //Uglify task config
    uglify: {
      build: {
        src: 'assets/js/ualm.js',//Ruta de fichero de entrada
        dest: 'assets/js/ualm.min.js'//Ruta del fichero minificado
      }
    },

    //Imagemin task config
    imagemin: {
        main: {
          files: [{
            expand: true,
            cwd: 'assets/img/', //todas las imágenes de esta ruta
            src: ['**/*.{png,jpg,gif,.svg}'], //patrón de tipos de imagen
            dest: 'assets/img/' //carpeta destino una vez optimizadas
          }]
        }
     }

  });

  //Cargamos los grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');

 //Tarea por defecto
 grunt.registerTask('default', ['browserSync', 'watch']);
};