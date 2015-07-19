module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-typescript-qunit');

  grunt.initConfig({
    ts : {
      base : {
        files:[ { src : ['src/**/*.ts'], dest: 'bin/' }],
        options : {
          module : 'amd',
          target : 'es5',
          sourceMap : true
        }
      }
    },

    clean : {
      all : {
        src : ['bin/**/*.js','bin/**/*.js.map','src/**/*.js','src/**/*.js.map','output','test/**/*.html','test/**/*.js','test/**/*.js.map']
      }
    },

    tsqunit : {
      srcDir : './src/',
      testDir : './test/',
      buildReportDir : './output/'
    }
  });

  grunt.registerTask('build',['clean:all','ts']);
}
