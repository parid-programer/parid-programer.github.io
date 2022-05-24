var titles = [
    "What I do",
  ],
  part,
  i = 0,
  offset = 0,
  len = titles.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 100;
var titleflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= titles[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = true;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = titles[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".title").text(part);
  }, speed);
};

$(document).ready(function () {
  titleflick();
});
