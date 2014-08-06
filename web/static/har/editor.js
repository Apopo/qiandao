// Generated by CoffeeScript 1.7.1
(function() {
  define(function(require, exports, module) {
    var editor;
    require('jquery');
    require('bootstrap');
    require('angular');
    require('/static/har/contenteditable');
    require('/static/har/update_ctrl');
    require('/static/har/entry_list');
    require('/static/har/entry_editor');
    $(document).on('click', '.contentedit-wrapper', function(ev) {
      var editable;
      return editable = $(this).hide().next('[contenteditable]').show().focus();
    });
    $(document).on('blur', '.contentedit-wrapper + [contenteditable]', function(ev) {
      return $(this).hide().prev('.contentedit-wrapper').show();
    });
    $(document).on('focus', '[contenteditable]', function(ev) {
      var range, sel;
      if (this.childNodes[0]) {
        range = document.createRange();
        sel = window.getSelection();
        range.setStartBefore(this.childNodes[0]);
        range.setEndAfter(this);
        sel.removeAllRanges();
        return sel.addRange(range);
      }
    });
    editor = angular.module('HAREditor', ['editablelist', 'upload_ctrl', 'entry_list', 'entry_editor']);
    return {
      init: function() {
        return angular.bootstrap(document.body, ['HAREditor']);
      }
    };
  });

}).call(this);
