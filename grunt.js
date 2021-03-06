module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-closure-compiler');

  // Project configuration.
  grunt.initConfig({
    'closure-compiler': {
      // Production script
      prod: {
        js: [
          'src/scd.js',
          'src/exports.js'
        ],
        jsOutputFile: 'build/scd.min.js',
        options: {
          compilation_level: 'ADVANCED_OPTIMIZATIONS',
          language_in: 'ECMASCRIPT5_STRICT',
          summary_detail_level: 3,
          warning_level: 'VERBOSE',
          define: [
            '"DEBUG=false"'
          ]
        }
      },

      // Debug script
      debug: {
        js: '<config:closure-compiler.prod.js>',
        jsOutputFile: 'build/scd.debug.js',
        options: {
          compilation_level: 'ADVANCED_OPTIMIZATIONS',
          language_in: 'ECMASCRIPT5_STRICT',
          summary_detail_level: 3,
          warning_level: 'VERBOSE',
          define: [
            '"DEBUG=true"'
          ],
          debug: true,
          formatting: 'PRETTY_PRINT'
        }
      }
    }

  });

  // Default task.
  grunt.registerTask('default', 'closure-compiler:prod closure-compiler:debug');

};
