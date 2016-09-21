'use strict';

 module.exports = function (grunt) {
     grunt.initConfig({
         shell : {
             prepareFiles : {
                 command : [
                     'if not exist "dist" mkdir "dist"',
                     'cp src/index.html dist/'
                 ].join('&&')
             },
             build : {
                 command : 'webpack .'
             }
         }
     });

     grunt.loadNpmTasks('grunt-shell');

     grunt.registerTask('default', ['shell']);
 }
