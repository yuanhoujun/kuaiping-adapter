/* global hexo */

'use strict';

const path = require('path');

// Add comment
hexo.extend.filter.register('theme_inject', injects => {
  let theme = hexo.theme.config;

  if (!theme.kuaiping.enable || !theme.kuaiping.appid) return;

  injects.comment.raw('kuaiping', `<div id="KPSM" sourceid="{{ page.path }}" appid="{{ theme.kuaiping.appid }}"></div>`, {}, {cache: false});
  injects.bodyEnd.file('kuaiping', path.join(hexo.theme_dir, 'layout/_third-party/comments/kuaiping.swig'));
});