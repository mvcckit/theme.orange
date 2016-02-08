module.exports = function(grunt) {
	grunt.initConfig({
   		concat: {
			css: {
				src: [	
               'src/objects/alert.css',
               'src/objects/label.css',
               'src/objects/btn.css',
               'src/components/sect-header.css',
               'src/components/sect-banner.css',                  
               'src/components/btn-outline.css',                  
               'src/trumps/colors.css' 
				],					
				dest: 'builds/theme.full.css'
			}
   		},	
   		replace: {
   			dist: {
   				src: ['builds/theme.full.css'],
               dest: ['builds/theme.full.css'],
               replacements: [
                  {from: "$bg-header",     to: "#D4520F"},
                  {from: "$bg-banner",     to: "#F27435"},
                  {from: "$bg-label",      to: "#D4520F"},
                  {from: "$bg-alert",      to: "#D50F04"},                  
                  {from: "$bg-accent",     to: "#F2F2F2"},
                  {from: "$bg-btn-normal", to: "#F27435"},
                  {from: "$bg-btn-hover",  to: "#F38148"},
                  {from: "$bg-btn-active", to: "#F16722"},
               ]
   			}
   		},
   		cssmin: {
   			css: {
   				src: 'builds/theme.full.css',
   				dest: 'builds/theme.min.css'
   			},
   		}
	});

 	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

 	grunt.registerTask('default', ['concat', 'replace', 'cssmin']);
}