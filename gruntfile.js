module.exports = function(grunt) {
  grunt.initConfig ({

    /**
     * Import project info
     */
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Project details
     */
    project: {
      js: [
        'src/jquery.parallaxmouse.js'
      ]
    },

    /**
     * Set project banner
     */
    tag: {
      banner: '/*!\n' +
      ' * <%= pkg.name %>\n' +
      ' * <%= pkg.title %>\n' +
      ' * @author <%= pkg.author %>\n' +
      ' * @version <%= pkg.version %>\n' +
      ' * @license <%= pkg.license %>\n' +
      ' */\n'
    },

    /**
     * Minify JavaScript
     */
    uglify: {
      min: {
        options: {
          banner: '<%= tag.banner %>',
          mangle: true,
          beautify: {
            width: 80,
            beautify: false
          }
        },
        files: {
          'dist/jquery.parallaxmouse.min.js': ['src/jquery.parallaxmouse.js']
        }
      }
    },

    /**
     * Watch for file changes
     */
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: [
          'src/*.js'
        ],
        options: {
          spawn: false
        },
        tasks: ['uglify']
      }
    }
  });

  /**
   * Load npm tasks
   */
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  /**
   * Deffine tasks
   */
  grunt.registerTask('default', [
    'uglify',
    'watch'
  ]);
};
