'use strict';

// Register `phoneList` component, along with its associated controller and template

angular.
  module('navBar').
  component('navBar', {
    template: '<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">' +
    '<div class="container-fluid">' +
          '<div class="navbar-header">' +
              '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
                  '<span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>' +
              '</button>' +
              '<a class="navbar-brand page-scroll" href="#page-top">Yellowtail</a>' +
          '</div>' +
          '<!-- Collect the nav links, forms, and other content for toggling -->' +
          '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
              '<ul class="nav navbar-nav navbar-right">' +
                  '<li>' +
                      '<a class="page-scroll" href="#about">Menu</a>' +
                  '</li>' +
                  '<li>' +
                      '<a class="page-scroll" href="#menu">Mission</a>' +
                  '</li>' +
                  '<li>' +
                      '<a class="page-scroll" href="#portfolio">Gallery</a>' +
                  '</li>' +
                  '<li>' +
                      '<a class="page-scroll" href="#contact">Contact</a>' +
                  '</li>' +
              '</ul>' +
          '</div>' +
          '<!-- /.navbar-collapse -->' +
      '</div>' +
      '<!-- /.container-fluid -->' +
  '</nav>'
  });
