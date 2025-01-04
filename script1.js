<script>
      function searchInIframe() {
        var input = document.getElementById('search-input');
        var searchTerm = input.value;
        var iframe = document.getElementById('embedded-iframe');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        var text = iframeDocument.body.innerHTML;
        var found = text.match(new RegExp(searchTerm, 'gi'));

        if (found) {
          var positions = [];
          for (var i = 0; i < found.length; i++) {
            var index = text.indexOf(found[i]);
            positions.push(index);
            text = text.replace(found[i], '-'.repeat(found[i].length));
          }
          iframeDocument.body.innerHTML = text;

          var firstPosition = positions[0];
          iframe.contentWindow.scrollTo(0, firstPosition);
        }
      }
</script>