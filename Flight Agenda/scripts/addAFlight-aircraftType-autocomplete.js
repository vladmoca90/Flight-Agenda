$(function () {
    var aircraftType = [
      "Airbus a318",
      "Airbus a319",
      "Airbus a320",
      "Airbus a321",
      "Airbus a330",
      "Airbus a340",
      "Airbus a350",
      "Airbus a380",
      "Boeing 707",
      "Boeing 717",
      "Boeing 727",
      "Boeing 737",
      "Boeing 747",
      "Boeing 757",
      "Boeing 767",
      "Boeing 777",
      "Boeing 787"
    ];
    function split(val) {
        return val.split(/,\s*/);
    }
    function extractLast(term) {
        return split(term).pop();
    }

    $("#aircraftType")
      .on("keydown", function (event) {
          if (event.keyCode === $.ui.keyCode.TAB && $(this).autocomplete("instance").menu.active) {
              event.preventDefault();
          }
      })
      .autocomplete({
          minLength: 0,
          source: function (request, response) {
              // delegate back to autocomplete, but extract the last term
              response($.ui.autocomplete.filter(
                availableTags, extractLast(request.term)));
          },
          focus: function () {
              // prevent value inserted on focus
              return false;
          },
          select: function (event, ui) {
              var terms = split(this.value);
              // remove the current input
              terms.pop();
              // add the selected item
              terms.push(ui.item.value);
              // add placeholder to get the comma-and-space at the end
              terms.push("");
              this.value = terms.join(", ");
              return false;
          }
      });
});