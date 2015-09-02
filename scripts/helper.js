var skills = '<div class="col-md-3"><img src="assets/images/%data%.png" alt="my skills" class="img-responsive img-circle"></div>';

var skills_array =
[
  'skillHTML',
  'skillCSS',
  'skillJS',
  'skillJQUERY',
  'skillPHP',
  'skillLAMP',
  'skillMORE',
  'skillSOON'
];

var skills_new = '';

for(var i=0; i < skills_array.length; i += 1) {
  skills_new = skills.replace('%data%', skills_array[i]);
  $('.skills-section-images').append(skills_new);
}

var skill1 = skills_array[0];